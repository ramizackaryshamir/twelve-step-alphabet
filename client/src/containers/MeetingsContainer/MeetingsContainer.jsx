import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { getAllMeetings, getOneMeeting, postMeeting } from '../../../services/meetings.js'
import Meeting from '../../Meeting/Meeting.jsx'
import Meetings from '../../../screens/Meetings/Meetings.jsx'
import MeetingDetail from '../../../screens/MeetingDetail/MeetingDetail.jsx'

export default function MeetingsContainer() {

  const [allMeetings, setAllMeetings] = useState([])
  useEffect(() => {
    fetchMeetings();
  }, [])
  const history = useHistory()

  const fetchMeetings = async () => {
    const meetings = await getAllMeetings();
    setAllMeetings(meetings);
  }

  const createMeeting = asyc(meetingData) => {
    const meeting = await postMeeting(meetingData);
    setAllMeetings(prevState => ([
      ...prevState,
      newMeeting
    ]));
    history.push('/')
  }

  return (
    <>
      <Switch>
        <Route path='/'>
          <Meetings
            allMeetings={allMeetings}
          />
        </Route>
        <Route path='/meeting-detail/:id'>
          <MeetingDetail
            allMeetings={allMeetings}
            createMeeting={createMeeting}
          />
        </Route>
      </Switch>
    <>
  
  )
}