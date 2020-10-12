import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  footer: {
      outline: "none",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      height: 60,
      paddingTop: 15,
      borderTop: "10px solid #F2DABD",
      borderRadius: 5,
      marginTop: 5,
      backgroundColor: "#FFD1DC",
      position: 'relative',
      fontSize: 15,
      fontFamily: "Cabin Sketch",
      color: "#F2DABD",
    }
  })

export default useStyles;
  