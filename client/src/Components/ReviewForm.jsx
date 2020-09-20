import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'

import Layout from './shared/Layout/Layout.jsx'

const useStyles = createUseStyles({
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: 1080,
  },

  formHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    width: 600,
    margin: "auto",
  },

  newTitle: {
    outline: "none",
    fontFamily: "Rubik",
    fontWeight: 800,
    width: 300,
    height: 30,
    backgroundColor: "#F2DBAE",
    borderRadius: 5,
    padding: 10,
    border: "3px solid #BAD0D9",
    marginBottom: 10,
  },

  newUserName: {
    outline: "none",
    width: 300,
    height: 30,
    fontFamily: "Rubik",
    fontWeight: 800,
    backgroundColor: "#F2DBAE",
    padding: 10,
    borderRadius: 5,
    border: "3px solid #BAD0D9",
  },

  newScore: {
    outline: "none",
    width: 50,
    height: 30,
    backgroundColor: "#F2DBAE",
    borderRadius: 5,
    border: "3px solid #BAD0D9",
    marginTop: 20,
    marginBottom: 10,
  },

  newDescription: {
    outline: "none",
    fontFamily: "Rubik",
    fontWeight: 800,
    width: 600,
    height: 600,
    backgroundColor: "#F2DBAE",
    padding: 10,
    margin: "auto",
    borderRadius: 15,
    border: "10px solid #BAD0D9",
  },

  buttonSubmit: {
    outline: "none",
    fontFamily: "Bungee",
    width: 100,
    height: 40,
    border: "1px solid #F2DABD",
    borderRadius: 200,
    backgroundColor: "#F2DABD",
  },
})
  
export default function ReviewForm({
  rows,
  cols,
  userName,
  title,
  description,
  handleSubmit,
}) {
  const [formData, setFormData] = useState({
    newTitle: "",
    newUserName: "",
    newDescription: "",
    scoreValue: "",
  })

  const { newTitle, newUserName, newDescription, newScore } = formData

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
      <Layout>
        <div className={classes.form}>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit(formData)
            }}
            alt="review-form"
          >
            <label>
              <div className={classes.formHeader}>
                <input
                  type="number"
                  min="0"
                  max="5"
                  className={classes.newScore}
                  name="newScore"
                  value={newScore}
                  onChange={handleChange}
                ></input>
                <input
                  type="text"
                  placeholder="Give your review a title."
                  className={classes.newTitle}
                  name="newTitle"
                  value={newTitle}
                  onChange={handleChange}
                  alt="Give your review a title."
                >
                  {title}
                </input>
                <input
                  type="text"
                  placeholder="Tell people who you are."
                  className={classes.newUserName}
                  name="newUserName"
                  value={newUserName}
                  onChange={handleChange}
                  alt="Tell people who you are."
                >
                  {userName}
                </input>
              </div>
              <p>
                <textarea
                  placeholder="Tell people about your experience."
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
            <button alt="submit-button" className={classes.buttonSubmit}>
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  )
}