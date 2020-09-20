import React from 'react'
import { createUseStyles } from 'react-jss'

import Meeting from '../../Components/Meeting/Meeting.jsx'

const useStyles = createUseStyles({
  meetingCard: {
    display: "flex",
    flexDirection: "column",
    margin: '0px 100px 0px 100px'
  }
})
export default function MeetingDetail() {

  const classes = useStyles()

  return (
    <>
      <div className={classes.meetingCard}>
        <Meeting
          name="name"
          address1="address1"
          address2="address2"
          city="city"
          state="state"
          dayOfWeek="dayOfWeek"
          timeOfDay="timeOfDay"
          organization="organization"
        />
      </div>
    </>
  )
}