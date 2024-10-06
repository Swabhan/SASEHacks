// proxy.js
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/location', async (req, res) => {
  const { lat, lon } = req.query; // Get latitude and longitude from query parameters
  const apiKey = '19cb0fd079d306e1eb35b7a3372110faca8befa78332ae7a0b9bb868b6d7330b'; // Replace with your API key

  try {
    const response = await axios.get(`https://api.verizon.com/location/v1/your-endpoint?lat=${lat}&lon=${lon}&apiKey=${apiKey}`);
    res.json(response.data); // Send the API response to the client
  } catch (error) {
    res.status(error.response.status).send(error.message); // Handle errors
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
