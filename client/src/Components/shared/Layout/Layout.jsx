import React from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import useStyles from './Layout.js'

const Layout = ({ children }) => {
  const classes = useStyles();
  
  return (
    <>
      <div className={classes.layout}>
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Layout;