import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import {
  getAllMeetings,
  getOneMeeting,
  postReview,
  putUpdatedReview,
  destroyReview,
  getAllReviews
} from "../../services/meetings.js"

import Meetings from "../../screens/Meetings/Meetings.jsx"
import MeetingDetail from "../../screens/MeetingDetail/MeetingDetail.jsx"

export default function MeetingsContainer() {
  const [page, setPage] = useState(0)
  const [reviews, setReviews] = useState([])
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

  const fetchReviews = async (id) => {
    const reviews = await getAllReviews(id)
    setReviews(reviews)
  }

  const createReview = async (formData, id) => {
    const newReview = await postReview(formData, id)
    setReviews(prevState => [...prevState, newReview])
    // history.push(`/meeting-detail/:id`)
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
            fetchReviews={fetchReviews}
            reviews={reviews}
            createReview={createReview}
            allMeetings={allMeetings}
          />
        </Route>
        <Route path="/">
          <Meetings allMeetings={allMeetings} filterFn={(meeting) => meeting} />
        </Route>
      </Switch>
    </>
  )
}