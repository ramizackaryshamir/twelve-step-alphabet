import React from 'react'
import { createUseStyles } from 'react-jss'
import { NavLink } from 'react-router-dom'

const useStyles = createUseStyles({
  navBar: {
    outline: "none",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    paddingBottom: 5,
    width: 600,
    height: 60
  },
  navItem: {
    textDecoration: "none",
    outline: "none",
    fontSize: 30,
    fontFamily: "Cabin Sketch",
    marginBottom: 5,
    color: "#F2DABD",
  },
})
export default function Nav() {
  
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