import { createUseStyles } from "react-jss"
const useStyles = createUseStyles({


  mapContainer: {
    display: "flex",
    flexDirection: "column",
    position: 'absolute',
    border: '5px solid #FFD1DC',
    top: 300,
    bottom: 40,
    left: 100,
    right: 100
  },

  sidebar: {
    display: 'inline-block',
    position: 'absolute',
    top: 40,
    left: 40,
    margin: 12,
    backgroundColor: '#404040',
    color: '#ffffff',
    zIndex: '1!important',
    padding: 6
}
  // meetingCard: {
  //   display: "flex",
  //   flexDirection: "column",
  //   padding: "0px 100px 0px 100px",
  //   backgroundColor: "FFD1DC",
  // },

  // mapCard: {
  //   fontFamily: "Rubik",
  //   fontWeight: 400,
  //   textAlign: "justify",
  //   marginBottom: 1,
  //   marginTop: 3,
  //   border: '5px solid black"',
  //   backgroundColor: "FFD1DC",
  // },
})

export default useStyles;