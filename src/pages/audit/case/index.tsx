import React, { useState, useRef } from 'react'
import { RouteComponentProps } from '@reach/router';
import Layout from "components/layout";
import SearchPanel from "components/search-panel";
import InfoPanel from "components/info-panel";
import ListItemHeader from './components/list-item-header';
import ListItemContent from "./components/list-item-content";
import DetailModal from './components/detail-model'
import { useFormQuery, render_multi_keywords_red } from 'util/func';
import { IData } from './type';
import { search } from 'apis';

export default (props: RouteComponentProps) => {

    const [ showModal, setShowModal ] = useState(false)
    const [ itemData,setItemData ] = useState([])
    const keywordsRef = useRef<any>()
    const dataHandler = ( listData:IData[], keywords ) => {
        keywordsRef.current = keywords
        return listData.map( item => ({
            ...item,
            comment_text:render_multi_keywords_red(keywords.comment,item.comment_text),
            question_text:render_multi_keywords_red(keywords.question,item.question_text)
        }))
    }
    const  { handleFinish, infoPanelStatus } = useFormQuery({url1:'case/search',url2:'case/search_total',dataHandler})
    const handleShowDetail = (data) => {
        search('case/get_one_case',{title:data.title,link:data.link}).then( (res:any) => {
            console.log(res);
            const keywords = keywordsRef.current
            res = res.map(item => ({
                ...item,
                title:render_multi_keywords_red(keywords.question,item.title),
                comment_text:render_multi_keywords_red(keywords.comment,item.comment_text),
                question_text:render_multi_keywords_red(keywords.question,item.question_text),
            }))
            setItemData(res)
            setShowModal(true)
        })
    }
    const searchPanel = (
        <SearchPanel page={[
            'input:question:问题',
            'timespan',
            'input:comment:回复',
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