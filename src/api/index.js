import axios from "axios";


const api = axios.create({
    baseURL: "https://www.omdbapi.com/",
    params: {
         apikey: '3295fc54'
    }
})

export default api;

