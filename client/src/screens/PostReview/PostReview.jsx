import React, { useState, useEffect } from 'react'
import Layout from '../../Components/shared/Layout/Layout.jsx'
import ReviewForm from '../../Components/ReviewForm.jsx'
import { postReview } from '../../services/meetings.js'

export default function PostReview() {
  
  return (
    <>
      <Layout>
        <div>
          <ReviewForm
            rows="35"
            cols="85"
            buttonType='Submit'
          />
        </div>
      </Layout>
    </>
  )
}