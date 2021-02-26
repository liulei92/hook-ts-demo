import React, { useState, useCallback } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Sider, Content, Footer } = Layout;

const BaseLayout: React.FC = (props: any) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = useCallback(
    () => {
      setCollapsed(!collapsed);
    },
    [collapsed]
  );

  return (
    <Layout className='app-layout'>
      {/* Sider */}
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo'>hooks-ts-demo</div>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['hooks1']}
          defaultOpenKeys={['hooks']}
        >
          <SubMenu key='hooks' icon={<UserOutlined />} title='hooks test'>
            <Menu.Item key='hooks1'>option1</Menu.Item>
            <Menu.Item key='hooks2'>option2</Menu.Item>
            <Menu.Item key='hooks3'>option3</Menu.Item>
            <Menu.Item key='hooks4'>option4</Menu.Item>
          </SubMenu>
          <Menu.Item key='1' icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key='2' icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key='3' icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      {/* 次级 Layout */}
      <Layout className='site-layout'>
        {/* Header */}
        <Header className='site-layout-background' style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: handleToggle
          })}
        </Header>
        {/* Breadcrumb */}
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        {/* Content */}
        <Content
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
            Content
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export { default as AppHeader } from './AppHeader';
export { default as AppSider } from './AppSider';
export { default as AppFooter } from './AppFooter';

export default BaseLayout;
