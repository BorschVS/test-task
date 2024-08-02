import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4444';

export const getSearchId = async (): Promise<any> => {
  try {
    const response = await axios.get('/search');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const getFlightsData = async (searchId: string): Promise<any> => {
  try {
    const response = await axios.get(`/flights?searchId=${searchId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
