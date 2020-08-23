import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
    // baseURL:'https://api.qingtengdata.com/api/',
    baseURL:'http://localhost:3001/api',
})

instance.interceptors.response.use( response => {
    if(response.status !== 200){
        console.error('request status err');
    }
    return response.data
})

const get = <T> (url:string,params:{[key:string]:any}):Promise<T> => {
    return (instance.get(url,{params}) as unknown) as Promise<T>
}

export default {
    get
}