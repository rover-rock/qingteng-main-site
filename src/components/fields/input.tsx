import React from 'react'
import { Form, Input } from "antd";

const { Item: FormItem } = Form
const InputCom = (props: { className?: string,labelCol?:any,label?:string,name?:string }) => {
    return (
        <FormItem
        label={props.label}
        name={props.name}
        className={props.className}
        labelCol={props.labelCol}
        >
        <Input></Input>
    </FormItem>
    )
};

export default ({ name, label }:{name:string,label:string}) => {
    return ( props: { className?: string,labelCol?:any} ) => 
    <InputCom name={name} label={label} className={props.className} labelCol={props.labelCol}></InputCom>
}