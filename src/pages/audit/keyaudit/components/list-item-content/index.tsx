import React from 'react'
import { Tag } from "antd";
import { IData } from "../../type";

export default ({item}:{item:IData}) => {
    return (
        <>
        <div className="collapse-panel">
            <Tag color="magenta">{ item.category }</Tag>
            <span dangerouslySetInnerHTML={{__html:item.info}}></span>
        </div>
        </>
    )
};