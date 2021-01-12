import React from 'react'
import { Modal, Row, Col, Tag, Timeline } from "antd";

export default ({ visible, data, setVisible }) => {
    const hideModal = () => setVisible(false)
    return (
        <Modal visible={visible} width="800px" title='回复详情' okText="确认"
            cancelText="取消" onOk={hideModal} onCancel={hideModal} >
            <Row>
                <Col span="12">
                    <Tag color="success">来&emsp;&emsp;&emsp;源</Tag>{data.banner}
                </Col>
                <Col span="12">
                    <Tag color="success">税&emsp;&emsp;&emsp;种</Tag
                    >{data.category}
                </Col>
            </Row>
            <Row>
                <Col span="12">
                    <Tag color="success">条文有效性</Tag>{data.is_effictive}
                </Col>
            </Row>
            <Timeline style={{marginTop:'20px'}}>
                    <Timeline.Item >
                        <Tag color="success">提问</Tag>
                        <span
                            className="detail-content"
                            dangerouslySetInnerHTML={{ __html: data.question }}
                        ></span>
                    </Timeline.Item>
                    <Timeline.Item >
                        <Tag color="success">回复</Tag>
                        <span
                            className="detail-content"
                            dangerouslySetInnerHTML={{ __html: data.reply }}
                        ></span>
                    </Timeline.Item>
            </Timeline>
        </Modal>
    )
};