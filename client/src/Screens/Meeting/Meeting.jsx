import React from 'react'
import { createUseStyles } from 'react-jss'

import './Meeting.css'

const useStyles = createUseStyles({
  meeting: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
  },

  elementLeft: {
    margin: 10,
  },

  elementRight: {
    textAlign: "right",
    margin: 10,
  },

  meetingRight: {
    flexDirection: "column",
    float: "right",
    justifyContent: "center",
  },

  meetingCenter: {
    display: "flex",
    flexDirection: "column",
    fontSize: 15,
    padding: 10,
    border: "10px solid black",
    marginLeft: 250,
    marginRight: 250,
  },

  elementBottom: {
    margin: 1,
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
          <p className={classes.elementBottom}>{name}</p>

          <p className={classes.elementBottom}>{address1}</p>

          <p className={classes.elementBottom}>{address2}</p>

          <p className={classes.elementBottom}>{city}</p>
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