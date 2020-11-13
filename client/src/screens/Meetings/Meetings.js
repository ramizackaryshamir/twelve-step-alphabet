import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({

  body: {
    backgroundColor: "#79e1fd",
  },

  //css for size and placement of meeting card at /meetings
  meetingCard: {
    display: "flex",
    flexDirection: "column",
    margin: "0px 100px 0px 100px",
  },

  '@media (max-width: 415px)': {
    meetingCard: {
      margin: "5px 10px 5px 10px",
    }
  }
})

export default useStyles
