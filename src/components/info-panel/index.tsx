import React, { ReactElement, useState } from 'react'
import { Collapse, Button, Divider, Pagination ,Spin } from "antd";
import { CaretRightOutlined } from '@ant-design/icons';
import './index.scss'
import { format_number } from 'util/func';

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
    const [ activeKeys,setActiveKeys ] = useState<string[]>([])
    let allKeys:string[] = []
    for(let i = 0;i<10;i++){
        allKeys.push(''+i)
    }
    const handleExpandAll = () => {
        setActiveKeys(activeKeys.length === 10 ? [] : allKeys ) 
    }
    const handleShowDetail = (data) => {
        props.onClickItemButton(data)
    }
    const handlePageChange = ( page ) => {
        setCurrent(page)
        props.onPageChange(page)
    }
    const handleActiveChange = (key) => {
        setActiveKeys(key)
    }
    return (
        <div className='info-panel'>
            <div className='info-panel__header'>
                <div></div>
                <div>找到{format_number(props.total)}条结果</div>
                <Button onClick={handleExpandAll}>{activeKeys.length === 10 ? "全部折叠" : "全部展开" }</Button>
            </div>
            <Divider></Divider>
            <div className='info-panel__body'>
                <Spin size='large' spinning={props.loading}>
                <Collapse      
                    onChange={handleActiveChange}
                    activeKey={activeKeys}
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