import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useStyles from './MeetingDetail.js'
import Meeting from '../../Components/Meeting/Meeting.jsx'
import MapDetail from "../../Components/MapDetail/MapDetail.jsx"
import { getOneMeeting } from '../../services/meetings.js'


export default function MeetingDetail(props) {
  const { allMeetings, oneMeeting} = props
  const classes = useStyles()


  //params is assigned the value of the id in '/meetings/id'; 1 for '/meetings/1', 2 for '/meetings/2', etc.
  const params = useParams()
  
  return (
    <>
      <div className={classes.meetingCard}>
        {allMeetings
            .filter((meeting) => meeting.id === parseInt(params.id)).map((meeting) => (
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
      
      {/*
      
        <div className={classes.mapCard}>
        {oneMeeting.filter((meeting) => meeting.id === parseInt(params.id)).map((meeting) => 
        ( 
        //NOTE: applying filter and map method in this way does not throw an error in the browser, but
        the map no longer renders to the page October 09, 2020

        */}
      
      <MapDetail
        
          // params={params.id}
          // key={meeting.id}
          // longitude={meeting.longitude}
          // latitude={meeting.latitude}
        
        />
        
      {/* 

      ))}
      </div> 
      
      */}

      
        {/* 
        //
          //
        <div className={classes.mapCard}>
          {meetings.map((meeting) => (
          <Review 
              key={meeting.id}
              longitude={meeting.longitude}
              latitude={meeting.latitude}
              description={review.description}
              score={review.score}
            />
          ))}
        </div> */}
        {/* <ReviewForm
          fetchReviews={fetchReviews}
          reviews={reviews}
          id={params.id}
          createReview={createReview}
          rows="35"
          cols="85"
        /> */}
      {/* </div> */}
      {/* <Link to={`/meeting-detail/${params}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={() => handleDelete(food.id)}>Delete</button>
    */}
    </>
  )
}

// useEffect(() => {
  //   fetchReviews(params.id)
  // }, [])