import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
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
    fontWeight: 400,
    textAlign: "justify",
  },
})

export default useStyles