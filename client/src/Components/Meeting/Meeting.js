import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  link: {
    outline: "none",
    textDecoration: "none",
    color: "black",
  },

  meetingCard: {
    outline: "none",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 20,
    paddingTop: 10,
    marginBottom: 5,
    marginTop: 5,
    border: "3px solid #ffa2be",
    borderRadius: 10,
    backgroundColor: "#fdd78a",
  },

  meetingCardLeft: {
    marginLeft: 20,
    width: 220,
    fontFamily: "Rubik",
    fontWeight: 500,
  },

  meetingCardCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "justify",
    textJustify: "inter-word",
    width: 400,
    fontSize: 15,
    padding: 10,
    margin: "0px auto 0px 100px",
  },

  meetingCardRight: {
    marginRight: 20,
    marginLeft: 20,
    fontFamily: "Rubik",
    fontWeight: 500,
  },

  elementLeft: {
    marginTop: 20,
    marginBottom: -20,
    paddingBottom: 10,
  },

  elementCenter: {
    fontFamily: "Rubik",
    fontWeight: 400,
    textAlign: "justify",
    marginBottom: 1,
    marginTop: 3,
  },

  elementName: {
    fontFamily: "Amatic SC",
    fontSize: 30,
    fontWeight: 700,
    textAlign: "justify",
    marginBottom: 3,
    marginTop: 3,
  },

  elementRight: {
    textAlign: "right",
    marginTop: 20,
    marginBottom: -20,
    paddingBottom: 10,
  },
  //
  //
  //
  //media queries
  '@media (max-width: 415px)': {
    meetingCard: {
      outline: "none",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: '100%',
      paddingBottom: 5,
      paddingTop: 5,
      marginBottom: 5,
      marginTop: 5,
      border: "3px solid #ffa2be",
      borderRadius: 10,
      backgroundColor: "#fdd78a",
    },

    meetingCardLeft: {
      marginLeft: 10,
      width: 120,
      fontSize: 6,
      fontFamily: "Rubik",
      fontWeight: 400,
    },

    meetingCardCenter: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "justify",
      textJustify: "inter-word",
      width: 180,
      fontSize: 8,
      padding: 5,
      margin: "0px 0px 0px 10px",
    },

    meetingCardRight: {
      marginRight: 20,
      marginLeft: 20,
      fontSize: 6,
      fontFamily: "Rubik",
      fontWeight: 400,
    },

    elementLeft: {
      marginTop: 10,
      marginBottom: -20,
      paddingBottom: 10,
    },

    elementCenter: {
      fontFamily: "Rubik",
      fontWeight: 400,
      textAlign: "justify",
      marginBottom: 0,
      marginTop: 0,
    },

    elementName: {
      fontFamily: "Amatic SC",
      fontSize: 8,
      fontWeight: 700,
      textAlign: "justify",
      marginBottom: 0,
      marginTop: 0,
    },

    elementRight: {
      textAlign: "right",
      marginTop: 10,
      marginBottom: -10,
      paddingBottom: 0,
    },
  }
})

export default useStyles