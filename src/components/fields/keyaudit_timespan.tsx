import React, { useState } from 'react'
import { Form,Select } from 'antd'

const { Item:FormItem } = Form
const { Option } = Select

export default (props) => {
    const data = [
        '2017年度',
        '2018年度',
        '2019年度'
    ]
    const [ value,setValue ] = useState(data[0])
    const handleChange = (val )=> {
        setValue(val)
    }
    return (
        <FormItem
            label="期间"
            name="annual"
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
                    <Option key={d} value={d}>{d}</Option>
                ))}
            </Select>
        </FormItem>
    )
};