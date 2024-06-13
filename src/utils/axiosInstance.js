import axios from 'axios';


const role = sessionStorage.getItem('role');  

const axiosInstance = axios.create({
    baseURL: `https://tailortradebackendweb.onrender.com/${role}`
});
  


axiosInstance.interceptors.request.use(
    config => {
        console.log('Request Config:', config);
        const token = sessionStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            // Attempt to refresh token using endpoint that expects refresh token from HttpOnly cookie
            
            return axiosInstance.post(`https://tailortradebackendweb.onrender.com/${role}/refresh`)
                .then(res => {
                    if (res.status === 200) {
                        // Save new access token in sessionStorage
                        sessionStorage.setItem('accessToken', res.data.accessToken);
                        const current=sessionStorage.getItem('accessToken');
                        console.log(current);
                        // Update original request with new token
                        originalRequest.headers['Authorization'] = 'Bearer ' + res.data.accessToken;
                        return axiosInstance(originalRequest); // retry with new token
                    }
                }).catch(err => {
                    console.error('Error during token refresh:', err);
                    return Promise.reject(err);
                });
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
