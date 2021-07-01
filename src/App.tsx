import React, { Suspense, useEffect } from 'react';
import { Provider, observer } from 'mobx-react';
// import logo from './logo.svg'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import classnames from 'classnames';
import store from '@/store';
import { AppSider, AppHeader, AppFooter } from '@/components/Layout';
import { Routes, Menus } from './router';
import RouteWithSubRoutes from '@/components/RouteWithSubRoutes';
import { RouteInterface } from './assets/interface';

const { Content } = Layout;

// function App () {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <img src={logo} className='App-logo' alt='logo' />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className='App-link'
//           href='https://reactjs.org'
//           target='_blank'
//           rel='noopener noreferrer'
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   )
// }

const App: React.FC = () => {
  useEffect(() => {
    console.log('https://juejin.im/post/5e652741518825494822d569');
  }, []);

  const siteSlasses = classnames('site-layout', { 'collapsed': store.appStore.collapsed });

  return (
    <Provider {...store}>
      <Router>
        <noscript> Learn React </noscript>
        {/* Layout */}
        <Layout className='app-layout'>
          {/* Sider */}
          <AppSider routes={Routes} appStore={store.appStore} />
          {/* 次级 Layout */}
          <Layout className={siteSlasses}>
            {/* Header */}
            <AppHeader appStore={store.appStore} />
            {/* Breadcrumb */}
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            {/* Content */}
            <Content className='site-layout-content'>
              <Suspense fallback={null}>
                <Switch>
                  <Route path='/' exact render={() => (<Redirect to='/home'/>)} />
                  {Routes.map((route: any, i: number) => {
                    return RouteWithSubRoutes(route, i);
                  })}
                  <Redirect from='/*' to='/' />
                </Switch>
              </Suspense>
            </Content>
            <AppFooter appStore={store.appStore} />
          </Layout>
        </Layout>
        {/* <div className='App'>
          <header className='App-header'>
            <Menus />
          </header>
          <Suspense fallback={null}>
            <Switch>
              <Route path='/' exact render={() => (<Redirect to='/home'/>)} />
              {Routes.map((route: RouteInterface, i: number) => {
                return RouteWithSubRoutes(route, i);
              })}
              <Redirect from='/*' to='/' />
            </Switch>
          </Suspense>
        </div> */}

        {/* <div className='sakura-bg' /> */}
      </Router>
    </Provider>
  );
};

export default observer(App);
