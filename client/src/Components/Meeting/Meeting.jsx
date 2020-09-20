import React, { useState, useEffect } from 'react'
import { getAllMeetings, getOneMeeting } from '../../services/meetings.js'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  meetingCard: {
    outline: "none",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5,
    marginTop: 5,
    border: "3px solid #FFD1DC",
    borderRadius: 10,
    backgroundColor: "#F2DABD",
  },

  meetingCardLeft: {
    marginLeft: 20,
    fontFamily: "Rubik",
    fontWeight: 500,
  },

  meetingCardCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "justify",
    textJistify: "inter-word",
    width: 400,
    fontSize: 15,
    padding: 10,
    margin: "0px auto 0px 100px",
  },

  meetingCardRight: {
    marginRight: 20,
    marginLeft: 20,
    fontFamily: "Rubik",
    fontWeight: 500,
  },

  elementLeft: {
    marginTop: 30,
    marginBottom: -20,
  },

  elementCenter: {
    fontFamily: "Rubik",
    fontWeight: 400,
    textAlign: "justify",
    marginBottom: 0,
    marginTop: 3,
  },

  elementName: {
    fontFamily: "Amatic SC",
    fontSize: 20,
    fontWeight: 100,
    textAlign: "justify",
    marginBottom: 3,
    marginTop: 3,
  },

  elementRight: {
    textAlign: "right",
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