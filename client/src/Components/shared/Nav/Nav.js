import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  navBar: {
    outline: "none",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    paddingBottom: 5,
    width: 600,
    height: 60
  },
  navItem: {
    textDecoration: "none",
    outline: "none",
    fontSize: 30,
    fontFamily: "Cabin Sketch",
    marginBottom: 5,
    color: "#F2DABD",
  },
})

export default useStyles