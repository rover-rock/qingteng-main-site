import React from 'react'
import { RouteComponentProps } from '@reach/router';
import Layout from "components/layout";
import SearchPanel from "components/search-panel";
import InfoPanel from "components/info-panel";
import ListItemHeader from './components/list-item-header';
import ListItemContent from "./components/list-item-content";
import { useFormQuery } from 'util/func';

export default (props: RouteComponentProps) => {

    const  { handleFinish, infoPanelStatus } = useFormQuery({url1:'audit-data/keyaudit',url2:'audit-data/keyaudit-total'})
    const handleShowDetail = () => {

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
        <div className='keyaudit-page'>
            <Layout searchPanel={searchPanel} infoPanel={infoPanel} />
        </div>
    )
};