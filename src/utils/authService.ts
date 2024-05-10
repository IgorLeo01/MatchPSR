import axios from "axios";

export const authService = {
  async postLogin(credentials: UserCredentials) {
    const response = await axios.post<{
      token: string;
      userId: string;
      roles: string[];
    }>(`https://matchpsr-api.onrender.com/auth/login`, credentials);
    return response.data;
  },
  async validateToken(token: string) {
    try {
      const response = await axios.post("/validate", { token });
      return response.data;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  },
  async logout() {
    try {
      await axios.post("/logout");
    } catch (error) {
      console.error("Error during logout:", error);
      throw error;
    }
  },
};
