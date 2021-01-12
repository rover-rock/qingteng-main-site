import { useState, useEffect } from "react";
import { search } from "apis/index";
import moment from "moment"
import Cookies from 'js-cookie'

const PageSize = 10

export const setToken = (token) => {
    Cookies.set('token', token, { expires: 7 })
}

export const getToken = () => {
    return Cookies.get('token')
}

export const delay = (fn, time) => {
    let timerId
    return function (...args) {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            fn.apply(null, args)
        }, time);
    }

};
/**
 * @description 单个关键词
 * @param keywords 被标记的关键词
 * @param text 长文本内容
 */

export function render_keywords_red(keywords, text) {
    if (!keywords) return text;
    let segments = text.split(keywords);
    let str = "";
    segments.forEach((seg, index) => {
        if (index !== segments.length - 1)
            str += `${seg}<span style='color:red'>${keywords}</span>`;
        else str += seg;
    });
    return str;
}
/**
 * @description 空格分隔的多个关键词
 * @param keywords 被标记的关键词
 * @param text 长文本内容
 */

export function render_multi_keywords_red(keywords, text) {
    if (!keywords) return text;
    let keys = keywords.split(/\s/)
    let result = text
    keys.forEach(key => {
        result = render_keywords_red(key, result)
    })
    return result;
}
/**
 * 将数字格式化千分位
 * @param num 
 */
export const format_number = (num: any) => {
    let result: any = [], counter = 0
    let numbers = (num || 0).toString().split('.')
    num = numbers[0]
    let fic = numbers[1] ? '.' + numbers[1] : ''
    num = num.split('');
    for (var i = num.length - 1; i >= 0; i--) {
        counter++;
        result.unshift(num[i]);
        if (!(counter % 3) && i != 0) { result.unshift(','); }
    }
    return result.join('') + fic;
};

//hooks

export const useFormQuery = <IQuery, IRes>({ url1, url2, dataHandler,paramsHandler }: { url1: string, url2?: string, dataHandler?:Function,paramsHandler?:Function }) => {
    const [data, setData] = useState<IRes[]>([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState<number>(1)
    const [params, setParams] = useState({ sort:'latest', current_page: 1, page_size: PageSize, start:'1990-01-01',end:moment().format('YYYY-MM-DD') })
    const [loading, setLoading] = useState(false)

    const handlePageChange = (page) => {
        console.log('page change', page);
        setPage(page)
    }
    useEffect(() => {
        const searchData = (params: Partial<IQuery>) => {
            setLoading(true)
            search<IRes[]>(url1, params).then(res => {    
                if(!url2) {
                    let result =<unknown> res as { total, data }
                    if(dataHandler) {
                        result.data = dataHandler(result.data,params)
                    }
                    setData(result.data)
                    setTotal(result.total)
                } 
                else{
                    if(dataHandler) {
                        res = dataHandler(res,params)
                    }
                    setData(res)
                }
                setLoading(false)
            })
            if(!url2) { return }
            search<{}>(url2, params).then(res => {
                setTotal(res[0].total)
            })
        }
        searchData({ ...params, current_page: page } as any)
        return ()=>{
           console.log('销毁操作'); 
        }
    }, [page, params])

    const handleFinish = (values: any) => {
        console.log('表单提交数据：', values);
        if(values.timespan) {
            values.start = (values.timespan[0] as moment.Moment).format("YYYY-MM-DD HH:mm:ss")
            values.end = (values.timespan[1] as moment.Moment).format("YYYY-MM-DD HH:mm:ss")
            values.timespan = null
        }
        if(paramsHandler) {
            values = paramsHandler(values)
        }
        const params: IQuery = {
            ...values,
            page_size: PageSize,
            current_page: page
        }
        setPage(1)
        setParams(params as any) 
    }

    return { handleFinish, infoPanelStatus: { loading, total, data, onPageChange: handlePageChange } }
};
