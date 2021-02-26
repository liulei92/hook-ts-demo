import React, { useMemo, useState, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // useLocation
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;

interface ISiderProps {
  routes: Routes.IRoute[],
  appStore: Stores.AppStore
}

const AppSider: React.FC<ISiderProps> = props => {
  const { routes, appStore: { collapsed } } = props;
  const location = useLocation();
  const rootSubmenuKeys = ['/hooks', '/test'];
  let [openKeys, setOpenKeys] = useState<string[]>([]);

  const selectedKeys: string[] = useMemo(() => {
    const paths = location.pathname.substr(1).split('/');
    if (paths.length > 1) {
      !collapsed && setOpenKeys(['/' + paths[0]]);
      return ['/' + paths[0] + '/' + paths[1]];
    } else {
      setOpenKeys([]);
      return ['/' + paths[0]];
    }
  }, [location, collapsed]);

  const handleOpenChange = useCallback(
    (keys: string[]) => {
      const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1) || '';
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    },
    [openKeys, rootSubmenuKeys]
  );

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className='logo'>TS</div>
      <Menu
        theme='dark'
        mode='inline'
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
        inlineCollapsed={collapsed}
      >
        {
          routes.map((route: Routes.IRoute, i: number) => {
            return (
              route.routes && route.routes.length > 0 ? (
                <SubMenu key={route.path} icon={<UserOutlined />} title={route.name}>
                  {
                    route.routes.map((item: Routes.IRoute, i: number) => {
                      return (
                        <Menu.Item key={item.path}><NavLink to={item.path}>{item.name}</NavLink></Menu.Item>
                      );
                    })
                  }
                </SubMenu>
              ) : (
                <Menu.Item key={route.path} icon={<UserOutlined />}>
                  <NavLink to={route.path}>{route.name}</NavLink>
                </Menu.Item>
              )
            );
          })
        }
        <SubMenu key='/test' icon={<UserOutlined />} title='test level'>
          <Menu.Item key='test1'>option1</Menu.Item>
          <Menu.Item key='test2'>option2</Menu.Item>
          <Menu.Item key='test3'>option3</Menu.Item>
          <Menu.Item key='test4'>option4</Menu.Item>
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
  );
};

export default AppSider;
