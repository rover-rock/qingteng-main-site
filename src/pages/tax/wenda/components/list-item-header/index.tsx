import React from 'react'
import { Tag, Button, Tooltip } from "antd";
import { IData } from "../../type";

export default (props: { item: IData, onShowDetail }) => {
    const { item } = props
    const handleShowDetail = (e) => {
        e.stopPropagation()
        props.onShowDetail(item)
    }
    return (
        <>
            <div className="list-item">
                <div className="part1" >
                    <Tag color="volcano">{item.banner}</Tag>
                    <div dangerouslySetInnerHTML={{ __html: item.question }} className="title text-ellipsis"></div>
                </div>
                <div>
                    <Tooltip title="点击查看详情" placement="top">
                        <Button onClick={handleShowDetail}>查看详情</Button>                     
                    </Tooltip>
                    <span style={{ color: 'gray',margin:'0 10px' }}>{item.reply_time}</span>
                    <a href={item.link} target="_blank">{item.banner === '12366'?'  ':'源'}</a>
                </div>
            </div>
        </>
    )
};