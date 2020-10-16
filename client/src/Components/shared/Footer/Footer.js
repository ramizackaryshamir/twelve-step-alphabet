import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  footer: {
      outline: "none",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      height: 50,
      paddingTop: 25,
      paddingBottom: 10,   
      borderTop: "10px solid #F2DABD",
      borderRadius: 5,
      marginTop: 50,
      backgroundColor: "#FFD1DC",
      position: 'sticky',
      fontSize: 15,
      bottom: 0,
      fontFamily: "Cabin Sketch",
      color: "#F2DABD",
    }
  })

export default useStyles;
  