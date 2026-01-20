import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_API
const AxiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
})

// Request Interceptors

AxiosInstance.interceptors.request.use(
    function(config){
        /*
        console.log('request withod auth header==> ', config) // here  we dont have authentation field in header when we are making request so we have inject it
        */
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`// here we are injecting or intercepting authentation on headers this is what interceptors is
        }
        //console.log(config)
        return config // from here requeest go to the server
    },
    function(error){
        return Promise.reject(error);
    }
)

// Response Interceptors

AxiosInstance.interceptors.response.use(
    function(response){
        return response;
    },
    //Handling of error in request or failed request
    async function(error){ //we are making this function async because we have to wait for the responce to complete
        const originalRequest = error.config;
        if(error.response.status === 401 && !originalRequest.retry){
            originalRequest.retry = true; // if we dont set it it goes to infinite loop keep heating api emdpoints
            const refreshToken = localStorage.getItem('refreshToken') // taking refreshTOken from local storage
            try {
                const response = await AxiosInstance.post('/token/refresh/', {refresh: refreshToken}) // sending refreshToken to the server 
                //console.log('new response: ', response.data);
                // setting up the response in access token with the refresh token 
                //console.log('new access token ==> ', response.data.access)
                localStorage.setItem('accessToken', response.data.access) // server will give us new tokrn and setting inside local storege
                originalRequest.headers['Authorization'] = `Bearer ${response.data.access}` // setting inside the original request headers the nw access token
                return AxiosInstance(originalRequest)

            } catch (error) {
                localStorage.removeItem('accessToken')
                
                localStorage.removeItem('refreshToken')

            }
        }

        return Promise.reject(error);
    }
)

export default AxiosInstance