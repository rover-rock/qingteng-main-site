import React from 'react'
import { Tag, Button, Tooltip } from "antd";
import './index.scss'
import { IData } from "../../type";

export default (props:{item: IData,onShowDetail}) => {
    const {item} = props
    const handleShowDetail = (e) => {
        e.stopPropagation()
        props.onShowDetail(item)
    }
    return (
        <>
            <div className="list-item">
                <div className="part1" >
                    <Tag color="volcano">[{item.ts_code}]{item.shortname}</Tag>
                    <Tag className="date">{item.market}</Tag>
                    <Tag className="date">{item.end_date}</Tag>
                    <Tag className="date">{item.audit_result}</Tag>
                    <div dangerouslySetInnerHTML={{__html:item.audit_agency}} className="title text-ellipsis"></div>
                </div>
                <div>
                    <Tooltip title="点击查看详情" placement="top">
                        <Button onClick={handleShowDetail}>查看详情</Button>
                    </Tooltip>
                    {
                        item.link ? <a href={item.link} target="_blank">源</a>
                                    : <span>&nbsp;</span>
                    }                
                </div>
            </div>
        </>
    )
};