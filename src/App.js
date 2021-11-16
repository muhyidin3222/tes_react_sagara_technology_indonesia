import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import ProtectedRoute from 'components/ProtectedRoute'
import Login from 'page/login'
import Register from 'page/register'
import BeritaList from 'page/berita/list'
import NotFound from 'page/notFound'
import BeritaDetail from 'page/berita/detail'

import "assets/scss/general/nano.scss"

function App () {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path='/' component={BeritaList} />
        <Route path='/not-found' component={NotFound} />
        <Route path='/berita' component={BeritaDetail} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App