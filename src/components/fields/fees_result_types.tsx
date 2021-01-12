import React, { useState } from 'react'
import { Form,Select } from 'antd'

const { Item:FormItem } = Form
const { Option } = Select

export default (props) => {
    const data = [
        "标准无保留意见",
        "标准的无保留意见",
        "带强调事项段的无保留意见",
        "保留意见",
        "无法表示意见",
        "否定意见",
        "无保留意见"
      ]
    const [ value,setValue ] = useState(data[0])
    const handleChange = (val )=> {
        setValue(val)
    }
    return (
        <FormItem
            label="审计意见类型"
            name="audit_result"
            className={props.className}
            labelCol={props.labelCol}
        >
            <Select   
                mode='multiple'
                value={value}
                placeholder="请选择"
                onChange={handleChange}
                style={{ width: '100%' }}
                allowClear
            >
                {data.map(d => (
                    <Option key={d} value={d}>{d}</Option>
                ))}
            </Select>
        </FormItem>
    )
};