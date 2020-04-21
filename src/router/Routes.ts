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
  }
]

export default routes
