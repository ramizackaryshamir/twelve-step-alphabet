import React from 'react'
import { createUseStyles } from 'react-jss'

import './Meeting.css'

const useStyles = createUseStyles({
  meeting: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    border: "1px solid red",
  },

  elementLeft: {
    marginTop: 10,
  },

  meetingRight: {
    display: 'flex',
    flexDirection: "column",
  },

  elementRight: {
    textAlign: "right",
    marginTop: 10,
  },

  meetingCenter: {
    display: "flex",
    flexDirection: "column",
    width: 600,
    fontSize: 15,
    padding: 10,
    border: "10px solid black",
    margin: "auto",
  },

  elementCenter: {
    marginBottom: 3,
    marginTop: 3,
  },
})

export default function Meeting(details) {
  
  const { name, address1, address2, city, state, zipcode, timeOfDay, dayOfWeek, latitude, longitude, organization } = details
  
  const classes = useStyles()

  return (
    <>
      <div className={classes.meeting}>
        <div>
          <p className={classes.elementLeft}>{timeOfDay}</p>
          <p className={classes.elementLeft}>{dayOfWeek}</p>
        </div>

        <div className={classes.meetingCenter}>
          <p className={classes.elementCenter}>{name}</p>

          <p className={classes.elementCenter}>{address1}</p>

          <p className={classes.elementCenter}>{address2}</p>

          
          {/*{zipcode}*/}
          {/*{latitude}{longitude}*/}
        </div>

        <div className={classes.meetingRight}>
          <p className={classes.elementRight}>{organization}</p>
          <p className={classes.elementRight}>{state}</p>
        </div>
      </div>
    </>
  )
}