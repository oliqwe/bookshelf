import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BooksList from '../modules/Books/BooksList'
import ShelvesDetails from '../modules/Shelves/ShelvesDetails'

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" component={BooksList} exact />
      <Route path="/shelves" component={ShelvesDetails} exact />
    </Switch>
  )
}

export default AppRoutes
