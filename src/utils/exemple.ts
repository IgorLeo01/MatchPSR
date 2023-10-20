import axios from 'axios';

export const exemple = {
  async fetchData() {
    try {
      const response = await axios.get('https://api.example.com/data');
      console.log('Data:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; 
    }
  },
  
  async updateData(dataToUpdate: any) {
    try {
      const response = await axios.put('https://api.example.com/data', dataToUpdate);
      console.log('Data updated:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  },
  
  async deleteData(id: number) {
    try {
      const response = await axios.delete(`https://api.example.com/data/${id}`);
      console.log('Data deleted:', response.data);
      return response.data; 
    } catch (error) {
      console.error('Error deleting data:', error);
      throw error; 
    }
  }
};
