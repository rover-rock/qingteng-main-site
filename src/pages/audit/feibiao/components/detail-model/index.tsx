import React from 'react'
import { Modal, Row, Col, Tag, Timeline } from "antd";

export default ({ visible, data, setVisible }) => {
    const hideModal = () => setVisible(false)
    return (
        <Modal visible={visible} width="800px" title='非标意见详情' okText="确认"
            cancelText="取消" onOk={hideModal} onCancel={hideModal} >
            <Row>
              <Col span="12">
                <Tag color="success">公&emsp;&emsp;&emsp;司</Tag>【{ data.ts_code }】{data.shortname}
              </Col>
              <Col span="12">
                <Tag color="success">签字注师</Tag
                >{ data.audit_sign }
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <Tag color="success">时&emsp;&emsp;&emsp;间</Tag>{ data.end_date }
              </Col>
              <Col span="12">
                <Tag color="success">审计收费</Tag>{ data.province }
                { data.city } { data.audit_fees }
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <Tag color="success">审计事务所</Tag>{ data.audit_agency }
              </Col>
              <Col span="12">
                <Tag color="success">审计结果</Tag
                >{ data.audit_data }
              </Col>
            </Row>
                <p className="detail-title" dangerouslySetInnerHTML={{ __html: data.title }}></p>
                <Timeline>
                    <Timeline.Item >
                        <h5>描述</h5>
                        <p
                            className="detail-content"
                            dangerouslySetInnerHTML={{ __html: data.content_html }}
                        ></p>
                    </Timeline.Item>
                </Timeline>
        </Modal>
    )
};