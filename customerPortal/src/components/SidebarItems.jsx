import React from 'react'
import { Layout, Menu, Button, Divider, Checkbox} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

const { Sider } = Layout;

const SidebarItems = () => {
  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <Button  type="text" style={{color:"#757676"}}>
          Filters
        </Button>
        <Button danger type="text">
          Clear all
        </Button>
      </div>
      <div className='sidebar-section'>
        <h3>Type</h3>
        <Checkbox style={{marginLeft:"0px"}}>Block</Checkbox>
        <Checkbox style={{marginLeft:"0px"}}>Slab</Checkbox>
       
      </div>
      <Divider style={{margin:4}}/>

      <div className='sidebar-section'>
        <h3>Category</h3>
        <Checkbox style={{marginLeft:"0px"}}>Granite</Checkbox>
        <Checkbox style={{marginLeft:"0px"}}>Marble</Checkbox>
        <Checkbox style={{marginLeft:"0px"}}>Quartz</Checkbox>
        <Checkbox style={{marginLeft:"0px"}}>Sandstone</Checkbox>
        <p style={{color:'blue', padding:"0px 2px"}}>+12 more</p>
      </div>
        <Divider style={{margin:4}}/>
      <div className='sidebar-section'>
        <h3 >Finish</h3>
        <Checkbox style={{marginLeft:"0px"}}>Brushed</Checkbox>
        <Checkbox style={{marginLeft:"0px"}}>Natural</Checkbox>
        <Checkbox style={{marginLeft:"0px"}}>Polished</Checkbox>
        <Checkbox style={{marginLeft:"0px"}}>Silk</Checkbox>
        <p style={{color:'blue', padding:"0px 2px"}}>+12 more</p>
      </div>
     
    </div>
  )
}

export default SidebarItems