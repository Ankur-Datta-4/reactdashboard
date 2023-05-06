// header component which displays logo on left and notification icon and user avatar on right

import React, { useState } from 'react';
import { Layout, Avatar, Badge, Button, Drawer } from 'antd';
import { BellOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import SidebarItems from './SidebarItems';

const { Header } = Layout;

const AppHeader = () => {
    const [visible,setVisible]=useState(false);
    return (
        <Header className="header">
      <Button
        className="menu"
        type="primary"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
      />
      <Drawer
        title="Topics"
        placement="left"
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}
      > 
        <SidebarItems/>
        
     </Drawer>
     
            <div className="logo">
                <h2 className='font-opensans txt-blue'>Stonovation</h2>
            </div>
            <div className="flex-center">
                {/* <Badge count={5}> */}
                    <BellOutlined style={{ fontSize: '24px', color: '#0066FF' }} />
                {/* </Badge> */}
                <Avatar icon={<UserOutlined style={{ fontSize: '24px', color: 'black' }}/>} />
                <span style={{color:"#545454",fontSize:"16px", fontWeight:"600"}}>
                    Ashish
                </span>
            </div>
        </Header>
    );
}

export default AppHeader;