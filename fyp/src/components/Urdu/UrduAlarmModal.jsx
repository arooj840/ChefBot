import React, { useState, useEffect, useRef } from 'react';
import timerService from '../../services/timerService';
import axiosInstance from '../../services/axiosConfig';
import './UrduAlarmModal.css';

const UrduAlarmModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="ur-alarm-modal-overlay" onClick={onClose}></div>
      <div className="ur-alarm-sidebar-modal">
        <div className="ur-alarm-sidebar-header">
          <h2>⏰ شیف بوٹ ٹائمر</h2>
          <button className="ur-close-btn" onClick={onClose}>×</button>
        </div>
        <UrduAlarmTimerComponent />
      </div>
    </>
  );
};

const UrduAlarmTimerComponent = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);
  const [totalSeconds, setTotalSeconds] = useState(5);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isBeeping, setIsBeeping] = useState(false);
  const [backendTimers, setBackendTimers] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Settings States
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);
  const [notificationEnabled, setNotificationEnabled] = useState(true);
  
  const timerIntervalRef = useRef(null);
  const currentTimerIdRef = useRef(null);
  const beepIntervalRef = useRef(null);
  const titleIntervalRef = useRef(null);
  const backgroundTimerRef = useRef(null);

  // Update total seconds when minutes/seconds change
  useEffect(() => {
    if (!isRunning) {
      setTotalSeconds((minutes * 60) + seconds);
    }
  }, [minutes, seconds, isRunning]);

  // Fetch all settings from backend
  const fetchSettings = async () => {
    try {
      const response = await axiosInstance.get('/users/settings');
      setSoundEnabled(response.data.settings?.soundPreferences?.beepEnabled ?? true);
      setVibrationEnabled(response.data.settings?.soundPreferences?.vibrationEnabled ?? true);
      setNotificationEnabled(response.data.settings?.notificationPreferences?.browserNotification ?? true);
      console.log("🔊 Settings loaded:", { 
        sound: response.data.settings?.soundPreferences?.beepEnabled,
        notification: response.data.settings?.notificationPreferences?.browserNotification 
      });
    } catch (error) {
      console.error('Error fetching settings:', error);
    }
  };

  useEffect(() => {
    fetchSettings();
    loadTimersFromBackend();
    checkExistingBeep();
    
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
    
    timerService.onAlarmTrigger((label) => {
      console.log("🔔 Background alarm received:", label);
      startBeep();
    });
    
    timerService.startBackgroundPolling();
    
    window.addEventListener('beforeunload', () => {
      if (isBeeping) {
        localStorage.setItem('chefbot_beep_active', 'true');
      }
    });
    
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      if (titleIntervalRef.current) clearInterval(titleIntervalRef.current);
      if (backgroundTimerRef.current) clearTimeout(backgroundTimerRef.current);
    };
  }, []);

  const checkExistingBeep = () => {
    const beepActive = localStorage.getItem('chefbot_beep_active');
    if (beepActive === 'true') {
      console.log("🔊 Restoring beep...");
      setIsCompleted(true);
      setIsBeeping(true);
      startBeep();
      showFloatingNotification();
    }
  };

  const loadTimersFromBackend = async () => {
    try {
      const timers = await timerService.getAllTimers();
      setBackendTimers(timers);
      
      const activeTimer = timers.find(t => t.status === 'running');
      if (activeTimer) {
        const now = new Date();
        const endTime = new Date(activeTimer.endTime);
        let remaining = Math.max(0, Math.floor((endTime - now) / 1000));
        
        if (remaining > 0) {
          setTotalSeconds(remaining);
          setIsRunning(true);
          currentTimerIdRef.current = activeTimer._id;
          startCountdown(remaining);
        } else {
          await timerService.completeTimer(activeTimer._id);
          startBeep();
        }
      }
    } catch (error) {
      console.error('Error loading timers:', error);
    }
  };

  const startCountdown = (duration) => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    
    let timeLeft = duration;
    
    timerIntervalRef.current = setInterval(async () => {
      if (timeLeft <= 1) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
        setIsRunning(false);
        setIsCompleted(true);
        setTotalSeconds(0);
        
        if (currentTimerIdRef.current) {
          await timerService.completeTimer(currentTimerIdRef.current);
        }
        
        startBeep();
      } else {
        timeLeft--;
        setTotalSeconds(timeLeft);
      }
    }, 1000);
  };

  const startTimer = async () => {
    if (isRunning || totalSeconds <= 0) return;
    
    setLoading(true);
    
    try {
      const duration = totalSeconds;
      const response = await timerService.createTimer(
        duration, 
        `${minutes} منٹ ${seconds} سیکنڈ ٹائمر`
      );
      
      const newTimer = response.timer;
      currentTimerIdRef.current = newTimer._id;
      setIsRunning(true);
      setIsCompleted(false);
      stopBeep();
      
      startCountdown(duration);
      scheduleBackgroundAlarm(duration, `${minutes} منٹ ${seconds} سیکنڈ ٹائمر`);
      
      console.log(`✅ Timer started: ${duration} seconds`);
      
    } catch (error) {
      console.error('Error:', error);
      alert('ٹائمر شروع کرنے میں ناکامی');
    } finally {
      setLoading(false);
    }
  };

  const scheduleBackgroundAlarm = (duration, label) => {
    if (backgroundTimerRef.current) clearTimeout(backgroundTimerRef.current);
    
    backgroundTimerRef.current = setTimeout(() => {
      triggerBackgroundAlarm(label);
    }, duration * 1000);
  };

  // BACKGROUND ALARM - WITH NOTIFICATION CHECK
  const triggerBackgroundAlarm = (label) => {
    console.log("🔔 Background alarm triggered!");
    
    // Notification check
    if (notificationEnabled && "Notification" in window && Notification.permission === "granted") {
      const notification = new Notification("⏰ ٹائمر مکمل!", {
        body: `${label} - وقت ختم ہو گیا!`,
        requireInteraction: true,
        tag: "chefbot-background",
        renotify: true
      });
      
      notification.onclick = () => {
        window.focus();
        notification.close();
      };
    }
    
    if (!document.hidden) {
      startBeep();
    } else {
      localStorage.setItem('chefbot_beep_active', 'true');
      setIsBeeping(true);
    }
  };

  const stopTimer = async () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    
    if (backgroundTimerRef.current) {
      clearTimeout(backgroundTimerRef.current);
      backgroundTimerRef.current = null;
    }
    
    if (currentTimerIdRef.current) {
      await timerService.completeTimer(currentTimerIdRef.current);
      currentTimerIdRef.current = null;
    }
    
    setIsRunning(false);
  };

  const resetTimer = async () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    
    if (backgroundTimerRef.current) {
      clearTimeout(backgroundTimerRef.current);
      backgroundTimerRef.current = null;
    }
    
    if (currentTimerIdRef.current) {
      await timerService.deleteTimer(currentTimerIdRef.current);
      currentTimerIdRef.current = null;
    }
    
    stopBeep();
    timerService.stopAlarm();
    removeFloatingNotification();
    
    setTotalSeconds((minutes * 60) + seconds);
    setIsRunning(false);
    setIsCompleted(false);
    
    await loadTimersFromBackend();
  };

  // START BEEP - WITH SOUND CHECK
  const startBeep = () => {
    // AGAR SOUND DISABLED HAI TO BEEP MAT BAJAO
    if (!soundEnabled) {
      console.log("🔇 آواز بند ہے، بیپ نہیں بجے گی");
      return;
    }
    
    stopBeep();
    
    setIsBeeping(true);
    setIsCompleted(true);
    localStorage.setItem('chefbot_beep_active', 'true');
    
    const playBeep = () => {
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        if (audioContext.state === 'suspended') {
          audioContext.resume();
        }
        
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
          audioContext.close();
        }, 300);
      } catch (e) {
        console.log("Beep error:", e);
      }
    };
    
    playBeep();
    beepIntervalRef.current = setInterval(playBeep, 1000);
    
    console.log("🔊 بیپ شروع ہو گئی!");
    
    showFloatingNotification();
    
    // NOTIFICATION CHECK - Browser Notification
    if (notificationEnabled && "Notification" in window && Notification.permission === "granted") {
      const notification = new Notification("⏰ ٹائمر مکمل!", {
        body: "الارم روکنے کے لیے کلک کریں",
        requireInteraction: true,
        vibrate: [200, 100, 200]
      });
      notification.onclick = () => {
        stopBeep();
        notification.close();
      };
    }
    
    let count = 0;
    const originalTitle = document.title;
    titleIntervalRef.current = setInterval(() => {
      if (isBeeping) {
        document.title = count % 2 === 0 ? "⏰ وقت ختم!" : "شیف بوٹ";
        count++;
        if (count > 100) {
          clearInterval(titleIntervalRef.current);
          document.title = originalTitle;
        }
      } else {
        clearInterval(titleIntervalRef.current);
        document.title = originalTitle;
      }
    }, 500);
    
    // Vibration check
    if (vibrationEnabled && 'vibrate' in navigator) {
      navigator.vibrate([200, 100, 200, 100, 200]);
    }
  };

  const stopBeep = () => {
    if (beepIntervalRef.current) {
      clearInterval(beepIntervalRef.current);
      beepIntervalRef.current = null;
    }
    
    if (titleIntervalRef.current) {
      clearInterval(titleIntervalRef.current);
      titleIntervalRef.current = null;
    }
    
    setIsBeeping(false);
    setIsCompleted(false);
    localStorage.removeItem('chefbot_beep_active');
    removeFloatingNotification();
    document.title = "شیف بوٹ";
    
    if ('vibrate' in navigator) {
      navigator.vibrate(0);
    }
    
    console.log("🔕 بیپ بند ہو گئی!");
  };

  // FLOATING NOTIFICATION - WITH NOTIFICATION CHECK
  const showFloatingNotification = () => {
    removeFloatingNotification();
    
    const div = document.createElement('div');
    div.id = 'ur-chefbot-floating-notification';
    div.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 99999;
      background: white;
      border-radius: 10px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.3);
      width: 300px;
      border-right: 5px solid #ff4757;
      font-family: Arial, sans-serif;
    `;
    div.innerHTML = `
      <div style="padding: 15px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
          <span>🔔</span>
          <strong>شیف بوٹ ٹائمر مکمل!</strong>
          <button id="ur-floating-close-btn" style="background:none;border:none;font-size:20px;cursor:pointer;">×</button>
        </div>
        <div>
          <p>⏰ وقت ختم! الارم بج رہا ہے۔</p>
          <button id="ur-floating-stop-btn" style="width:100%;padding:10px;background:#ff4757;color:white;border:none;border-radius:5px;cursor:pointer;font-weight:bold;">
            ⏹️ بند کرو
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(div);
    
    document.getElementById('ur-floating-close-btn')?.addEventListener('click', () => removeFloatingNotification());
    document.getElementById('ur-floating-stop-btn')?.addEventListener('click', () => stopBeep());
  };

  const removeFloatingNotification = () => {
    const existing = document.getElementById('ur-chefbot-floating-notification');
    if (existing) existing.remove();
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const deleteTimer = async (timerId) => {
    try {
      await timerService.deleteTimer(timerId);
      await loadTimersFromBackend();
      if (currentTimerIdRef.current === timerId) {
        stopTimer();
      }
    } catch (error) {
      console.error('Error deleting timer:', error);
    }
  };

  return (
    <div className="ur-alarm-sidebar-content">
      <div className="ur-timer-display-section">
        <div className={`ur-time-display ${isCompleted ? 'completed' : ''}`}>
          {formatTime(totalSeconds)}
        </div>
      </div>
      
      <div className="ur-time-setup-section">
        <h3>ٹائمر لگاؤ</h3>
        <div className="ur-time-inputs">
          <div className="ur-time-input">
            <label>منٹ</label>
            <input
              type="number"
              min="0"
              max="120"
              value={minutes}
              onChange={(e) => setMinutes(Math.min(parseInt(e.target.value) || 0, 120))}
              disabled={isRunning}
            />
          </div>
          <div className="ur-time-input">
            <label>سیکنڈ</label>
            <input
              type="number"
              min="0"
              max="59"
              value={seconds}
              onChange={(e) => setSeconds(Math.min(parseInt(e.target.value) || 0, 59))}
              disabled={isRunning}
            />
          </div>
        </div>
        
        <div className="ur-quick-presets">
          <h4>جلد لگاؤ</h4>
          <div className="ur-preset-buttons">
            {[1, 5, 10, 15, 20, 30].map(mins => (
              <button
                key={mins}
                className="ur-preset-btn"
                onClick={() => {
                  if (!isRunning) {
                    setMinutes(mins);
                    setSeconds(0);
                    stopBeep();
                  }
                }}
                disabled={isRunning}
              >
                {mins} منٹ
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="ur-timer-controls">
        <div className="ur-main-buttons">
          {!isRunning && !isCompleted ? (
            <button 
              className="ur-start-btn" 
              onClick={startTimer} 
              disabled={totalSeconds <= 0 || loading}
            >
              {loading ? '⏳ شروع ہو رہا ہے...' : '🚀 شروع کرو'}
            </button>
          ) : isRunning ? (
            <button className="ur-pause-btn" onClick={stopTimer}>
              ⏸ روکو
            </button>
          ) : null}
          
          <button className="ur-reset-btn" onClick={resetTimer}>
            🔄 دوبارہ
          </button>
        </div>
      </div>
      
      {backendTimers.length > 0 && (
        <div className="ur-saved-timers-section">
          <h4>📋 تمہارے ٹائمر</h4>
          <div className="ur-saved-timers-list">
            {backendTimers.map(timer => (
              <div key={timer._id} className="ur-saved-timer-item">
                <div>
                  <div>{timer.label}</div>
                  <small>{timer.status === 'running' ? '🔴 چل رہا ہے' : '✅ مکمل'}</small>
                </div>
                <button onClick={() => deleteTimer(timer._id)}>🗑️</button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {isBeeping && (
        <div className="ur-beep-status-active">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>🔊 الارم بج رہا ہے!</span>
            <button onClick={stopBeep} style={{ padding: '8px 16px', background: '#ff4757', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              بند کرو
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrduAlarmModal;