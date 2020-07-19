import React from 'react'
import { RouteComponentProps } from '@reach/router';
import Layout from "../../../components/layout";
import SearchPanel from "../../../components/search-panel";
export default (props:RouteComponentProps) => {

    const searchPanel = (
        <SearchPanel page={[
            'company',
            'timespan',
            
        ]}></SearchPanel>
    )
    return (
       <Layout searchPanel={searchPanel}/>
    )
};