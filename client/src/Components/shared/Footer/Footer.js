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
      borderTop: "10px solid #fdd989",
      borderRadius: 5,
      marginTop: 50,
      backgroundColor: "#ffa2be",
      position: 'sticky',
      fontSize: 15,
      bottom: 0,
      fontFamily: "Cabin Sketch",
      color: "#fdd989",
    }
  })

export default useStyles;
  