import React, { ReactElement, useState } from 'react'
import { Collapse, Button, Divider, Pagination ,Spin } from "antd";
import { CaretRightOutlined } from '@ant-design/icons';
import './index.scss'

const { Panel} = Collapse
interface IProps {
    total: number
    //所有数据
    data
    //列表项头
    header
    //列表项内容
    content
    //点击列表项按钮
    onClickItemButton
    //设定当前页
    onPageChange
    loading
}

export default (props: IProps) => {
    const [ current,setCurrent ] = useState(1)
    const handleExpandAll = () => {

    }
    const handleShowDetail = () => {
        console.log('click show detail');
    }
    const handlePageChange = ( page ) => {
        setCurrent(page)
        props.onPageChange(page)
    }
    return (
        <div className='info-panel'>
            <div className='info-panel__header'>
                <div></div>
                <div>找到{props.total}条结果</div>
                <Button onClick={handleExpandAll}>全部展开</Button>
            </div>
            <Divider></Divider>
            <div className='info-panel__body'>
                <Spin size='large' spinning={props.loading}>
                <Collapse      
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    className="custom-collapse"
                >
                    {
                         props.data.map((d, index) => {
                            const ListItemContent = props.content
                            const ListItemHeader = props.header
                            const header = <ListItemHeader item={d} onShowDetail={handleShowDetail}></ListItemHeader>
                            const content = <ListItemContent item={d} ></ListItemContent>
                            return (
                                <Panel header={header} key={index} className="custom-collapse-panel">
                                    <div className="info-panel__body__content">
                                    {content}
                                    </div>
                                    
                                </Panel>
                            )
                        })
                    }
                </Collapse>
                </Spin>
                <Pagination className="pager" current={current} total={props.total} onChange={handlePageChange}></Pagination>
            </div>
        </div>
    )
};