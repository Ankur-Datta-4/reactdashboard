import { Layout, Menu, Button, Divider, Checkbox} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import SidebarItems from './SidebarItems';

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    function handleResize() {
      setCollapsed(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  
  return (
    <Sider className='' style={{backgroundColor:"#EEF4FD",  overflowY:'hidden', borderRadius:"20px",  height: '90vh',
    position: 'fixed',
    left: 0,
    top: "10vh",
    bottom: 0,
    overflowX: 'hidden',
    
  }} width={320} breakpoint='md'
    collapsed={collapsed}
    onCollapse={(collapsed) => {
      setCollapsed(collapsed);
    }}
    collapsedWidth={0}
    
    >
      <SidebarItems/>

    </Sider>
  );
};

export default Sidebar;
