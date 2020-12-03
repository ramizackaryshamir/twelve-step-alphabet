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
    lineHeight: '1.6',
    paddingBottom: 20,
    paddingTop: 10,
    marginBottom: 5,
    marginTop: 5,
    border: "3px solid #ffa2be",
    borderRadius: 10,
    backgroundColor: "#fdd78a",
  },

  meetingCardLeft: {
    width: 220,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    width: 220,
    fontSize: 16,
    fontFamily: "Rubik",
    fontWeight: 700,
  },

  meetingCardCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "justify",
    textJustify: "inter-character",
    width: 400,
    fontSize: 15,
    padding: 10,
    margin: "0px auto 0px 100px",
  },

  meetingCardRight: {
    width: 220,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 30,
    fontSize: 16,
    fontFamily: "Rubik",
    fontWeight: 700,
  },


  elementOrganization: {
    marginTop: 20,
    fontSize: 16,
    marginBottom: -20,
    paddingBottom: 10,
  },

  elementLeft: {
    marginTop: 20,
    fontSize: 16,
    marginBottom: -20,
    paddingBottom: 10,
  },
  //
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
  //

  elementRight: {
    textAlign: "right",
    fontSize: 16,
    marginTop: 20,
    marginBottom: -20,
    paddingBottom: 10,
  },


  // MEDIAQUERIES //

  // iPhone X
  '@media (max-width: 505px)': {
    meetingCard: {
      outline: "none",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: '100%',
      height: 100,
      lineHeight: '1.6',
      paddingBottom: 15,
      paddingTop: 15,
      marginBottom: 10,
      marginTop: 5,
      border: "3px solid #ffa2be",
      borderRadius: 10,
      backgroundColor: "#fdd78a",
    },

    elementOrganization: {
      marginTop: 20,
      marginBottom: -20,
      fontSize: 8,
      paddingBottom: 0,
    },

    elementLeft: {
      marginTop: 20,
      marginBottom: -20,
      fontSize: 7,
      paddingBottom: 0,
    },

    meetingCardLeft: {
      marginTop: 10,
      marginLeft: 20,
      width: 100,
      fontWeight: 300,
      fontSize: 7,
      fontFamily: "Rubik",
    },

    elementName: {
      fontFamily: "Amatic SC",
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 'normal',
      textAlign: "left",
      marginBottom: 0,
      marginTop: 5,
    },

    elementCenter: {
      fontFamily: "Rubik",
      fontWeight: 300,
      textAlign: "justify",
      fontSize: 8,
      hypens: 'auto',
      textJustify: "inter-character",
      arginTop: 3,
      marginBottom: 0,
    },

    meetingCardCenter: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "no-wrap",
      justifyContent: "center",
      textAlign: "justify",
      hypens: 'auto',
      textJustify: "inter-character",
      // justifyContent: "center",
      // textAlign: "justify",
      width: 200,
      fontSize: 15,
      padding: 5,
      margin: "0px 10px 0px 5px",
    },

    elementRight: {
      textAlign: "right",
      fontSize: 8,
      marginTop: 20,
      marginBottom: -20,
      paddingBottom: 0,
    },

    meetingCardRight: {
      width: 34,
      marginTop: 10,
      marginRight: 30,
      marginBottom: 0,
      marginLeft: 15,
      fontSize: 7,
      fontFamily: "Rubik",
      fontWeight: 300,
    },
  },


  // '@media (max-height: 846px)': {
  //   meetingCard: {
  //     outline: "none",
  //     display: "flex",
  //     flexDirection: "row",
  //     justifyContent: "center",
  //     width: '100%',
  //     height: 90,
  //     paddingBottom: 15,
  //     paddingTop: 15,
  //     marginBottom: 5,
  //     marginTop: 5,
  //     border: "3px solid #ffa2be",
  //     borderRadius: 10,
  //     backgroundColor: "#fdd78a",
  //   },

  //   elementLeft: {
  //     marginTop: 30,
  //     marginBottom: -30,
  //     paddingBottom: 0,
  //   },

  //   meetingCardLeft: {
  //     marginLeft: 10,
  //     width: 120,
  //     fontSize: 8,
  //     fontFamily: "Rubik",
  //     fontWeight: 700,
  //   },

  //   elementName: {
  //     fontFamily: "Amatic SC",
  //     fontSize: 15,
  //     fontWeight: 700,
  //     textAlign: "left",
  //     marginBottom: 5,
  //     marginTop: 3,
  //   },

  //   elementCenter: {
  //     fontFamily: "Rubik",
  //     fontWeight: 400,
  //     textAlign: "justify",
  //     fontSize: 8,
  //     wordSpacing: 'normal',
  //     // textJustify: "inter-word",
  //     marginBottom: 3,
  //     marginTop: 0,
  //   },

  //   meetingCardCenter: {
  //     display: "flex",
  //     flexDirection: "column",
  //     flexWrap: "no-wrap",
  //     // justifyContent: "center",
  //     // textAlign: "justify",

  //     width: 180,
  //     fontSize: 7,
  //     padding: 5,
  //     margin: "0px auto 0px 10px",
  //   },

  //   elementRight: {
  //     textAlign: "right",
  //     marginTop: 30,
  //     marginBottom: -30,
  //     paddingBottom: 0,
  //   }
  // },

  // meetingCardRight: {
  //   marginRight: 20,
  //   marginLeft: 20,
  //   fontSize: 8,
  //   fontFamily: "Rubik",
  //   fontWeight: 700,
  // },
})

export default useStyles