import React from 'react'
import { Tag } from "antd";
import { IData } from "../../type";

export default ({item}:{item:IData}) => {
    return (
        <>
        <div className="collapse-panel">
            <Tag color="magenta">【提问】</Tag>
            <span dangerouslySetInnerHTML={{__html:item.question}}></span>
            <br />
            <Tag color="cyan">回复：</Tag>
            <span dangerouslySetInnerHTML={{__html:item.reply}}></span>
        </div>
        </>
    )
};