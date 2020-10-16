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
    color: "#F2DABD",
  },
})

export default useStyles