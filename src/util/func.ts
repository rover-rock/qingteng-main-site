import { useState, useEffect } from "react";
import { search } from "apis/index";

const PageSize = 10

export const delay = (fn,time) => {
    let timerId
    return function(...args){
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            fn.apply(null,args)
        }, time);
    }
    
};

export const useFormQuery = < IQuery , IRes > ({url1,url2}:{url1:string,url2:string}) => {
    const [data, setData] = useState<IRes[]>([])
    const [ total, setTotal ] = useState(0)
    const [page, setPage] = useState<number>(1)
    const [ params, setParams ] = useState({current_page: 1, page_size: PageSize})
    const [ loading,setLoading ] = useState(false)
    
    const handlePageChange = (page) => {
        console.log('page change',page);
        setPage(page)
    }
    useEffect(() => {
        const searchData = (params: Partial<IQuery>) => {
            setLoading(true)
            search<IRes[]>(url1, params).then(res => {
                setData(res)
                setLoading(false)
            })
            search<{}>(url2,params).then(res => {
                setTotal(res[0].total)
            }) 
        }
        searchData({...params,current_page:page } as any )
    }, [page,params])

    const handleFinish = (values: any) => {
        console.log('表单提交数据：', values);
        const params: IQuery = {
            ...values,
            page_size: PageSize,
            current_page: page
        }
        setParams(params as any)
        setPage(1)
    }
    
    return { handleFinish, infoPanelStatus : { loading, total, data, onPageChange:handlePageChange }}
};
