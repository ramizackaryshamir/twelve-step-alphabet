import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { getAllMeetings, getOneMeeting } from "../../services/meetings.js"

import Meetings from "../../screens/Meetings/Meetings.jsx"
import MeetingDetail from "../../screens/MeetingDetail/MeetingDetail.jsx"
import Map from "../../Components/Map/Map.jsx"

const MeetingsContainer = () => {
  
  const [oneMeeting, setOneMeeting] = useState([])
  const [allMeetings, setAllMeetings] = useState([])

  useEffect(() => {
    fetchMeetings();
    fetchMeeting();
  }, [])

  const fetchMeetings = async () => {
    const meetings = await getAllMeetings();
    setAllMeetings(meetings);
  }

//   const getOneMeeting = async (id) => {
//   const resp = await api.get(`/meetings/${id}`);
//   return resp.data;
//   }
  const fetchMeeting = async (id) => {
    const meeting = await getOneMeeting(id);
    setOneMeeting(meeting);
  }

  return (
    <>
      <Switch>
        <Route path="/meetings-cma">
          <Meetings
            allMeetings={allMeetings}
            filterFn={(meeting) =>
              meeting.category.name === "CMA - Crystal Meth Anonymous"
            }
          />
        </Route>

        <Route path="/meetings-na">
          <Meetings
            allMeetings={allMeetings}
            filterFn={(meeting) =>
              meeting.category.name === "NA - Narcotics Anonymous"
            }
          />
        </Route>

        <Route path="/meetings-aa">
          <Meetings
            allMeetings={allMeetings}
            filterFn={(meeting) =>
              meeting.category.name === "AA - Alcoholics Anonymous"
            }
          />
        </Route>

        <Route path="/meetings-al">
          <Meetings
            allMeetings={allMeetings}
            filterFn={(meeting) => meeting.category.name === "AL - Al-Anon"}
          />
        </Route>

        <Route path='/meeting-detail/:id'>
          <MeetingDetail
            allMeetings={allMeetings}
            oneMeeting={oneMeeting}
          />
          <Map
            oneMeeting={oneMeeting}
          />
        </Route>

        <Route path="/">
          <Meetings allMeetings={allMeetings} filterFn={(meeting) => meeting} />
        </Route>
      </Switch>
    </>
  )
}

export default MeetingsContainer;