import React from "react"
import useStyles from "./Header.js"
import Nav from "../Nav/Nav.jsx"

const Header = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.header}>
        <Nav />
      </div>
    </>
  )
}

export default Header
