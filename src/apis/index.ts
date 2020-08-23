import request from "util/request";

export const search =<T> (url:string,params:{[key:string]:any}) => {
    return request.get<T>(url,params)
};

