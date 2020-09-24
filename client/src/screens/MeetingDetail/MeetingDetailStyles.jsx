import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  body: {
    display: "flex",
    flexDirection: "column",
  },

  meetingCard: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 100px 0px 100px",
    backgroundColor: "FFD1DC",
  },

  reviewCard: {
    fontFamily: "Rubik",
    fontWeight: 400,
    textAlign: "justify",
    marginBottom: 1,
    marginTop: 3,
    border: '5px solid black"',
    backgroundColor: "FFD1DC",
  },
})

export default useStyles