import React from 'react'
import useStyles from './Footer.js'

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.footer}>
        <p>
          Color Palette inspired by Agnes Martin's 'With My Back to the World'
        </p>
        <p>Report Missing Rooms</p>
        <p>Feedback</p>
      </div>
    </>
  )
}

export default Footer;