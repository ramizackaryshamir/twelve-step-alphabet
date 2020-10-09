import React from 'react'
import useStyles from './Nav.js'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  
  const classes = useStyles()
  return (
    <>
      <div className={classes.navBar}>
        <NavLink to="/" className={classes.navItem}>
          ALL MEETINGS
        </NavLink>
        <NavLink to="/meetings-cma" className={classes.navItem}>
          CMA
        </NavLink>
        <NavLink to="/meetings-na" className={classes.navItem}>
          NA
        </NavLink>
        <NavLink to="/meetings-aa" className={classes.navItem}>
          AA
        </NavLink>
        <NavLink to="/meetings-al" className={classes.navItem}>
          AL ANON
        </NavLink>
      </div>
    </>
  )
}

export default Nav;