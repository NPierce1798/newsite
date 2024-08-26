// api.js

import axios from 'axios';

const API_BASE_URL = 'http://165.227.86.141:8000/api/'; // Update this URL to match your Django endpoint

// Fetch existing posts
export const getPosts = () => {
  return axios.get(`${API_BASE_URL}posts/`);
};

// Send a new post (JSON object) to the Django backend
export const createPost = (postData) => {
  console.log('Sending data to Django:', postData); // Debugging output
  return axios.post(`${API_BASE_URL}session/`, postData, {
    headers: {
      'Content-Type': 'application/json', // Ensure correct content type
    },
  });
};

// Continue the story with new data
export const continueStory = (data) => {
  return axios.post(`${API_BASE_URL}session/`, data);
};
