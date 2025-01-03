import axios from 'axios';

const API = axios.create({
  baseURL: 'https://neina-booking-assignment-5.onrender.com/api'
});

export default API;
