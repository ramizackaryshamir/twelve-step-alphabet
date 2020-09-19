import React, { useState, useEffect } from 'react'
import { getAllMeetings, getOneMeeting } from '../../services/meetings.js'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  meetingCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    /*border: "1px solid red",*/
  },

  meetingCardLeft: {
    /*border: "10px solid black",*/
  },

  meetingCardCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: 400,
    fontSize: 15,
    padding: 10,
    /*border: "10px solid black",*/
    margin: "0px auto 0px 200px",
  },

  meetingCardRight: {
    marginLeft: 20,
  },

  elementLeft: {
    marginTop: 30,
    marginBottom: -20,
  },

  elementCenter: {
    textAlign: "justify",
    marginBottom: 0,
    marginTop: 3,
  },

  elementName: {
    fontFamily: 'Amatic SC',
    fontSize: 20,
    fontWeight: 100,
    textAlign: "justify",
    marginBottom: 3,
    marginTop: 3,
  },

  elementRight: {
    textAlign: "right",
    fontWeight: 700,
    marginTop: 30,
    marginBottom: -20,
  },
})

export default function Meeting(details) {

  const { name, address1, address2, city, state, zipcode, timeOfDay, dayOfWeek, latitude, longitude, organization } = details
  
  const classes = useStyles()

  
  return (
    <>
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
          {/*{zipcode}*/}
          {/*{latitude}{longitude}*/}
        </div>

        <div className={classes.meetingCardRight}>
          <p className={classes.elementRight}>{timeOfDay}</p>
          <p className={classes.elementRight}>{dayOfWeek}</p>
          </div>
      </div>
    </>
  )
}