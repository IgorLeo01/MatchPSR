import axios from 'axios';


export const authService = {
  async login(credentials: UserCredentials) {
    try {
      const response = await axios.post<{ token: string }>('/api/login', credentials);
      return response.data.token;
    } catch (error) {
      console.error('Error during login:', error);
      throw error; 
    }
  },
  async validateToken (token: string) {
    try {
        const response = await axios.post('/validate', {token});
        return response.data;
      } catch (error) {
        console.error('Error during login:', error);
        throw error; 
      }
  },
  async logout() {
    try {
      await axios.post('/logout');
    } catch (error) {
      console.error('Error during logout:', error);
      throw error;
    }
  }
  
};
