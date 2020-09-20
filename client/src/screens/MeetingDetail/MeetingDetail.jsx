import React from 'react'
//import { createUseStyles } from 'react-jss'

import Meeting from '../../Components/Meeting/Meeting.jsx'

export default function MeetingDetail() {

  //const classes = useStyles()

  return (
    <>
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

    </>
  )
}