import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  meeting: {
    display: "flex",
    flexDirection: "column",
    width: '100vw',
    height: '80vh',
  },

  meetingDetail: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "FFD1DC",
  },

  meetingCard: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 100px 0px 100px",
    marginTop: 50,
    backgroundColor: "FFD1DC",
  },

  mapCard: {
    outline: 'none',
    fontFamily: "Rubik",
    marginBottom: 10,
  },
  '@media (max-width: 415px)': {
    meetingCard: {
      padding: "20px 20px 20px 20px",
      marginTop: 40,
    }
  }
})

export default useStyles