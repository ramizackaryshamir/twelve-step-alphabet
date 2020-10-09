import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './Meeting.js'

const Meeting = ( { id, name, address1, address2, city, state, timeOfDay, dayOfWeek, organization }) => {
  
  const classes = useStyles()

  return (
    <Link to={`/meeting-detail/${id}`} className={classes.link}>
      <div className={classes.meetingCard}>
        <div className={classes.meetingCardLeft}>
          <p className={classes.elementLeft}>{organization}</p>
          <p className={classes.elementLeft}>{state}</p>
        </div>

        <div className={classes.meetingCardCenter}>
          <p className={classes.elementName}>{name}</p>
          <p className={classes.elementCenter}>{address1}</p>
          <p className={classes.elementCenter}>{address2}</p>
          <p className={classes.elementCenter}>{city}</p>
        </div>

        <div className={classes.meetingCardRight}>
          <p className={classes.elementRight}>{timeOfDay}</p>
          <p className={classes.elementRight}>{dayOfWeek}</p>
        </div>
      </div>
    </Link>
  )
}

export default Meeting;