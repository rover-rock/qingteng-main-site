import { JSXElementConstructor } from 'react'
import { RouteComponentProps } from '@reach/router'

type RouteConfig = Array<{
    path:string,
    component: JSXElementConstructor<RouteComponentProps>
}>

export default [
    {
        path:'audit/case',
        component: require('../pages/audit/case').default
    },
    {
        path:'audit/keyaudit',
        component: require('../pages/audit/keyaudit').default
    },
    {
        path:'audit/fees',
        component: require('../pages/audit/fees').default
    },
] as RouteConfig