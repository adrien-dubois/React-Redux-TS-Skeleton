import axios from "axios";

const API = axios.create({ 
    baseURL: "http://localhost:8000/api" 
});

/*----- JWT Check Middleware -----*/
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers!.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')!).token}`;
    }
    
    return req;
});

/*----- ENDPOINTS -----*/

// AUTH
export const signIn = (formData: any) => API.post('/login_check',formData);