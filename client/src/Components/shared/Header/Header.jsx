import React from 'react'
import { createUseStyles } from 'react-jss'

import Nav from "../Nav/Nav.jsx"

const useStyles = createUseStyles({
  header: {
    outline: "none",
    display: "flex",
    flexDirection: "row",
    
    alignItems: "flex-end",
    borderBottom: "10px solid #F2DABD",
    borderRadius: 5,
    backgroundColor: "#FFD1DC",
  },
})

export default function Header() {
  
  const classes = useStyles()

  return (
    <>
      <div className={classes.header}>
        <Nav />
      </div>
    </>
  )
}