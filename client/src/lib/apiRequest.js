import axios from "axios";

const apiRequest = axios.create({
    // baseURL: 'http://localhost:8800/api',
    baseURL: 'https://real-estate-api-coral.vercel.app/api', 
    withCredentials: true,
});

export default apiRequest;