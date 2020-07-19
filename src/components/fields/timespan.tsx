import React from 'react'
import { DatePicker,Form } from "antd";
import moment from "moment";

const { Item: FormItem } = Form
const { RangePicker } = DatePicker
export default (props:{className?:string,labelCol?:any}) => {

    const dateFormat = 'YYYY-MM-DD'
    return (  
            <FormItem labelCol={props.labelCol} label='期间' name='timespan' className={props.className}>
                <RangePicker  
                defaultValue={[moment('1990-01-01', dateFormat), moment()]}
                format={dateFormat} ></RangePicker>
            </FormItem> 
    )
}; 