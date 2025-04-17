import axios from 'axios';
import { AuthResponse, Login } from '../../types/auth';
import { Register } from 'react-router-dom';

const BASE_URL = 'http://localhost:8000/api';

// Login request
export const loginUser = async (formData: Login) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, formData);
      console.log("Response: ", response);
      return response.data;
    } catch (error: any) {
      throw error.message ? error.message : error;
    }
  };
  
  // Register request
  export const registerUser = async (formData: Register) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, formData);
      console.log("Response: ", response);
      return response.data;
    } catch (error: any) {
      throw error.message ? error.message : error;
    }
  };