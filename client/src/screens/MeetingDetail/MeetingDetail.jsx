import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import ReviewForm from "../../Components/ReviewForm.jsx"
import Meeting from '../../Components/Meeting/Meeting.jsx'

const useStyles = createUseStyles({
  body: {
    display: "flex",
    flexDirection: "column",
  },

  meetingCard: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 100px 0px 100px",
    backgroundColor: "FFD1DC",
  },
})


export default function MeetingDetail(props) {
  const { createReview, allMeetings, reviews, fetchReviews } = props
  
  const params = useParams()
  console.log(params)
  const classes = useStyles()

  useEffect(() => {
    fetchReviews(params.id)
  }, [])
  

  return (
    <>
      <div className={classes.body}>
        <div className={classes.meetingCard}>
          {allMeetings
            .filter((meeting) => meeting.id === parseInt(params.id))
            .map((meeting) => (
              <Meeting
                params={params.id}
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
        <div>
          {reviews.map(review => (
            <div key={review.id}> 
              <p>{review.description}</p>
          </div>
          ))}
        </div>
        <ReviewForm
          fetchReviews={fetchReviews}
          reviews={reviews}
          id={params.id}
          createReview={createReview}
          rows="35"
          cols="85"
          buttonType="Submit Review"
          buttonType="Update Review"
        />
      </div>
      {/* <Link to={`/meeting-detail/${params}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={() => handleDelete(food.id)}>Delete</button>
    */}
    </>
  )
}