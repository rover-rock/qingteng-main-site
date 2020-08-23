import React from 'react'
import { RouteComponentProps } from '@reach/router';
import Layout from "components/layout";
import SearchPanel from "components/search-panel";
import InfoPanel from "./components/info-panel";
import { useFormQuery } from 'util/func';

export default (props: RouteComponentProps) => {

    const  { handleFinish, infoPanelStatus } = useFormQuery({url1:'audit-data/fees',url2:'audit-data/fees-total'})
    const handleShowDetail = () => {

    }
    const searchPanel = (
        <SearchPanel page={[
            'company',
            'feibiao_timespan',
            'market',
            'industry',
            'agency',
            'input:cpa:签字注师',
            'fees_result'
        ]}
            onFinish={handleFinish}
        ></SearchPanel>
    )
    const infoPanel = (
        <InfoPanel props={infoPanelStatus}></InfoPanel>
    )
    return (
        <div>
            <Layout searchPanel={searchPanel} infoPanel={infoPanel} />
        </div>
    )
};