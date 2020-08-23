import React from 'react'
import { RouteComponentProps } from '@reach/router';
import Layout from "components/layout";
import SearchPanel from "components/search-panel";
import InfoPanel from "components/info-panel";
import ListItemHeader from './components/list-item-header';
import ListItemContent from "./components/list-item-content";
import { useFormQuery } from 'util/func';

export default (props: RouteComponentProps) => {

    const  { handleFinish, infoPanelStatus } = useFormQuery({url1:'audit-data/feibiao',url2:'audit-data/feibiao-total'})
    const handleShowDetail = () => {

    }
    const searchPanel = (
        <SearchPanel page={[
            'company',
            'feibiao_timespan',
            'agency',
            'feibiao_result',
            'input:info:非标正文',
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
        </div>
    )
};