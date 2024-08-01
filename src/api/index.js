import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4444';

export const getSearchId = async () => {
  try {
    const response = await axios.get('/search');
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getFlightsData = async (searchId) => {
  try {
    const response = await axios.get(`/flights?searchId=${searchId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
