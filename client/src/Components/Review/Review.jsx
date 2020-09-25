import React from "react"
import { useParams } from 'react-router-dom'
import useStyles from "./ReviewStyles.jsx"

export default function Review( reviewDetails ) {
  const {
    title,
    description,
    score,
    userName
  } = reviewDetails

  const { id } = useParams()

  const classes = useStyles()

  return (
    <>
      <div className={classes.reviewCard}>
        <div className={classes.reviewCardCenter}>
          <p className={classes.elementTitle}>{title}</p>
          <p className={classes.elementCenter}>{description}</p>
        </div>

        <div className={classes.reviewCardRight}>
          <p className={classes.elementRight}>{score}</p>
          <p className={classes.elementRight}>{userName}</p>
        </div>
        <div className={classes.buttons}>
          <button
            onClick={(e) => {
              e.preventDefault()
              console.log("onClick Delete button: Review.jsx 34")
            }}
            alt="delete-button"
            className={classes.button}
          >
            Delete
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              console.log("onClick Edit button: Review.jsx 44")
            }}
            alt="edit-button"
            className={classes.button}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  )
}
