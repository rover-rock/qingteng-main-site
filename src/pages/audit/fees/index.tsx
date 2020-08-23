import React from 'react'
import { RouteComponentProps } from '@reach/router';
import Layout from "../../../components/layout";
import SearchPanel from "../../../components/search-panel";
export default (props:RouteComponentProps) => {

    const handleSubmit = () =>{

    }
    const searchPanel = (
        <SearchPanel page={[
            'company',
            'timespan',
            
        ]} onFinish={handleSubmit}></SearchPanel>
    ) 
    return (
       <Layout searchPanel={searchPanel}/>
    )
}; 