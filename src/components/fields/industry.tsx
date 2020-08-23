import React, { useState, useCallback } from 'react'
import { Form, Select, Spin } from "antd";
import request from "util/request";
import { delay } from  "util/func"

const { Item: FormItem } = Form
const { Option } = Select
type Industry = {
    industry:string
}

export default (props: { className?: string,labelCol?:any }) => {
    const [ data, setData ] = useState<Industry[]>([])
    const [ value, setValue ] = useState<string>()
    const [ fetching, setFetching ] = useState(false)
    const fetchIndustry =useCallback(delay( ( name:string ) => {
        setFetching(true)
        request.get<Industry[]>('auto_complete/search_industry',{part:name}).then( data => {
            setData(data)
        }).finally(()=> {
            setFetching(false)
        })
    },500),[]) 
    const handleChange = ( name:string ) => {
        setValue(name)
    }
    return (
        <FormItem
            label="行业"
            name="industry"
            className={props.className}
            labelCol={props.labelCol}
        >
            <Select
                allowClear
                showSearch
                showArrow={false}
                value={value}
                placeholder="请输入行业名称"
                notFoundContent={fetching ? <Spin size="small" /> : null}
                filterOption={false}
                onSearch={fetchIndustry}
                onChange={handleChange}
                style={{ width: '100%' }}
            >
                {data.map(d => (
                    <Option key={d.industry} value={d.industry}>{d.industry}</Option>
                ))}
            </Select>
        </FormItem>
    )
};