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
    marginTop: -80,
    marginBottom: 50,
  },

  postReviewBttn: {
    outline: 'none',
    backgroundColor: '#F2DABD',
    marginTop: 10,
    padding: 10,
    fontFamily: "Amatic SC",
    fontWeight: 900,
    border: '3px solid #ffa2be',
    borderRadius: 5
  },


  // MEDIAQUERIES //
  '@media (max-height: 668px)': {
    meetingCard: {
      marginTop: 10,
      marginBottom: 10,
    },

    postReviewBttn: {
      fontSize: 8,
      height: 20,
      marginTop: 10,
      marginBottom: 10,
      fontFamily: "Amatic SC",
      fontWeight: 700,
      border: '3px solid #ffa2be',
      borderRadius: 3
    },

    mapCard: {
      margtinTop: 10,
      height: 50
    }
  },

  //iPhone 6/7/8 Plus
  '@media (min-width: 410px) and (max-height: 846px)': {
    meetingCard: {
      height: 220,
      marginTop: 10,
    },

    mapCard: {
      margtinTop: 20,
      height: 30,

    }
  },

  // ALLGOOD 
  // iPhone X
  '@media (max-width: 420px)': {
    meetingCard: {
      marginTop: 20,
      padding: "10px 30px 50px 30px",
    },

    postReviewBttn: {
      fontSize: 10,
      height: 30,
      marginTop: 10,
      marginBottom: 10,
      paddingTop: 1,
      paddingRight: 5,
      paddingBottom: 1,
      paddingLeft: 5,
      fontFamily: "Amatic SC",
      fontWeight: 700,
      border: '3px solid #ffa2be',
      borderRadius: 3
    },

    mapCard: {
      height: 200,
    }
  },

  // ALLGOOD
  // iPad
  '@media (min-width: 768px) and (max-height: 1024px)': {
    meetingCard: {
      marginTop: 55,
      marginRight: 0,
      marginBottom: 10,
      marginLeft: 0

    },
  },

  // ALLGOOD
  // iPad Pro 
  '@media (min-width: 1024px)': {
    meetingCard: {
      marginTop: 250,
    },
  }
})

export default useStyles