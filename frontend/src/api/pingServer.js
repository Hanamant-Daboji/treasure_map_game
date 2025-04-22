 import axios from 'axios';

// URL of our backend server
const API_URL = 'http://localhost:4000';

// Function to ping the server
export const pingServer = async () => {
  try {
    const res = await axios.get(`${API_URL}/`);
    return res.data;   
  } catch (error) {
    console.error('Error contacting server:', error.message);
    return null;
  }
};
