import React from 'react'
import { createUseStyles } from "react-jss"

import { Background } from "../../../assets/12step_app_background.jpg"
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

const useStyles = createUseStyles({
  body: {
    backgroundImage: `url(${Background})`,
    backgroundColor: "#FFD1DC",
  },
})

export default function Layout({ children }) {
  
  const classes = useStyles();
  
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}