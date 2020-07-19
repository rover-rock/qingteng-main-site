import React, { useState } from 'react'
import { Form, Select, Spin } from "antd";
import request from "../../util/request";

const { Item: FormItem } = Form
const { Option } = Select
type Company = {
    ts_code:string,
    name:string
}

export default (props: { className?: string,labelCol?:any }) => {
    const [ data, setData ] = useState<Company[]>([])
    const [ value, setValue ] = useState<string>()
    const [ fetching, setFetching ] = useState(false)
    const fetchCompany = ( name:string ) => {
        setFetching(true)
        request.get<Company[]>('auto_complete/search_company',{part:name}).then( data => {
            setData(data)
        }).finally(()=> {
            setFetching(false)
        })
    }
    const handleChange = ( name:string ) => {
        setValue(name)
    }
    return (
        <FormItem
            label="公司"
            name="company"
            className={props.className}
            labelCol={props.labelCol}
        >
            <Select
                showSearch
                showArrow={false}
                labelInValue
                value={value}
                placeholder="请输入公司代码或名称"
                notFoundContent={fetching ? <Spin size="small" /> : null}
                filterOption={false}
                onSearch={fetchCompany}
                onChange={handleChange}
                style={{ width: '100%' }}
            >
                {data.map(d => (
                    <Option key={d.ts_code} value={d.ts_code}>{d.name}</Option>
                ))}
            </Select>
        </FormItem>
    )
};