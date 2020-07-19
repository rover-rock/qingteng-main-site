import React from 'react'
import { RouteComponentProps } from '@reach/router';
import Layout from "../../../components/layout";
import SearchPanel from "../../../components/search-panel";
export default (props:RouteComponentProps) => {

    const searchPanel = (
        <SearchPanel page={[
            'company',
            'timespan',
            'input:description:描述',
            'input:market:市场'
        ]} ></SearchPanel>
    )
    const infoPanel = (
        <div>
            keyaudit panel
        </div>
    )

    return (
       <Layout searchPanel={searchPanel} infoPanel={infoPanel}/>
    )
};