import { JSXElementConstructor } from 'react'
import { RouteComponentProps } from '@reach/router'

type RouteConfig = Array<{
    path:string,
    component: JSXElementConstructor<RouteComponentProps>
}>

const routes = [
    {
        title:'审计数据',
        children:[
            {
                title:'关键审计事项',
                path:'audit/keyaudit',
                component: require('../pages/audit/keyaudit').default
            },
            // {
            //     title:'非标意见',
            //     path:'audit/feibiao',
            //     component: require('../pages/audit/feibiao').default
            // },
            // {
            //     title:'审计收费',
            //     path:'audit/fees',
            //     component: require('../pages/audit/fees').default
            // },
            // {
            //     title:'投资者关注问题',
            //     path:'audit/wenda',
            //     component: require('../pages/audit/fees').default
            // },
            // {
            //     title:'行政处罚',
            //     path:'audit/punish',
            //     component: require('../pages/audit/fees').default
            // },
        ]
    },
    {
        title:'实务案例',
        children:[
            {
                title:'视野案例',
                path:'audit/case',
                component: require('../pages/audit/case').default
            }
        ]
    }
]

const getRoute = () => {
    const route:RouteConfig = []
    routes.forEach( r => {
        route.push(...r.children)
    })
    return route
}

export const getMenu = () => {
    return routes
}

export default getRoute()