import React from 'react'
import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'



export default function Nav () {
  return (
    <React.Fragment>
      <div>
        <Link to='/'>Home</Link><br/>
        <IfAuthenticated>
          <Link to='#' data-testid='logoff' onClick={logOff}>Log off</Link> <br/>
          <Link to='/service-form' >Log Services for Client</Link><br />
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Link to='/register'data-testid='register' >Register as a Volunteer</Link><br />
          <Link to='/signin' data-testid='signin' >Volunteer Sign in</Link>
        </IfNotAuthenticated>
      </div>
     
    </React.Fragment>
  )
}
