import React from 'react'
import { Collapse } from "antd";
import "./index.scss";
const { Panel } = Collapse

export default (props) => {
    const { header,content,key } = props
    return (
        <Panel header={header} key={key} className="site-collapse-custom-panel">
            {content}
        </Panel>
    )
};