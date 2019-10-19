import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonNav = (props) => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/lakes'>Lakes</NavLink></li>
        <li><NavLink to='/mountains'>Mountains</NavLink></li>
        <li><NavLink to='/trees'>Trees</NavLink></li>
      </ul >
    </nav >
  )
}

export default ButtonNav
