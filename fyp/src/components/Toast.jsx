import React, { useState, useEffect } from 'react';
import './Toast.css';

let toastId = 0;
let timeouts = {};

export const showToast = (message, type = 'success') => {
  const id = toastId++;
  const event = new CustomEvent('show-toast', { detail: { id, message, type } });
  window.dispatchEvent(event);
  
  // Auto close after 3 seconds
  if (timeouts[id]) clearTimeout(timeouts[id]);
  timeouts[id] = setTimeout(() => {
    const closeEvent = new CustomEvent('close-toast', { detail: { id } });
    window.dispatchEvent(closeEvent);
    delete timeouts[id];
  }, 3000);
  
  return id;
};

const Toast = () => {
  const [toastList, setToastList] = useState([]);

  useEffect(() => {
    const handleShow = (e) => {
      const { id, message, type } = e.detail;
      setToastList(prev => [...prev, { id, message, type }]);
    };
    
    const handleClose = (e) => {
      const { id } = e.detail;
      setToastList(prev => prev.filter(toast => toast.id !== id));
    };
    
    window.addEventListener('show-toast', handleShow);
    window.addEventListener('close-toast', handleClose);
    
    return () => {
      window.removeEventListener('show-toast', handleShow);
      window.removeEventListener('close-toast', handleClose);
      // Clear all timeouts
      Object.values(timeouts).forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="toast-container">
      {toastList.map(toast => (
        <div key={toast.id} className={`toast toast-${toast.type}`}>
          <span className="toast-icon">
            {toast.type === 'success' && '✓'}
            {toast.type === 'error' && '✗'}
            {toast.type === 'warning' && '⚠'}
            {toast.type === 'info' && 'ℹ'}
          </span>
          <span className="toast-message">{toast.message}</span>
        </div>
      ))}
    </div>
  );
};

export default Toast;