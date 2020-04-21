import React from 'react'
import { NavLink } from 'react-router-dom' // useLocation
import { RouteInterface, MenusInterface } from '@/assets/interface'
import Routes from './Routes'

const Menus: React.FC<MenusInterface> = props => {
  // const location = useLocation()
  return (
    <ul>
      {
        Routes.map((route: RouteInterface, i: number) => {
          return <li key={route.path}><NavLink to={route.path}>{route.name}</NavLink></li>
        })
      }
    </ul>
  )
}

export default Menus
