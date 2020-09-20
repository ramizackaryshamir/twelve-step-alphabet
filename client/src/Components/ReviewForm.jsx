import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  formHeader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "auto",
  },

  newTitle: {
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "auto",
    width: 300,
    height: 30,
    border: "5px solid red",
  },

  newUserName: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "auto",
    width: 300,
    height: 30,
    border: "5px solid green",
  },

  newScore: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "auto",
    width: 50,
    height: 30,
    border: "5px solid blue",
  },

  newDescription: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "auto",
    width: 600,
    height: 600,
    border: "10px solid black",
  },

  buttonSubmit: {
    fontFamily: "Bungee",
    width: 100,
    height: 40,
    borderRadius: 200,
  },
})
  
export default function ReviewForm({ rows, cols, userName, title,  description }) {
  
  const [formData, setFormData] = useState({
    newTitle: '',
    newUserName: '',
    newDescription: '',
    scoreValue: ''
  });

  const { newTitle, newUserName, newDescription, newScore } = formData
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const classes = useStyles()

  return (
    <>
      <div className={classes.form}>
        <form>
          {/*onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(formData);*/}
          <label>
            <input
              type="text"
              placeholder="Review Title"
              className={classes.newTitle}
              name="newTitle"
              value={newTitle}
              onChange={handleChange}
            >
              {title}
            </input>
            <input
              type="text"
              placeholder="Reviewed By"
              className={classes.newUserName}
              name="newUserName"
              value={newUserName}
              onChange={handleChange}
            >
              {userName}
            </input>
            <input
              type="number"
              min="0"
              max="5"
              className={classes.newScore}
              name="newScore"
              value={newScore}
              onChange={handleChange}
            ></input>
            <p>
              <textarea
                rows={rows}
                cols={cols}
                className={classes.newDescription}
                name="newDescription"
                value={newDescription}
                onChange={handleChange}
              >
                {description}
              </textarea>
            </p>
          </label>
          <button
            alt="submit-button"
            className={classes.buttonSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

/*const [newTitle, setNewTitle] = useState("")
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
  }*/