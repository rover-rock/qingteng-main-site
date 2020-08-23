import React from 'react'
import { DatePicker,Form } from "antd";

const { Item: FormItem } = Form
const { RangePicker } = DatePicker
export default (props:{className?:string,labelCol?:any}) => {

    const dateFormat = 'YYYY-MM-DD'
    return (  
            <FormItem labelCol={props.labelCol} label='期间' name='timespan' className={props.className}>
                <RangePicker  
                format={dateFormat} ></RangePicker>
            </FormItem> 
    )
}; 