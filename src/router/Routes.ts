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
    name: 'UseState',
    path: '/useState',
    component: lazy(() => import(/* webpackChunkName: "useState" */ '@/views/UseState'))
  },
  {
    name: 'UseEffect',
    path: '/useEffect',
    component: lazy(() => import(/* webpackChunkName: "useEffect" */ '@/views/UseEffect'))
  }
]

export default routes
