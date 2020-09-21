import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { getAllMeetings, getOneMeeting, postMeeting } from '../../services/meetings.js'
import Meetings from "../../screens/Meetings/Meetings.jsx"
import MeetingDetail from "../../screens/MeetingDetail/MeetingDetail.jsx"
import PostReview from "../../screens/PostReview/PostReview"

export default function MeetingsContainer({handleClick}) {
  const [page, setPage] = useState(0)
  const [allMeetings, setAllMeetings] = useState([])
  const [oneMeeting, setOneMeeting] = useState('')

  useEffect(() => {
    fetchMeetings()
  }, [])

  const history = useHistory()

  const fetchMeetings = async () => {
    const meetings = await getAllMeetings()
    setAllMeetings(meetings)
  }

  const fetchMeeting = async () => {
    const meeting = await getOneMeeting(meeting.id)
    setOneMeeting(meeting)
  }
  const createMeeting = async (meetingData) => {
    const newMeeting = await postMeeting(meetingData)
    setAllMeetings((prevState) => [...prevState, newMeeting])
    history.push("/")
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
          />
        </Route>
        <Route path="/post-review" component={PostReview} />
        <Route path="/">
          <Meetings allMeetings={allMeetings} filterFn={(meeting) => meeting} />
        </Route>
      </Switch>
    </>
  )
}