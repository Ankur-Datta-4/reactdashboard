// higher order component which adds the header to the component passed to it as children
//
import React from 'react';
import { Layout } from 'antd';
import AppHeader from './Header.jsx';

const WithHeader = ({children}) => {
    return (
        <Layout className="container">
            <AppHeader />
            <Layout style={{marginTop:"10vh"}}>
                {children}

            </Layout>
        </Layout>
    );
}
export default WithHeader;