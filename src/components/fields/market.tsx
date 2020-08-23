import React, { useState } from 'react'
import { Form,Select } from 'antd'

const { Item:FormItem } = Form
const { Option } = Select

export default (props) => {
    const data = [
        'A股',
        '新三板'
      ]
    const [ value,setValue ] = useState(data[0])
    const handleChange = (val )=> {
        setValue(val)
    }
    return (
        <FormItem
            label="市场"
            name="market"
            className={props.className}
            labelCol={props.labelCol}
        >
            <Select   
               
                value={value}
                placeholder="请选择市场"
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