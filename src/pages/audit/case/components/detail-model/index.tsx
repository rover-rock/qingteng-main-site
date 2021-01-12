import React from 'react'
import { Modal, Divider, Tag, Timeline } from "antd";

export default ({ visible, data, setVisible }) => {
    const hideModal = () => setVisible(false)
    return (
        <Modal visible={visible} width="800px" title='案例详情' okText="确认"
            cancelText="取消" onOk={hideModal} onCancel={hideModal} >
            <p className="detail-title" dangerouslySetInnerHTML={{ __html: data[0] && data[0].title }}></p>
            <Timeline>
                {
                    data.map((item,index) => (
                        <Timeline.Item className="detail-item" key={item.title} color="green">
                            <p className="detail-time">{item.comment_time}</p>
                            <div v-if="!isBlank(item.question_text)">
                                <Tag color="success">{item.question_author}</Tag>提问：
                            <span dangerouslySetInnerHTML={{ __html: item.question_text }} className="detail-content"></span>
                            </div>
                            <div>
                                <Tag color="error">{item.author}</Tag>回复：
                                <span dangerouslySetInnerHTML={{ __html: item.comment_text }} className="detail-content"></span>
                            </div>
                           { (index !== data.length-1) && <Divider></Divider>} 
                        </Timeline.Item>
                    ))
                }
            </Timeline>
        </Modal>
    )
};