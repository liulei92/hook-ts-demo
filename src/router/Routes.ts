import { lazy } from 'react';

const routes = [
  {
    name: 'Hooks',
    path: '/hooks',
    routes: [
      {
        name: 'Home',
        path: '/hooks/home',
        component: lazy(() => import(/* webpackChunkName: "home" */ '@/views/Home'))
      },
      {
        name: 'About',
        path: '/hooks/about',
        component: lazy(() => import(/* webpackChunkName: "about" */ '@/views/About'))
      },
      {
        name: 'TsDemo',
        path: '/hooks/tsDemo',
        component: lazy(() => import(/* webpackChunkName: "tsDemo" */ '@/views/TsDemo'))
      },
      {
        name: 'UseState',
        path: '/hooks/useState',
        component: lazy(() => import(/* webpackChunkName: "useState" */ '@/views/UseState'))
      },
      {
        name: 'UseEffect',
        path: '/hooks/useEffect',
        component: lazy(() => import(/* webpackChunkName: "useEffect" */ '@/views/UseEffect'))
      },
      {
        name: 'UseRef',
        path: '/hooks/useRef',
        component: lazy(() => import(/* webpackChunkName: "useRef" */ '@/views/UseRef'))
      },
      {
        name: 'UseMemo',
        path: '/hooks/useMemo',
        component: lazy(() => import(/* webpackChunkName: "useMemo" */ '@/views/UseMemo'))
      },
      {
        name: 'UseReducer',
        path: '/useReducer',
        component: lazy(() => import(/* webpackChunkName: "useReducer" */ '@/views/UseReducer'))
      },
      {
        name: 'UseContext',
        path: '/useContext',
        component: lazy(() => import(/* webpackChunkName: "useContext" */ '@/views/UseContext'))
      },
      {
        name: 'Layout',
        path: '/layout',
        component: lazy(() => import(/* webpackChunkName: "Layout" */ '@/components/Layout'))
      }
    ]
  }
];

export default routes;
