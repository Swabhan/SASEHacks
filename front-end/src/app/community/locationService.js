// locationService.js
import axios from 'axios';

const API_KEY = '19cb0fd079d306e1eb35b7a3372110faca8befa78332ae7a0b9bb868b6d7330b'; // Replace with your actual API key
const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.verizon.com/location/v1';

export const getLocationData = async (latitude, longitude) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        lat: latitude,
        lon: longitude,
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching location data:", error);
    throw error;
  }
};
