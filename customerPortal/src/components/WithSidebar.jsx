// higher order component which displays the sidebar and the component passed to it as children
//

import React from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar.jsx';

const WithSidebar = ({children}) => {
    return (
        <Layout className="container" hasSider>
            <Sidebar />
            <Layout
            className='with-sidebar-layout'
          >
            {children}

            </Layout>
        </Layout>
    );
}
export default WithSidebar;