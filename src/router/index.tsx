import React, { useEffect } from 'react'
import { Router } from "@reach/router";
import Home from "../pages/home";
import OneReportPage from "../pages/one-report";
export default () => {
    useEffect(() => {
        console.log(window.location.pathname);
        // nav('/',{replace:true})
    },[window.location.pathname])
    return (
        <Router>
            <Home path="/*" /> 
            <OneReportPage path="one-report" />           
        </Router>
    )
}