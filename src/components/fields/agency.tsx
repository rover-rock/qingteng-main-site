import React, { useState, useCallback } from 'react'
import { Form, Select, Spin } from "antd";
import request from "../../util/request";
import { delay } from 'util/func';

const { Item: FormItem } = Form
const { Option } = Select
type Agency = {
    agency:string
}

export default (props: { className?: string,labelCol?:any }) => {
    const [ data, setData ] = useState<Agency[]>([])
    const [ value, setValue ] = useState<string>()
    const [ fetching, setFetching ] = useState(false)
    const fetchCompany = useCallback(delay(   ( name:string ) => {
        setFetching(true)
        request.get<Agency[]>('auto_complete/search_agency',{part:name}).then( data => {
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
            label="事务所"
            name="agency"
            className={props.className}
            labelCol={props.labelCol}
        >
            <Select
                allowClear
                showSearch
                showArrow={false}
                value={value}
                placeholder="请输入事务所名称"
                notFoundContent={fetching ? <Spin size="small" /> : null}
                filterOption={false}
                onSearch={fetchCompany}
                onChange={handleChange}
                style={{ width: '100%' }}
            >
                {data.map(d => (
                    <Option key={d.agency} value={d.agency}>{d.agency}</Option>
                ))}
            </Select>
        </FormItem>
    )
};