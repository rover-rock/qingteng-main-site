import React from 'react'
import { Router, RouteComponentProps } from "@reach/router";
import Home from "../pages/home";
import OneReportPage from "../pages/one-report";
export default () => {
    
    return (
        <Router>
            <Home path="/*" />
            <OneReportPage path="one-report" />           
        </Router>
    )
}