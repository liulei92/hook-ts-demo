import React from 'react'
// import logo from './logo.svg'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import routes from './router'
import RouteWithSubRoutes from './components/RouteWithSubRoutes'
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
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <ul>
            <li><Link to='/home'>Home 首页</Link></li>
          </ul>
        </header>

        <Switch>
          <Route path='/' exact render={() => (<Redirect to='/home'/>)} />
          {routes.map((route: RouteInterface, i: number) => {
            return RouteWithSubRoutes(route, i)
          })}
          <Redirect from='/*' to='/' />
        </Switch>
      </div>
    </Router>
  )
}

export default App
