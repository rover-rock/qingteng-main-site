import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router';
import Layout from "components/layout";
import SearchPanel from "components/search-panel";
import InfoPanel from "components/info-panel";
import ListItemHeader from './components/list-item-header';
import ListItemContent from "./components/list-item-content";
import DetailModal from './components/detail-model'
import { useFormQuery, render_multi_keywords_red } from 'util/func';
import { IData } from './type'
export default (props: RouteComponentProps) => {
    const [ showModal, setShowModal ] = useState(false)
    const [ itemData,setItemData ] = useState({})
    const dataHandler = ( listData:IData[], keywords ) => {
        console.log(keywords,listData);
        return listData.map( item => ({
            ...item,
            content_html:render_multi_keywords_red(keywords.content,item.content_html),
        }))
    }
    const  { handleFinish, infoPanelStatus } = useFormQuery({url1:'audit-data/feibiao',url2:'audit-data/feibiao-total',dataHandler})
    const handleShowDetail = (data) => {
        setItemData(data)
        setShowModal(true)
    }
    const searchPanel = (
        <SearchPanel page={[
            'company',
            'feibiao_timespan',
            'agency',
            'feibiao_result',
            'input:content:非标正文',
            'market',
        ]}
            onFinish={handleFinish}
        ></SearchPanel>
    )
    const infoPanel = (
        <InfoPanel {...infoPanelStatus} header={ListItemHeader} content={ListItemContent} onClickItemButton={handleShowDetail} />
    )
    return (
        <div className='feibiao-page'>
            <Layout searchPanel={searchPanel} infoPanel={infoPanel} />
            <DetailModal visible={showModal} setVisible={setShowModal} data={itemData} ></DetailModal>
        </div>
    )
};