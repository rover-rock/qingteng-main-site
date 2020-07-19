import axios, { AxiosRequestConfig } from "axios";
import { Alert } from "antd";

const instance = axios.create({
    baseURL:'https://api.qingtengdata.com/api/'
})

instance.interceptors.response.use( response => {
    console.log(response);
    if(response.status !== 200){
        console.error('request status err');
    }
    return response.data
})

const get = <T> (url:string,params:{[key:string]:string}):Promise<T> => {
    return (instance.get(url,{params}) as unknown) as Promise<T>
}

export default {
    get
}