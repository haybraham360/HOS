import axios from "axios";
//import { getToken } from "../adminlogin";

export const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:9292/api/v1"

export const myAxios = axios.create({
    baseURL: BASE_URL,
});

// export const privateAxios=axios.create({
//     baseURL:BASE_URL
// })

// privateAxios.interceptors.request.use(config=>{

//     const token = getToken()
//     if(token){
//         config.headers.common.Authorization=`Bearer ${token}`
//         return config
//     }

// },error=>Promise.reject(error))