import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { getAllMeetings, getOneMeeting, postMeeting } from '../../services/meetings.js'
import Meetings from "../../screens/Meetings/Meetings.jsx"
import MeetingDetail from "../../screens/MeetingDetail/MeetingDetail.jsx"
import PostReview from "../../screens/PostReview/PostReview"

export default function MeetingsContainer() {
  const [page, setPage] = useState(0)
  const [allMeetings, setAllMeetings] = useState([])

  useEffect(() => {
    fetchMeetings();
  }, [])
  const history = useHistory()

  const fetchMeetings = async () => {
    const meetings = await getAllMeetings(page * 10);
    setAllMeetings(meetings);
  }

  const createMeeting = async(meetingData) => {
    const newMeeting = await postMeeting(meetingData);
    setAllMeetings(prevState => ([
      ...prevState,
      newMeeting
    ]));
    history.push('/')
  }

  return (
    <>
      <Switch>
        <Route path="/meetings-cma">
          <Meetings
            allMeetings={allMeetings}
            filterFn={(meeting) =>
              meeting.category.name == "CMA"
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
        <Route path="/meetings-alanon">
          <Meetings
            allMeetings={allMeetings}
            filterFn={(meeting) =>
              meeting.category.name == "AL"
            }
          />
        </Route>

        <Route path="/meeting-detail" component={MeetingDetail} />
        <Route path="/post-review" component={PostReview} />
        <Route path="/">
          <Meetings allMeetings={allMeetings} filterFn={(meeting) => meeting} />
        </Route>
      </Switch>
    </>
  )
}