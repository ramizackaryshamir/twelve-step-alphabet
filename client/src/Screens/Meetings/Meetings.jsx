import React from 'react'

//import Layout from '../../Components/shared/Layout/Layout.jsx'
import Meeting from '../Meeting/Meeting.jsx'

import './Meetings.css'

export default function Meetings() {

  return (
    <>
      <div className="meeting-card">
        <Meeting
          name="Al-Anon"
          address1="First Presbyterian Church - ISELIN AFG, Step meeting, Families, Friends, and Observers Welcome, Beginners , Group ID 9199"
          address2="1295 Oak Tree Rd"
          city="Iselin"
          state="NJ"
          zipcode="90210"
          dayOfWeek="Wednesday"
          timeOfDay="18:30"
          latitude="40.57331"
          longitude="-74.32277"
          organization="AL"
        />
      </div>
      <div className="meeting-card">
        <Meeting
          name="Woodbridge Time Takes Time"
          address1="Trinity Episcopal Church Red Sexton House"
          address2="69 Trinity Lane"
          city="Woodbridge"
          state="NJ"
          zipcode="90210"
          dayOfWeek="Friday"
          timeOfDay="12:15"
          latitude="40.56301"
          longitude="-74.27074"
          organization="AA"
        />
      </div>
      <div className="meeting-card">
        <Meeting
          name="Drink and Die"
          address1="Greenpoint Reformed Church"
          address2="136 Milton St"
          city="Brooklyn"
          state="NY"
          zipcode="90210"
          dayOfWeek="Sunday"
          timeOfDay="14:00"
          latitude="40.72918"
          longitude="-73.95496"
          organization="AA"
        />
      </div>
    </>
  )
}