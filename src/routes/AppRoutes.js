import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BookList from 'modules/Books/BookList'
import Shelves from 'modules/Shelves/index.js'

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" component={BookList} exact />
      <Route path="/shelves" component={Shelves} exact />
    </Switch>
  )
}

export default AppRoutes
