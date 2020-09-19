import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'

//import Layout from './shared/Layout/Layout.jsx'

const useStyles = createUseStyles({
  formHeader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "auto",
  },

  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "auto",
    width: 300,
    height: 30,
    border: "5px solid red",
  },

  userName: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "auto",
    width: 300,
    height: 30,
    border: "5px solid green",
  },

  score: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "auto",
    width: 50,
    height: 30,
    border: "5px solid blue",
  },

  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "auto",
    width: 600,
    height: 600,
    border: "10px solid black",
  },
})
  
export default function ReviewForm({ rows, cols, userName, title, description }) {
  
  const [newTitle, setNewTitle] = useState("")
  const [user, setUser] = useState("")
  const [content, setContent] = useState("")
  const [scoreValue, setScoreValue] = useState(null)

  const handleNewTitle = (e) => {
    const { value } = e.target
    setNewTitle(value)
  }

  const handleUser = (e) => {
    const { value } = e.target
    setUser(value)
  }

  const handleScore = (e) => {
    const { value } = e.target
    setScoreValue(value)
  }

  const handleContent = (e) => {
    const { value } = e.target
    setContent(value)
  }

  const classes = useStyles()

  return (
    <>
      <div>
        <form className={classes.formHeader}>
          <label>
            <input
              type="text"
              className={classes.title}
              value={newTitle}
              onChange={handleNewTitle}
            >
              {title}
            </input>
            <input
              type="text"
              className={classes.userName}
              value={user}
              onChange={handleUser}
            >
              {userName}
            </input>
            <input
              type="number"
              min="0"
              max="5"
              className={classes.score}
              value={scoreValue}
              onChange={handleScore}
            ></input>
            <p>
              <textarea
                rows={rows}
                cols={cols}
                className={classes.content}
                value={content}
                onChange={handleContent}
              >
                {description}
              </textarea>
            </p>
          </label>
        </form>
      </div>
    </>
  )
}