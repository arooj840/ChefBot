// services/dailyReportService.js

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Get today's pending report
export const getPendingReport = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/daily-report/pending`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return await response.json();
  } catch (error) {
    console.error('Error fetching pending report:', error);
    return { success: false, message: error.message };
  }
};

// Submit usage reply
export const submitUsage = async (message) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/daily-report/submit-usage`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    });
    return await response.json();
  } catch (error) {
    console.error('Error submitting usage:', error);
    return { success: false, message: error.message };
  }
};

// Get user's reports history
export const getUserReports = async (page = 1, limit = 10) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/daily-report/my-reports?page=${page}&limit=${limit}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return await response.json();
  } catch (error) {
    console.error('Error fetching reports:', error);
    return { success: false, message: error.message };
  }
};