// src/utils/api.js
import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL || "https://pairconcepts-backend.onrender.com/";

export const fetchPapers = async (input = "Blackholes") => {
  try {
    // Ensure the input is passed correctly to the backend endpoint
    console.log(`${API_URL}/gemini`, {
      params: { input }  // Send the input as a query parameter
    })
    const response = await axios.get(`${API_URL}gemini`, {
      params: { input }  // Send the input as a query parameter
    });
    console.log("this is the response: " + response.data)
    return response.data;  // Return the response data from the API
  } catch (error) {
    console.error("Error fetching papers:", error);
    throw error;  // Propagate the error
  }
};

export const getElasticData = async (query = "Blackholes", max_results = 5) => {
  try {
    const response = await axios.get(`${API_URL}/elastic_api`, {
      params: { query, max_results },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching elastic data:", error);
    throw error;
  }
};
