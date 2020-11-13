import React from "react"
import { Link, useParams } from "react-router-dom"
import useStyles from "./Review.js"

const Review = (reviewDetails) => {
  const {
    title,
    description,
    score,
    userName,
    reviewId,
    handleDelete,
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
        {/* Delete and Edit Buttons still need functionality 9-26-2020 */}
        <div className={classes.buttons}>
          <button
            onClick={() => {
              handleDelete(parseInt(id), reviewId)
            }}
            alt="delete-button"
            className={classes.button}
          >
            Delete
          </button>
          <Link to={`/meetings/${id}/reviews/${reviewId}/edit`}>
            <button alt="edit-button" className={classes.button}>
              Edit
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Review
