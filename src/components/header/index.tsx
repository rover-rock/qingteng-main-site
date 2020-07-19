import React, { useState } from 'react'
import { Menu } from 'antd';
import { useNavigate } from "@reach/router";

const { SubMenu } = Menu
const menuConfig = [
  {
    title:'审计数据',
    children:[
      {
        title:'关键审计事项',
        page:'/audit/keyaudit'
      },
      {
        title:'非标意见',
        page:'/audit/feibiao'
      },
      {
        title:'审计收费',
        page:'/audit/fees'
      },
      {
        title:'投资者关注问题',
        page:'/audit/wenda'
      },
      {
        title:'行政处罚',
        page:'/audit/punish'
      },
    ]
  }
]
export default () => {
    const [ current,setCurrent ] = useState('audit/fees')
    const navigate = useNavigate()
    const handleClick = (e:any) =>{
        setCurrent(e.key)
    }
    const handleClickMenu = (page:string) => {
      // window.location.search = '?page='+page
      navigate(page)
    }
    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          {
            menuConfig.map( submenu => (
              <SubMenu key={submenu.title} title={submenu.title}>
                {
                  submenu.children.map(menuItem => (
                    <Menu.Item key={menuItem.page} onClick={()=>handleClickMenu(menuItem.page)}>{menuItem.title}</Menu.Item>
                  ))
                }
              </SubMenu>
            ))
          }
        </Menu>
      );
}
