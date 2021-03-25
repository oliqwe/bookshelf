import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Book from 'modules/Books/Book'
import Shelves from 'modules/Shelves/index.js'

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" component={Book} exact />
      <Route path="/shelves" component={Shelves} exact />
    </Switch>
  )
}

export default AppRoutes
