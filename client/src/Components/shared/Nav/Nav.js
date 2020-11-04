import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  navBar: {
    outline: "none",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    paddingBottom: 5,
    position: 'sticky',
    top: 0,
    width: 600,
    height: 65
  },
  navItem: {
    textDecoration: "none",
    outline: "none",
    fontSize: 30,
    fontFamily: "Cabin Sketch",
    marginBottom: 5,
    position: 'sticky',
    color: "#fdd989",
  },
  '@media (max-width: 415px)': {
    navBar: {
      width: 120,
      height: 25,
      justifyContent: "space-between"
    },
    navItem: {
      outline: "none",
      display: "flex",
      flexDirection: "row",
      fontSize: 8,
      color: "red"
    }
  }
})

export default useStyles