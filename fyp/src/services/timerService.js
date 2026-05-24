// frontend/src/services/timerService.js
import axiosInstance from './axiosConfig';

let pollingInterval = null;
let lastCheckTime = Date.now();
let alarmCallback = null;

const timerService = {
  // Create new timer
  createTimer: async (duration, label = 'Cooking Timer', recipeId = null) => {
    try {
      const response = await axiosInstance.post('/timers', {
        duration,
        label,
        recipeId
      });
      
      // Start polling for timer completion
      timerService.startBackgroundPolling();
      
      return response.data;
    } catch (error) {
      console.error('Create timer error:', error);
      return null;
    }
  },

  // Get all timers
  getAllTimers: async () => {
    try {
      const response = await axiosInstance.get('/timers');
      return response.data.timers || [];
    } catch (error) {
      console.error('Get timers error:', error);
      return [];
    }
  },

  // Get active timers
  getActiveTimers: async () => {
    try {
      const response = await axiosInstance.get('/timers/active');
      return response.data.timers || [];
    } catch (error) {
      console.error('Get active timers error:', error);
      return [];
    }
  },

  // Complete timer
  completeTimer: async (timerId) => {
    try {
      const response = await axiosInstance.put(`/timers/${timerId}/complete`);
      return response.data;
    } catch (error) {
      console.error('Complete timer error:', error);
      return null;
    }
  },

  // Delete timer
  deleteTimer: async (timerId) => {
    try {
      const response = await axiosInstance.delete(`/timers/${timerId}`);
      return response.data;
    } catch (error) {
      console.error('Delete timer error:', error);
      return null;
    }
  },

  // ✅ BACKGROUND POLLING - Modal band hone par bhi kaam karega
  startBackgroundPolling: () => {
    if (pollingInterval) return;
    
    console.log("🔄 Started background timer polling");
    
    pollingInterval = setInterval(async () => {
      try {
        const activeTimers = await timerService.getActiveTimers();
        const now = new Date();
        
        for (const timer of activeTimers) {
          const endTime = new Date(timer.endTime);
          const remaining = Math.max(0, Math.floor((endTime - now) / 1000));
          
          if (remaining === 0) {
            console.log(`🔔 Timer completed in background: ${timer.label}`);
            
            // Mark as completed
            await timerService.completeTimer(timer._id);
            
            // Trigger alarm callback
            if (alarmCallback) {
              alarmCallback(timer.label);
            }
            
            // Show notification even if modal is closed
            timerService.showBackgroundNotification(timer.label);
          }
        }
      } catch (error) {
        console.error("Polling error:", error);
      }
    }, 5000); // Check every 5 seconds
  },

  stopBackgroundPolling: () => {
    if (pollingInterval) {
      clearInterval(pollingInterval);
      pollingInterval = null;
      console.log("🛑 Stopped background timer polling");
    }
  },

  // Set callback for when alarm triggers
  onAlarmTrigger: (callback) => {
    alarmCallback = callback;
  },

  // Show notification from background
  showBackgroundNotification: (label) => {
    if ("Notification" in window && Notification.permission === "granted") {
      const notification = new Notification("⏰ Timer Complete!", {
        body: `${label} - Time's up!`,
        requireInteraction: true,
        tag: "chefbot-timer",
        renotify: true
      });
      
      notification.onclick = () => {
        window.focus();
        notification.close();
      };
    }
    
    // Try to play sound in background
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
        audioContext.close();
      }, 500);
    } catch(e) {
      console.log("BG sound error:", e);
    }
  }
};

export default timerService;