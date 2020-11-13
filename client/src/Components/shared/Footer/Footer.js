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
    borderRadius: "5px 5px 0px 0px",
    marginTop: 50,
    backgroundColor: "#ffa2be",
    position: 'sticky',
    fontSize: 15,
    bottom: 0,
    fontFamily: "Cabin Sketch",
    color: "#fdd989",
  },

  '@media (max-width: 415px)': {
    footer: {
      fontSize: 7,
      height: 30,
      paddingTop: 15,
      paddingBottom: 5,
    }
  }
})

export default useStyles;
