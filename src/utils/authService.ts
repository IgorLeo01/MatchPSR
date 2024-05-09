import axios from 'axios';


export const authService = {
  async postLogin(credentials: UserCredentials) {
    try {
      const response = await axios.post<{ token: string }>(`http://localhost:8080/auth/login`, credentials);
      return response.data.token;
    } catch (error) {
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
