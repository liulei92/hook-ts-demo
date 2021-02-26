import React, { useCallback } from 'react';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';

const { Header } = Layout;

interface IHeaderProps {
  appStore: Stores.AppStore
}

const AppHeader: React.FC<IHeaderProps> = props => {
  const { appStore: { collapsed, toggleCollapsed } } = props;

  const handletoggle = useCallback(
    () => {
      toggleCollapsed(!collapsed);
    },
    [collapsed, toggleCollapsed]
  );

  return (
    <Header className='site-layout-background' style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: handletoggle
      })}
    </Header>
  );
};

export default AppHeader;
