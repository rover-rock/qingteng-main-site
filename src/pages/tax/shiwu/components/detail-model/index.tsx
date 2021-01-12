import React from 'react'
import { Modal, Row, Col, Tag } from "antd";

export default ({ visible, data, setVisible }) => {
    const hideModal = () => setVisible(false)
    return (
        <Modal visible={visible} width="800px" title='案例详情' okText="确认"
            cancelText="取消" onOk={hideModal} onCancel={hideModal} >
            <Row>
                <Col span="12">
                    <Tag color="success">类&emsp;&emsp;&emsp;型</Tag>{data.type}
                </Col>
                <Col span="12">
                    <Tag color="success">来&emsp;&emsp;源</Tag>{data.source}
                </Col>
            </Row>

            <p className="detail-title" dangerouslySetInnerHTML={{__html:data.title}}></p>
           <p className="detail-subtitle">
             时间：{data.date}
           </p>
           <p className="detail-content" dangerouslySetInnerHTML={{__html:data.content}}></p>
        </Modal>
    )
};