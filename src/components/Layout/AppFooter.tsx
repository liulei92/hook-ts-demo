import React from 'react';
import { Layout } from 'antd';

interface IFooterProps {
  appStore: Stores.AppStore
}

const AppFooter: React.FC<IFooterProps> = props => {
  const { appStore: { year, developer } } = props;

  return (
    <Layout.Footer style={{ textAlign: 'center' }}>Ant Design ©{year} Created by {developer}</Layout.Footer>
  );
};

export default AppFooter;
