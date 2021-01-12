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
    const paramsHandler = ( values ) => {
        return {
            ...values,
            start:values.start.split(' ')[0],
            end:values.end.split(' ')[0]
        }
    }
    const dataHandler = ( listData:IData[], keywords ) => {
        return listData.map( item => ({
            ...item,
            question:render_multi_keywords_red(keywords.question,item.question),
            reply:render_multi_keywords_red(keywords.reply,item.reply),
        }))
    }
    const  { handleFinish, infoPanelStatus } = useFormQuery({url1:'tax/wenda',dataHandler,paramsHandler})
    const handleShowDetail = (data) => {
        setItemData(data)
        setShowModal(true)
    }
    const searchPanel = (
        <SearchPanel page={[
            'wenda_banner',
            'timespan',
            'input:question:问题',
            'input:reply:回答',
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