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
        ]}></SearchPanel>
    )
    
    return (
       <Layout searchPanel={searchPanel}/>
    )
};