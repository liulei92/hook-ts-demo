import React, { Suspense, useEffect } from 'react'
// import logo from './logo.svg'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Routes, Menus } from './router'
import RouteWithSubRoutes from '@/components/RouteWithSubRoutes'
import { RouteInterface } from './assets/interface'

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
    console.log('https://juejin.im/post/5e652741518825494822d569')
  }, [])

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          {/* <ul>
            <li><Link to='/home'>Home</Link></li>
          </ul> */}
          <Menus />
        </header>

        <Suspense fallback={null}>
          <Switch>
            <Route path='/' exact render={() => (<Redirect to='/home'/>)} />
            {Routes.map((route: RouteInterface, i: number) => {
              return RouteWithSubRoutes(route, i)
            })}
            <Redirect from='/*' to='/' />
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}

export default App
