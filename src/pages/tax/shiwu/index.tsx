import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router';
import Layout from "components/layout";
import SearchPanel from "components/search-panel";
import InfoPanel from "components/info-panel";
import ListItemHeader from './components/list-item-header';
import ListItemContent from "./components/list-item-content";
import DetailModal from './components/detail-model'
import { useFormQuery, render_multi_keywords_red } from 'util/func';
import { IData } from './type';

export default (props: RouteComponentProps) => {

    const [ showModal, setShowModal ] = useState(false)
    const [ itemData,setItemData ] = useState({})
    const dataHandler = ( listData:IData[], keywords ) => {
        return listData.map( item => ({
            ...item,
            content:render_multi_keywords_red(keywords.content,item.content),
            title:render_multi_keywords_red(keywords.title,item.title),
        }))
    }
    const  { handleFinish, infoPanelStatus } = useFormQuery({url1:'tax/shiwu',url2:'tax/shiwu-total',dataHandler})
    const handleShowDetail = (data) => {
        setItemData(data)
        setShowModal(true)
    }
    const searchPanel = (
        <SearchPanel page={[
            'input:title:标题',
            'timespan',
            'input:content:正文',
        ]}
            onFinish={handleFinish}
        ></SearchPanel>
    )
    const infoPanel = (
        <InfoPanel {...infoPanelStatus} header={ListItemHeader} content={ListItemContent} onClickItemButton={handleShowDetail} />
    )
    return (
        <div>
            <Layout searchPanel={searchPanel} infoPanel={infoPanel} />
            <DetailModal visible={showModal} setVisible={setShowModal} data={itemData} ></DetailModal>
        </div>
    )
};