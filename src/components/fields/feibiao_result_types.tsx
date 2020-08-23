import React, { useState } from 'react'
import { Form,Select } from 'antd'

const { Item:FormItem } = Form
const { Option } = Select

export default (props) => {
    const data = [
        '保留意见',
        '带强调事项段的无保留意见', 
        '无法表示意见'
      ]
    const [ value,setValue ] = useState(data[0])
    const handleChange = (val )=> {
        setValue(val)
    }
    return (
        <FormItem
            label="期间"
            name="audit_result"
            className={props.className}
            labelCol={props.labelCol}
        >
            <Select   
               
                value={value}
                placeholder="请输入"
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