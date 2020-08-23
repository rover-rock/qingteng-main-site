import React, { useState, useEffect } from 'react'
import { Form,Select } from 'antd'
import { search } from 'apis';

const { Item:FormItem } = Form
const { Option } = Select

type IData = {end_date:string}
export default (props) => {
    const [ data, setData ] = useState<IData[]>([])
    useEffect(()=>{
        search<IData[]>('audit-data/fees-enddate',{}).then(res => {
            setData(res)
        })
    },[])
    
    const [ value,setValue ] = useState('')
    const handleChange = (val )=> {
        setValue(val)
    }
    return (
        <FormItem
            label="期间"
            name="end_date"
            className={props.className}
            labelCol={props.labelCol}
        >
            <Select   
                value={value}
                placeholder="请输入期间"
                onChange={handleChange}
                style={{ width: '100%' }}
            >
                {data.map(d => (
                    <Option key={d.end_date} value={d.end_date}>{d.end_date}</Option>
                ))}
            </Select>
        </FormItem>
    )
};