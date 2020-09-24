import React, { useState } from 'react'
import useStyles from './MeetingsStyles.jsx'
import Meeting from '../../Components/Meeting/Meeting.jsx'

export default function Meetings(props) {
  const { allMeetings, filterFn } = props

  const classes = useStyles()

  return (
    <div className={classes.body}>
      <div className={classes.meetingCard}>
          {allMeetings.filter(filterFn).map((meeting) => (
            <Meeting
              id={meeting.id}
              key={meeting.id}
              name={meeting.name}
              address1={meeting.address1}
              address2={meeting.address2}
              city={meeting.city}
              state={meeting.state}
              dayOfWeek={meeting.dayOfWeek}
              timeOfDay={meeting.timeOfDay}
              organization={meeting.category.name}
            />
          ))}
      </div>
    </div>
  )
}