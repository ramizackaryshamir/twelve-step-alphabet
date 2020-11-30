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

  // MEDIAQUERIES //

  // iPhone X
  '@media (max-width: 415px)': {
    meetingCard: {
      margin: "5px 12px 5px 10px",
    }
  },

  //iPad
  '@media (min-width: 768px) and (max-height: 1024px)': {
    meetingCard: {
      margin: "7px 7px 7px 7px",
    },
  },
})

export default useStyles
