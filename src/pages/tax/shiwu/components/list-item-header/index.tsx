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
                    <Tag color="volcano">{item.type}</Tag>
                    <div dangerouslySetInnerHTML={{ __html: item.title }} className="title text-ellipsis"></div>
                </div>
                <div>
                    <Tooltip title="点击查看详情" placement="top">
                        <Button onClick={handleShowDetail}>查看详情</Button>                     
                    </Tooltip>
                    <span style={{ color: 'gray',margin:'0 10px' }}>{item.date}</span>
                    <a href={item.link} target="_blank">源</a>
                </div>
            </div>
        </>
    )
};