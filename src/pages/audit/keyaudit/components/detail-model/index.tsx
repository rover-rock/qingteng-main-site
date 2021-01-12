import React from 'react'
import { Modal, Row, Col, Tag, Timeline } from "antd";

export default ({ visible, data, setVisible }) => {
    const hideModal = () => setVisible(false)
    return (
        <Modal visible={visible} width="800px" title='关键审计事项' okText="确认"
            cancelText="取消" onOk={hideModal} onCancel={hideModal} >
            <Row>
                <Col span="12">
                    <Tag color="success">公&emsp;司</Tag>{data.short_name}
                </Col>
                <Col span="12">
                    <Tag color="success">行&emsp;&emsp;&emsp;业</Tag>
                    {data.thsindustry || data.industry}
                </Col>
            </Row>
            <Row style={{ margin: '5px 0' }}>
                <Col span="12">
                    <Tag color="success">年&emsp;度</Tag>{data.annul}
                </Col>
                <Col span="12">
                    <Tag color="success">审计事务所</Tag>{data.agency}
                </Col>
            </Row>
            <Row>
                <Col span="12">
                    <Tag color="success">地&emsp;区</Tag>{data.province}
                    {data.city} {data.country}
                </Col>
                <Col span="12">
                    <Tag color="success">版&emsp;&emsp;&emsp;块</Tag
                    >{data.plate}
                </Col>
            </Row>
                <p className="detail-title" dangerouslySetInnerHTML={{ __html: data.title }}></p>
                <Timeline>
                    <Timeline.Item >
                        <h5>描述</h5>
                        <p
                            className="detail-content"
                            dangerouslySetInnerHTML={{ __html: data.info }}
                        ></p>
                    </Timeline.Item>
                    <Timeline.Item>
                        <h5>应对</h5>
                        <p
                            className="detail-content"
                            dangerouslySetInnerHTML={{ __html: data.reply }}
                        ></p>
                    </Timeline.Item>
                </Timeline>
        </Modal>
    )
};