import React, { useState, useEffect } from "react"
import { Route, Switch, useHistory } from "react-router-dom"
import { getAllMeetings } from "../../services/meetings.js"
import {
  destroyReview,
  updateReview,
  postReview,
} from "../../services/reviews.js"
import ReviewForm from "../../Components/ReviewForm/ReviewForm.jsx"
import Meetings from "../../screens/Meetings/Meetings.jsx"
import MeetingDetail from "../../screens/MeetingDetail/MeetingDetail.jsx"

const MeetingsContainer = () => {
  const [allMeetings, setAllMeetings] = useState([])

  const history = useHistory()

  useEffect(() => {
    fetchMeetings()
  }, [])

  const fetchMeetings = async () => {
    const meetings = await getAllMeetings()
    setAllMeetings(meetings)
  }

  const handleDelete = async (meeting_id, review_id) => {
    await destroyReview(review_id)
    setAllMeetings((prevState) =>
      prevState.map((meeting) => {
        return meeting.id === meeting_id
          ? {
              ...meeting,
              reviews: meeting.reviews.filter(
                (review) => review.id !== review_id
              ),
            }
          : meeting
      })
    )
  }

  const handlePost = async (formData, id) => {
    const newReview = await postReview(formData, id)
    setAllMeetings((prevState) =>
      prevState.map((meeting) => {
        return meeting.id === parseInt(id)
          ? {
              ...meeting,
              reviews: [...meeting.reviews, newReview],
            }
          : meeting
      })
    )
    history.push(`/meeting-detail/${id}`)
  }

  const handlePut = async (formData, id, meetingId) => {
    const updatedReview = await updateReview(id, formData)
    setAllMeetings((prevState) =>
      prevState.map((meeting) => {
        return meeting.id === parseInt(meetingId)
          ? {
              ...meeting,
            reviews: meeting.reviews.map(review => {
              return review.id === parseInt(id) ? updatedReview : review;
            })
            }
          : meeting
      })
    )
    history.push(`/meeting-detail/${meetingId}`)
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
        <Route path="/meeting-detail/:id">
          <MeetingDetail
            allMeetings={allMeetings}
            handleDelete={handleDelete}
          />
        </Route>
        <Route path="/meetings/:id/reviews/new">
          <ReviewForm handleSubmit={handlePost} />
        </Route>

        <Route path="/meetings/:id/reviews/:reviewId/edit">
          <ReviewForm allMeetings={allMeetings} handleSubmit={handlePut} />
        </Route>
        <Route path="/">
          <Meetings allMeetings={allMeetings} filterFn={(meeting) => meeting} />
        </Route>
      </Switch>
    </>
  )
}

export default MeetingsContainer
