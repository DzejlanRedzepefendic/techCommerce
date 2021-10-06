import React from 'react'
import Login from './Login'
import Register from './Register.jsx'
import NoMatchPage from './NoMatchPage.jsx'
import Dashboard from './Dashboard.jsx'
import { HashRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'

const App = () => {
  return (
    <HashRouter>
      <div className='container-fluid'>
        <Switch>
          <Route path='/' exact={true} component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='*' component={NoMatchPage} />
        </Switch>
      </div>
    </HashRouter>
  )
}

export default App
