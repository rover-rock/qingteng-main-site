import React, { ReactElement, useEffect } from 'react'
import Header from "../../components/header";
import { Router, RouteComponentProps, useLocation, useNavigate } from '@reach/router';
import routeConfig from "../../router/route-config";
import { getToken } from 'util/func';
export default (props: RouteComponentProps) => {
    const NotFound = (p) => <p>页面不存在</p>
    const location = useLocation()
    const nav = useNavigate()
    console.log(location);
    useEffect(() => {
        const token = getToken()
        if ( !token && location.pathname !== '/audit/case') {
            nav('/',{replace:true})
        }
    }, [location.pathname])

    return (
        <>
            <Header></Header>
            <Router>
                {
                    routeConfig.map(r => {
                        const Com = r.component
                        return <Com key={r.path} path={r.path}></Com>
                    })
                }
                <NotFound default></NotFound>
            </Router>
        </>
    )
};