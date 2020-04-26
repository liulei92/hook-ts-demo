import { lazy } from 'react'

const routes = [
  {
    name: 'Home',
    path: '/home',
    component: lazy(() => import(/* webpackChunkName: "home" */ '@/views/Home'))
  },
  {
    name: 'About',
    path: '/about',
    component: lazy(() => import(/* webpackChunkName: "about" */ '@/views/About'))
  },
  {
    name: 'TsDemo',
    path: '/tsDemo',
    component: lazy(() => import(/* webpackChunkName: "tsDemo" */ '@/views/TsDemo'))
  },
  {
    name: 'UseState',
    path: '/useState',
    component: lazy(() => import(/* webpackChunkName: "useState" */ '@/views/UseState'))
  },
  {
    name: 'UseEffect',
    path: '/useEffect',
    component: lazy(() => import(/* webpackChunkName: "useEffect" */ '@/views/UseEffect'))
  },
  {
    name: 'UseRef',
    path: '/useRef',
    component: lazy(() => import(/* webpackChunkName: "useRef" */ '@/views/UseRef'))
  },
  {
    name: 'UseMemo',
    path: '/useMemo',
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
  }
]

export default routes
