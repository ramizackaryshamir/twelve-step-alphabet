import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'

//import Layout from './shared/Layout/Layout.jsx'

const useStyles = createUseStyles({
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "auto",
    width: 600,
    height: 600,
    border: "10px solid black",
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

  formHeader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "auto",
  },
})
  
export default function ReviewForm({ rows, cols, value }) {
  
  const [content, setContent] = useState(value)

  const classes = useStyles()

  return (
    <>
      <div>
        <form className={classes.formHeader}>
          <input type="text" className={classes.title}></input>
          <input type="text" className={classes.title}></input>
          <p>
            <textarea
              className={classes.form}
              rows={rows}
              cols={cols}
              value={content}
            />
          </p>
        </form>
      </div>
    </>
  )
}