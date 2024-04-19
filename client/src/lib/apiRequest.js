import axios from "axios";

const apiRequest = axios.create({
    baseURL: 'https://real-estate-api-coral.vercel.app/api', 
    withCredentials: true,
});

export default apiRequest;