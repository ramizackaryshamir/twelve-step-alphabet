import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './Footer.js'

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.footer}>
        <p>Sobriety Dashboard</p>
        <p>Report Missing Rooms</p>
        <p>Feedback</p>
      </div>
    </>
  )
}

export default Footer;