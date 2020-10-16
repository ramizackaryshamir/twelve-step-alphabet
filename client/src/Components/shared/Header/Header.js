import {createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  header: {
    outline: "none",
    display: "flex",
    flexDirection: "row",
    borderBottom: "10px solid #F2DABD",
    borderRadius: 5,
    backgroundColor: "#FFD1DC",
    position: 'sticky',
    top: 0,
  },
})

export default useStyles;