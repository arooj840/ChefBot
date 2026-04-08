import React, { useState, useEffect, useRef } from 'react';
import './AlarmModal.css';

const AlarmModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Global function for Header to call
  window.openAlarmModal = () => {
    console.log("✅ AlarmModal opening...");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="alarm-modal-overlay" onClick={closeModal}></div>
      
      {/* Sidebar Modal */}
      <div className="alarm-sidebar-modal">
        <div className="alarm-sidebar-header">
          <h2>⏰ ChefBot Timer</h2>
          <button className="close-btn" onClick={closeModal}>×</button>
        </div>
        
        <AlarmTimerComponent />
      </div>
    </>
  );
};

// Timer Component with INSTANT Background Timer
const AlarmTimerComponent = () => {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(300);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);
  const gainNodeRef = useRef(null);
  const timerIntervalRef = useRef(null);
  const beepIntervalRef = useRef(null);
  const floatingNotificationRef = useRef(null);
  const titleBlinkIntervalRef = useRef(null);

  // ✅ Global beep state for Header
  window.isAlarmBeeping = isSoundPlaying;

  // ✅ Check for existing timer/beep on mount
  useEffect(() => {
    // Check for existing beep
    const wasBeeping = localStorage.getItem('chefbot_beep_active');
    if (wasBeeping === 'true') {
      console.log("Resuming previous beep...");
      startContinuousBeep();
    }
    
    // Check for running timer
    const checkRunningTimer = () => {
      const timerRunning = localStorage.getItem('chefbot_timer_running');
      const endTime = localStorage.getItem('chefbot_timer_endTime');
      const storedTotalSeconds = localStorage.getItem('chefbot_timer_totalSeconds');
      
      if (timerRunning === 'true' && endTime && storedTotalSeconds) {
        const remainingTime = parseInt(endTime) - Date.now();
        
        if (remainingTime > 0) {
          // Timer is still running
          const remainingSeconds = Math.ceil(remainingTime / 1000);
          setTotalSeconds(remainingSeconds);
          setIsRunning(true);
          
          console.log(`⏰ Resuming background timer: ${remainingSeconds}s left`);
          
          // Start foreground timer for display
          timerIntervalRef.current = setInterval(() => {
            const timeLeft = parseInt(endTime) - Date.now();
            const secondsLeft = Math.max(0, Math.ceil(timeLeft / 1000));
            
            if (secondsLeft <= 0) {
              clearInterval(timerIntervalRef.current);
              setIsRunning(false);
              setIsCompleted(true);
              startContinuousBeep();
              clearBackgroundTimer();
            } else {
              setTotalSeconds(secondsLeft);
            }
          }, 1000);
        } else {
          // Timer already completed
          clearBackgroundTimer();
          startContinuousBeep();
        }
      }
    };

    checkRunningTimer();

    // Request notification permission
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
    
    // Cleanup floating notification on unmount
    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
      removeFloatingNotification();
      clearTitleBlinking();
    };
  }, []);

  // ✅ Clear background timer from localStorage
  const clearBackgroundTimer = () => {
    localStorage.removeItem('chefbot_timer_running');
    localStorage.removeItem('chefbot_timer_endTime');
    localStorage.removeItem('chefbot_timer_totalSeconds');
  };

  // ✅ Clear title blinking
  const clearTitleBlinking = () => {
    if (titleBlinkIntervalRef.current) {
      clearInterval(titleBlinkIntervalRef.current);
      titleBlinkIntervalRef.current = null;
    }
    document.title = "ChefBot";
  };

  // ✅ NEW: Create floating notification on screen
  const showFloatingStopNotification = () => {
    // Remove any existing notification
    removeFloatingNotification();
    
    // Create floating notification element
    const floatingDiv = document.createElement('div');
    floatingDiv.id = 'chefbot-floating-notification';
    floatingDiv.className = 'floating-notification active';
    
    floatingDiv.innerHTML = `
      <div class="floating-notification-content">
        <div class="floating-notification-header">
          <span class="floating-icon">🔔</span>
          <span class="floating-title">ChefBot Timer Complete!</span>
          <button class="floating-close-btn" id="floating-close-btn">×</button>
        </div>
        <div class="floating-notification-body">
          <p>Your timer has finished! Alarm is beeping.</p>
          <button class="floating-stop-btn" id="floating-stop-btn">
            ⏹️ STOP BEEP
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(floatingDiv);
    floatingNotificationRef.current = floatingDiv;
    
    // Add event listeners
    setTimeout(() => {
      const closeBtn = document.getElementById('floating-close-btn');
      const stopBtn = document.getElementById('floating-stop-btn');
      
      if (closeBtn) {
        closeBtn.onclick = () => {
          removeFloatingNotification();
        };
      }
      
      if (stopBtn) {
        stopBtn.onclick = () => {
          stopAllBeeps();
          removeFloatingNotification();
        };
      }
    }, 100);
    
    // Auto-remove after 30 seconds (optional)
    setTimeout(() => {
      if (floatingNotificationRef.current && document.body.contains(floatingNotificationRef.current)) {
        removeFloatingNotification();
      }
    }, 30000);
  };

  // ✅ NEW: Remove floating notification
  const removeFloatingNotification = () => {
    if (floatingNotificationRef.current && document.body.contains(floatingNotificationRef.current)) {
      document.body.removeChild(floatingNotificationRef.current);
      floatingNotificationRef.current = null;
    }
    
    // Also remove any orphaned notifications
    const existingNotification = document.getElementById('chefbot-floating-notification');
    if (existingNotification && existingNotification.parentNode) {
      existingNotification.parentNode.removeChild(existingNotification);
    }
  };

  const startContinuousBeep = () => {
    try {
      const audioContext = initializeAudioContext();
      if (!audioContext) return;
      
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      
      oscillatorRef.current = audioContext.createOscillator();
      gainNodeRef.current = audioContext.createGain();
      
      oscillatorRef.current.connect(gainNodeRef.current);
      gainNodeRef.current.connect(audioContext.destination);
      
      oscillatorRef.current.frequency.value = 800;
      oscillatorRef.current.type = 'sine';
      
      const startTime = audioContext.currentTime;
      const beepDuration = 0.3;
      const pauseDuration = 0.2;
      const totalCycle = beepDuration + pauseDuration;
      
      gainNodeRef.current.gain.setValueAtTime(0, startTime);
      gainNodeRef.current.gain.linearRampToValueAtTime(0.5, startTime + 0.05);
      gainNodeRef.current.gain.linearRampToValueAtTime(0, startTime + beepDuration);
      
      beepIntervalRef.current = setInterval(() => {
        if (oscillatorRef.current && gainNodeRef.current) {
          const currentTime = audioContext.currentTime;
          gainNodeRef.current.gain.cancelScheduledValues(currentTime);
          gainNodeRef.current.gain.setValueAtTime(0, currentTime);
          gainNodeRef.current.gain.linearRampToValueAtTime(0.5, currentTime + 0.05);
          gainNodeRef.current.gain.linearRampToValueAtTime(0, currentTime + beepDuration);
        }
      }, totalCycle * 1000);
      
      oscillatorRef.current.start();
      setIsSoundPlaying(true);
      
      // Store beep state
      localStorage.setItem('chefbot_beep_active', 'true');
      
      console.log("🔊 Alarm beep started!");
      
      // ✅ Show floating notification on front screen
      showFloatingStopNotification();
      
      // Browser Notification
      if ("Notification" in window && Notification.permission === "granted") {
        const notification = new Notification("⏰ ChefBot Timer Complete!", {
          body: `Time's up! Click this notification to stop the alarm.`,
          icon: "/logo.png",
          requireInteraction: true
        });
        
        notification.onclick = () => {
          stopAllBeeps();
          notification.close();
        };
      }
      
      // Page Title Blink - with proper cleanup
      clearTitleBlinking();
      let blinkCount = 0;
      titleBlinkIntervalRef.current = setInterval(() => {
        document.title = document.title === "⏰ TIME'S UP!" 
          ? "ChefBot" 
          : "⏰ TIME'S UP!";
        
        blinkCount++;
        if (blinkCount > 100) {
          clearInterval(titleBlinkIntervalRef.current);
          titleBlinkIntervalRef.current = null;
          document.title = "ChefBot";
        }
      }, 500);
      
    } catch (error) {
      console.error("Error starting continuous beep:", error);
      startFallbackBeep();
    }
  };

  const startFallbackBeep = () => {
    const beep = () => {
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        gainNode.gain.value = 0.3;
        
        oscillator.start();
        setTimeout(() => {
          oscillator.stop();
        }, 300);
      } catch (e) {
        console.log("Fallback beep failed");
      }
    };
    
    beepIntervalRef.current = setInterval(beep, 500);
    setIsSoundPlaying(true);
    localStorage.setItem('chefbot_beep_active', 'true');
    
    // ✅ Show floating notification for fallback beep too
    showFloatingStopNotification();
    
    // Page Title Blink for fallback too
    clearTitleBlinking();
    let blinkCount = 0;
    titleBlinkIntervalRef.current = setInterval(() => {
      document.title = document.title === "⏰ TIME'S UP!" 
        ? "ChefBot" 
        : "⏰ TIME'S UP!";
      
      blinkCount++;
      if (blinkCount > 100) {
        clearInterval(titleBlinkIntervalRef.current);
        titleBlinkIntervalRef.current = null;
        document.title = "ChefBot";
      }
    }, 500);
  };

  const initializeAudioContext = () => {
    if (!audioContextRef.current) {
      try {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      } catch (error) {
        console.error("AudioContext initialization failed:", error);
      }
    }
    return audioContextRef.current;
  };

  const stopAllBeeps = () => {
    // Stop the beep intervals and audio
    if (beepIntervalRef.current) {
      clearInterval(beepIntervalRef.current);
      beepIntervalRef.current = null;
    }
    
    if (oscillatorRef.current) {
      try {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
      } catch (error) {}
      oscillatorRef.current = null;
    }
    
    if (gainNodeRef.current) {
      try {
        gainNodeRef.current.disconnect();
      } catch (error) {}
      gainNodeRef.current = null;
    }
    
    // Clear any title blinking intervals
    clearTitleBlinking();
    
    // Reset state
    setIsSoundPlaying(false);
    setIsCompleted(false);
    localStorage.removeItem('chefbot_beep_active');
    document.title = "ChefBot";
    
    // Remove floating notification when beep stops
    removeFloatingNotification();
    
    console.log("🔕 All beeps stopped and title reset");
  };

  const formatTime = (timeInSeconds) => {
    const mins = Math.floor(timeInSeconds / 60);
    const secs = timeInSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    const numValue = parseInt(value) || 0;
    
    if (name === 'minutes') {
      const newTotalSeconds = Math.min(numValue, 120) * 60 + seconds;
      setMinutes(Math.min(numValue, 120));
      setTotalSeconds(newTotalSeconds);
    } else if (name === 'seconds') {
      const newSeconds = Math.min(numValue, 59);
      const newTotalSeconds = minutes * 60 + newSeconds;
      setSeconds(newSeconds);
      setTotalSeconds(newTotalSeconds);
    }
  };

  const startTimer = () => {
    if (isRunning || totalSeconds <= 0) return;
    
    setIsRunning(true);
    setIsCompleted(false);
    stopAllBeeps();
    
    // ✅ CRITICAL: Save timer to localStorage IMMEDIATELY
    const endTime = Date.now() + (totalSeconds * 1000);
    localStorage.setItem('chefbot_timer_running', 'true');
    localStorage.setItem('chefbot_timer_endTime', endTime.toString());
    localStorage.setItem('chefbot_timer_totalSeconds', totalSeconds.toString());
    
    console.log(`⏰ Timer INSTANTLY saved: ${totalSeconds}s, ends: ${new Date(endTime).toLocaleTimeString()}`);
    
    // Start foreground timer for display
    timerIntervalRef.current = setInterval(() => {
      const timeLeft = endTime - Date.now();
      const secondsLeft = Math.max(0, Math.ceil(timeLeft / 1000));
      
      if (secondsLeft <= 0) {
        clearInterval(timerIntervalRef.current);
        setIsRunning(false);
        setIsCompleted(true);
        startContinuousBeep();
        clearBackgroundTimer();
      } else {
        setTotalSeconds(secondsLeft);
      }
    }, 1000);
    
    // ✅ Start background interval checker
    const backgroundChecker = setInterval(() => {
      const timeLeft = endTime - Date.now();
      
      if (timeLeft <= 0) {
        clearInterval(backgroundChecker);
        
        // Check if we're still on the page
        if (document.visibilityState === 'visible') {
          // Page is visible, update state
          if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
          setIsRunning(false);
          setIsCompleted(true);
          startContinuousBeep();
        } else {
          // Page is hidden/closed, just start beep
          startContinuousBeep();
        }
        
        clearBackgroundTimer();
      }
    }, 1000);
    
    // Store checker reference
    window.chefbotBackgroundChecker = backgroundChecker;
  };

  const pauseTimer = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
    
    if (window.chefbotBackgroundChecker) {
      clearInterval(window.chefbotBackgroundChecker);
    }
    
    setIsRunning(false);
    clearBackgroundTimer();
  };

  const resetTimer = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
    
    if (window.chefbotBackgroundChecker) {
      clearInterval(window.chefbotBackgroundChecker);
    }
    
    stopAllBeeps();
    clearBackgroundTimer();
    
    const initialSeconds = minutes * 60 + seconds;
    setTotalSeconds(initialSeconds);
    setIsRunning(false);
    setIsCompleted(false);
  };

  const setQuickTime = (mins) => {
    if (isRunning) return;
    
    stopAllBeeps();
    setMinutes(mins);
    setSeconds(0);
    setTotalSeconds(mins * 60);
    setIsCompleted(false);
  };

  return (
    <div className="alarm-sidebar-content">
      {/* Instant Save Indicator */}
      
      
      <div className="timer-display-section">
        <div className={`time-display ${isCompleted ? 'completed' : ''} ${isRunning ? 'running' : ''}`}>
          {formatTime(totalSeconds)}
         
        </div>
      </div>
      
      <div className="time-setup-section">
        <h3>Set Timer Duration</h3>
        <div className="time-inputs">
          <div className="time-input">
            <label>Minutes</label>
            <input
              type="number"
              name="minutes"
              min="1"
              max="120"
              value={minutes}
              onChange={handleTimeChange}
              disabled={isRunning}
            />
          </div>
          <div className="time-input">
            <label>Seconds</label>
            <input
              type="number"
              name="seconds"
              min="0"
              max="59"
              value={seconds}
              onChange={handleTimeChange}
              disabled={isRunning}
            />
          </div>
        </div>
        
        <div className="quick-presets">
          <h4>Quick Presets</h4>
          <div className="preset-buttons">
            {[1, 5, 10, 15, 20, 30].map(mins => (
              <button
                key={mins}
                className="preset-btn"
                onClick={() => setQuickTime(mins)}
                disabled={isRunning}
              >
                {mins} min
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="timer-controls">
        <div className="main-buttons">
          {!isRunning && !isCompleted ? (
            <button 
              className="start-btn instant-save-btn" 
              onClick={startTimer} 
              disabled={totalSeconds <= 0}
            >
              START TIME
            </button>
          ) : isRunning ? (
            <button className="pause-btn" onClick={pauseTimer}>
              ⏸ PAUSE
            </button>
          ) : null}
          
          <button className="reset-btn" onClick={resetTimer}>
            🔄 RESET ALL
          </button>
        </div>
      </div>
      
      {/* Beep Status */}
      {isSoundPlaying && (
        <div className="beep-status-active">
          <div className="beep-status-content">
            <span className="beep-icon">🔊</span>
            <span>Alarm is beeping!</span>
            <button className="stop-beep-btn" onClick={stopAllBeeps}>
              STOP BEEP
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlarmModal;