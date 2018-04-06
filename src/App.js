import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import SimpleHeader from './components/SimpleHeader'
import Home from './components/Home'
import _404 from './components/_404'
import Stopwatch from './components/Stopwatch'
import Todo from './components/Todo'

const App = () => (
  <BrowserRouter>
    <div>
      <SimpleHeader/>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/stopwatch' component={Stopwatch} />
          <Route path='/todo' component={Todo} />
          <Route component={_404} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App