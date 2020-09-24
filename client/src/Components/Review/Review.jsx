import React from "react"
import useStyles from "./ReviewStyles.jsx"

export default function Review(reviewDetails) {
  const {
    title,
    description,
    score,
    userName
  } = reviewDetails

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
      </div>
    </>
  )
}
