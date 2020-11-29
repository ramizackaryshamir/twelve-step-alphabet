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

  '@media (max-width: 415px)': {
    meetingCard: {
      padding: "10px 30px 50px 30px",
      marginTop: 40,
    },

    mapCard: {
      height: 200,
    }
  },

  '@media (max-height: 846px)': {
    meetingCard: {
      height: 220,
      marginTop: 10,
    },

    mapCard: {
      margtinTop: 20,
      height: 300,
      
    }
  }

})

export default useStyles