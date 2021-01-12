import React, { useState } from 'react'
import { Form,Select } from 'antd'

const { Item:FormItem } = Form
const { Option } = Select

export default (props) => {
    const data = [
        '12366',
        '税务总局',
        '河北',
        '辽宁',
        '上海',
        '山西',
        '浙江',
        '内蒙古',
        '吉林',
        '黑龙江'
      ]
    const [ value,setValue ] = useState(data[0])
    const handleChange = (val )=> {
        setValue(val)
    }
    return (
        <FormItem
            label="来源"
            name="banner"
            className={props.className}
            labelCol={props.labelCol}
        >
            <Select   
                allowClear
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