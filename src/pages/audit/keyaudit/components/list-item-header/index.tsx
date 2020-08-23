import React from 'react'
import { Tag, Button, Tooltip } from "antd";
import './index.scss'
import { IData } from "../../type";

export default (props:{item: IData,onShowDetail}) => {
    const {item} = props
    const handleShowDetail = (e) => {
        e.stopPropagation()
        props.onShowDetail()
    }
    return (
        <>
            <div className="list-item">
                <div className="part1" >
                    <Tag color="volcano">[{item.code}]{item.short_name}</Tag>
                    <Tag className="date">{item.annul}</Tag>
                    <div dangerouslySetInnerHTML={{__html:item.title}} className="title text-ellipsis"></div>
                </div>
                <div>
                    <Tooltip title="点击查看详情" placement="top">
                        <Button onClick={handleShowDetail}>查看详情</Button>
                    </Tooltip>
                </div>
            </div>
        </>
    )
};