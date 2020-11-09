import React, { useState, useEffect } from 'react'
import {useParams } from 'react-router-dom'
import useStyles from './ReviewForm.js' 
export default function ReviewForm({
  handleSubmit,
  allMeetings
}) {
  const [formData, setFormData] = useState({
    title: "",
    userName: "",
    description: "",
    score: "0",
  })

  const { id, reviewId } = useParams()

  const { title, userName, description, score } = formData
  
  useEffect(() => {
    if (reviewId) {
      let reviewData;
      allMeetings.forEach(meeting => {
        if (meeting.id === parseInt(id)) {
          reviewData = meeting.reviews.find(review => {
            return review.id === parseInt(reviewId)
          })
        }
      });
      const { title, userName, description, score } = reviewData;
      setFormData({ title, userName, description, score })
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const classes = useStyles()

  return (
    <>
      <div className={classes.body}>
        <div className={classes.form}>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit(formData, reviewId ? reviewId: id, id)
            }}
            alt="review-form"
          >
            <label>
              <div className={classes.formHeader}>
                <input
                  type="number" required
                  min="0"
                  max="5"
                  className={classes.newScore}
                  name="score"
                  value={score}
                  onChange={handleChange}
                ></input>
                <input
                  type="text" required
                  placeholder="Give your review a title."
                  className={classes.title}
                  name="title"
                  value={title}
                  onChange={handleChange}
                  alt="Give your review a title."
                />
                <input
                  type="text" required
                  placeholder="Tell people who you are."
                  className={classes.userName}
                  name="userName"
                  value={userName}
                  onChange={handleChange}
                  alt="Tell people who you are."
                />
              </div>
              <p>
                <textarea
                  placeholder="Tell people about your experience."
                  rows='10'
                  cols='10'
                  className={classes.description}
                  name="description"
                  value={description} required
                  onChange={handleChange}
                />
              </p>
            </label>
            <div className={classes.buttons}>
              <button
                alt="submit-button"
                className={classes.button}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}