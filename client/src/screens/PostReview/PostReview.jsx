import React, { useState, useEffect } from 'react'
import Layout from '../../Components/shared/Layout/Layout.jsx'
import ReviewForm from '../../Components/ReviewForm.jsx'
import { postReview } from '../../services/meetings.js'


//PostReview component form:
//Keep track of state for an input field
//Update the value on change
//Make the field value available to the submit handler
export default function PostReview() {
  
  return (
    <>
      <Layout>
        <div>
          <ReviewForm
            rows="35"
            cols="85" />
        </div>
      </Layout>
    </>
  )
}