import React, { useEffect, useState } from 'react'
import { Tabs, Card, Row, Col, Button, Tag, Input  } from "antd";
import { search } from 'apis';
import { IMessage, IFeedback } from "./types"

const { TextArea } = Input
export default () => {
    const [messages, setMessages] = useState<IMessage[]>([])
    const [feedbacks, setFeedbacks] = useState<IFeedback[]>([])
    const [feedback, setFeedback] = useState<IFeedback>()
    const [message, setMessage] = useState<IMessage>({} as any)
    const [ text, setText ] = useState('')
    useEffect(() => {
        search<IMessage[]>("/admin/messages/list", {}).then(data => {
            setMessages(data)
            setMessage(data[0])
        })
        search("/admin/feedback/list", {}).then((data: any) => {
            setFeedbacks(data.map(item => ({ ...item, content: JSON.parse(item.content) })))
        })
    }, [])
    const handleTextChange = (value) => {
        setText(value)
    }
    const showMessage = (item) => {
        setMessage(item)
    }
    const showFeedback = (item) => {
        setFeedback(item)
    }
    const newFeedback = () => {

    }
    const submit = () => {

    }
    return (
        <div style={{ padding: '20px' }}>
            <Tabs defaultActiveKey="name1">
                <Tabs.TabPane tab="系统消息" key="name1">
                    <div className="message-container">
                        <Row gutter={20}>
                            <Col span="8">
                                <div>
                                    {
                                        messages.map((item) => (
                                            <Card
                                                key={item.time}
                                                onClick={() => showMessage(item)}
                                                style={{ marginBottom: '10px', cursor: 'pointer' }}
                                            >
                                                <p>{item.title}</p>
                                                <p>{item.time}</p>
                                            </Card>
                                        ))
                                    }
                                </div>
                            </Col>
                            <Col span="16">
                                <div className="message-detail-panel">
                                    <h3>{message.title}</h3>
                                    <h5>{message.time}</h5>
                                    <span dangerouslySetInnerHTML={{ __html: message.content }}></span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="意见反馈" key="name2">
                    <Row gutter={20}>
                        <Col span="8">
                            <div>
                                <Button style={{ marginBottom: '10px' }} type="primary" size='large' onClick={newFeedback}>新的反馈</Button>
                                {
                                    feedbacks.map((item, index) => (
                                        <Card
                                            key={index}
                                            onClick={() => showFeedback(item)}
                                            style={{ marginBottom: '10px', cursor: 'pointer' }}
                                        >
                                            <p style={{ marginBottom: '10px' }}>{decodeURIComponent(item.content[0].text)}</p>
                                            <p>{item.content[0].time}</p>
                                        </Card>
                                    ))
                                }

                            </div>
                        </Col>
                        <Col span="16">
                            <div className="message-detail-panel">
                                {
                                    !feedback ? <div >提交新的反馈</div>
                                        : <div>
                                            {
                                                feedback.content.map(item => (
                                                    <Card key={item.time} style={{ marginBottom: '10px', cursor: 'pointer' }}>
                                                        <p style={{marginBottom:'10px'}}>{decodeURIComponent(item.text)}</p>
                                                        <p> <Tag >{ item.source === 'user' ? '我' : '管理员' }</Tag>发布于&emsp;{ item.time }</p>
                                                    </Card>
                                                ))
                                            }

                                        </div>
                                }
                                <TextArea className="text-area" value={text} onChange={handleTextChange}></TextArea>
                                <Button type="primary" onClick={submit}>提交</Button>
                            </div>
                        </Col>
                    </Row >
                </Tabs.TabPane >
            </Tabs >
        </div >
    )
};