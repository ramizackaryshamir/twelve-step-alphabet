import { createUseStyles } from "react-jss"
const useStyles = createUseStyles({

  mapContainer: {
    display: "flex",
    flexDirection: "row",
    maxWidth: '100%',
    height: '340px',
    marginTop: 50,
    marginRight: 100,
    marginBottom: 50,
    marginLeft: 100,
    border: '5px solid #FFD1DC'
  },

  marker: {
    backgroundColor: '#FFD1D',
    backgroundSize: 'cover',
    width: 50,
    height: 50,
    borderRadius: '50%',
    cursor: 'pointer'
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