import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useStyles from './MeetingDetailStyles.jsx'
import ReviewForm from "../../Components/ReviewForm/ReviewForm.jsx"
import Meeting from '../../Components/Meeting/Meeting.jsx'
import Review from '../../Components/Review/Review.jsx'

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
      {/* <div className={classes.body}> */}
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
        <div className={classes.reviewCard}>
          {reviews.map((review) => (
          <Review 
              key={review.id}
              title={review.title}
              userName={review.userName}
              description={review.description}
              score={review.score}
            />
          ))}
        </div>
        <ReviewForm
          fetchReviews={fetchReviews}
          reviews={reviews}
          id={params.id}
          createReview={createReview}
          rows="35"
          cols="85"
        />
      {/* </div> */}
      {/* <Link to={`/meeting-detail/${params}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={() => handleDelete(food.id)}>Delete</button>
    */}
    </>
  )
}