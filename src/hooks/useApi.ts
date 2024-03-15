import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        try {
            const response = await api.post('/validate', {token});
            return response.data;
          } catch (error) {
            console.error('Error during login:', error);
            throw error; 
        }
    },
    signIn: async (email: string, password: string) => {
        try {
            const response = await api.post('/login', {email, password});
            return response.data;
          } catch (error) {
            console.error('Error during login:', error);
            throw error; 
          }
    },
    logout: async () => {
        try {
            await api.post('/logout');
          } catch (error) {
            console.error('Error during logout:', error);
            throw error;
          }
    },
});