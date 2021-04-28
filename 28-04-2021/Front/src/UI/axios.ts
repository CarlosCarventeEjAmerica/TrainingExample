import axios,{AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';


const instance : AxiosInstance = axios.create({
    baseURL: ` http://127.0.0.1:3500`
})

instance.interceptors.request.use((request:AxiosRequestConfig) =>{
    request.headers[`My authentication`] = 'AUTH092332'
    console.log(request.url)
    return request;
    } );

instance.interceptors.response.use((response: AxiosResponse)=>{
    return response;
    }, error =>{
        return Promise.reject(error);
});

export default instance;
