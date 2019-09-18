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
          <Link to='#' onClick={logOff}>Log off</Link> <br/>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Link to='/register' >Register as a Volunteer</Link><br />
          <Link to='/signin' >Volunteer Sign in</Link>
        </IfNotAuthenticated>
      </div>
     
    </React.Fragment>
  )
}
