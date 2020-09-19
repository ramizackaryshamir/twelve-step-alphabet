import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'

import Layout from './shared/Layout/Layout.jsx'

const useStyles = createUseStyles({
  review: {
    display: "flex",
    flexDirection: "column",
    width: 600,
    height: 600,
    border: "10px solid black",
  },
})
  
export default function ReviewForm({ rows, cols, value }) {
  
  const [content, setContent] = useState(value)

  const classes = useStyles()

  return (
    <>
      <Layout>
        <div>
          <p>
            <textarea
              className={classes.review}
              rows={rows}
              cols={cols}
              value={content}
            />
          </p>
        </div>
      </Layout>
    </>
  )
}