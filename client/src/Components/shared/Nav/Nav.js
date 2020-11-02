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
  '@media (max-width: 375px)': {
    navBar: {
      width: 120,
      height: 35
    },
    navItem: {
      fontSize: 7,
      color: "red"
    }
  }
})

export default useStyles