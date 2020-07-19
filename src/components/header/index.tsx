import React, { useState } from 'react'
import { Menu } from 'antd';
import { useNavigate } from "@reach/router";
import { getMenu } from '../../router/route-config';

const { SubMenu } = Menu
const menuConfig = getMenu()
export default () => {
    const [ current,setCurrent ] = useState('audit/fees')
    const navigate = useNavigate()
    const handleClick = (e:any) =>{
        setCurrent(e.key)
    }
    const handleClickMenu = (page:string) => {
      // window.location.search = '?page='+page
      navigate('/'+page)
    }
    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          {
            menuConfig.map( submenu => (
              <SubMenu key={submenu.title} title={submenu.title}>
                {
                  submenu.children.map(menuItem => (
                    <Menu.Item key={menuItem.path} onClick={()=>handleClickMenu(menuItem.path)}>{menuItem.title}</Menu.Item>
                  ))
                }
              </SubMenu>
            ))
          }
        </Menu>
      );
}
