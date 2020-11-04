import {createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  body: {
    backgroundColor: "#79e1fd",
  },

  meetingCard: {
    display: "flex",
    flexDirection: "column",
    margin: "0px 100px 0px 100px",
  },
  '@media (max-width: 415px)': {
    margin: "0px",
  }
})

export default useStyles
