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
    color: "#191919",
  },

  '@media (max-width: 505px)': {
    navBar: {
      width: '100%',
      height: 35,
      justifyContent: "space-evenly"
    },

    navItem: {
      outline: "none",
      display: "flex",
      flexDirection: "row",
      fontSize: 15,
      color: "#191919"
    }
  }
})

export default useStyles