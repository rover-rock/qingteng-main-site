import React, { ReactElement } from 'react'
import Header from "../../components/header";
import { Router,RouteComponentProps } from '@reach/router';
import routeConfig from "../../router/route-config";
export default (props:RouteComponentProps) => {

    return (
        <> 
            <Header></Header>
            <Router>
                {
                    routeConfig.map( r => {
                        const Com = r.component
                        return <Com path={r.path}></Com>
                    })
                }
            </Router>
        </>
    )
};