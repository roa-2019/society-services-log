import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './Nav'
import Fruits from './Fruits'
import Register from './Register'
import SignIn from './SignIn'
import Header from './Header'

export default function App () {
  return (
    <Router>
      <Route path='/' component={Header} />
      <Route path='/' component={Nav} />
      {/* <Route exact path='/' component={Fruits} /> */}
      <Route path='/register' component={Register} />
      <Route path='/signin' component={SignIn} />
    </Router>
  )
}
