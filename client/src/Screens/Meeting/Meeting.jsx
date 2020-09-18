import React from 'react'

//import Layout from '../../Components/shared/Layout/Layout.jsx'

import './Meeting.css'

export default function Meeting(details) {
  
  const { name, address1, address2, city, state, zipcode, timeOfDay, dayOfWeek, latitude, longitude, organization } = details
  
  return (
    <>
      <div className="meeting">
        {name}
        {address1}
        {address2}
        {city}
        {state}
        {zipcode}
        {dayOfWeek}
        {timeOfDay}
        {latitude}
        {longitude}
        {organization}
      </div>
    </>
  )
}