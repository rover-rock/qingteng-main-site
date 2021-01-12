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
            info:render_multi_keywords_red(keywords.info,item.info),
            title:render_multi_keywords_red(keywords.title,item.title),
            reply:render_multi_keywords_red(keywords.reply,item.reply),
        }))
    }
    const  { handleFinish, infoPanelStatus } = useFormQuery({url1:'audit-data/keyaudit',url2:'audit-data/keyaudit-total',dataHandler})
    const handleShowDetail = (data) => {
        setItemData(data)
        setShowModal(true)
    }
    const searchPanel = (
        <SearchPanel page={[
            'company',
            'keyaudit_timespan',
            'agency',
            'industry',
            'input:info:描述',
            'input:reply:应对',
            'input:title:标题',
            'input:market:市场',
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