import React from 'react'
import { Tag } from "antd";
import { IData } from "../../type";

export default ({item}:{item:IData}) => {
    return (
        <>
        <div className="collapse-panel">
            <Tag color="magenta">{ item.question_author }</Tag>
            <span dangerouslySetInnerHTML={{__html:item.question_text}}></span>
            <br />
          <br />
          <span className="author">回复：</span>
          <span dangerouslySetInnerHTML={{__html:item.comment_text}}></span>
        </div>
        </>
    )
};