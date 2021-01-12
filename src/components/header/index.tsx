import React, { useState } from 'react'
import { Menu } from 'antd';
import { MailOutlined,SettingOutlined } from "@ant-design/icons";
import { useNavigate } from "@reach/router";
import { getMenu } from '../../router/route-config';

const { SubMenu } = Menu
const menuConfig = getMenu()
export default () => {
  const [current, setCurrent] = useState('audit/fees')
  const navigate = useNavigate()
  const handleClick = (e: any) => {
    setCurrent(e.key)
  }
  const handleClickMenu = (page: string) => {
    // window.location.search = '?page='+page
    navigate('/' + page)
  }
  const loginOut = () => {

  }
  return (
    <div style={{display:'flex'}}>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{width:'100%'}}>
        {
          menuConfig.map(submenu => (
            <SubMenu key={submenu.title} title={submenu.title}>
              {
                submenu.children.map(menuItem => (
                  <Menu.Item key={menuItem.path} onClick={() => handleClickMenu(menuItem.path)}>{menuItem.title}</Menu.Item>
                ))
              }
            </SubMenu>
          ))
        }
      </Menu>
      <Menu mode="horizontal">
        <Menu.Item icon={<MailOutlined />} onClick={()=>handleClickMenu('user/message')}></Menu.Item>
        <SubMenu icon={<SettingOutlined />} title="用户">         
            <Menu.Item key="setting:1" onClick={()=>handleClickMenu('user/center')}>个人中心</Menu.Item>
            <Menu.Item key="setting:2" onClick={()=>handleClickMenu('user/message')}>消息中心</Menu.Item>
            <Menu.Item key="setting:3" onClick={()=>loginOut()}>退出登陆</Menu.Item>       
        </SubMenu>
      </Menu>
    </div>
  );
}
