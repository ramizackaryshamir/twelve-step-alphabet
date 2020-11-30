import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({

  header: {
    outline: "none",
    display: "flex",
    flexDirection: "row",
    borderBottom: "10px solid #fdd989",
    borderRadius: "0px 0px 5px 5px",
    backgroundColor: "#ffa2be",
    position: 'sticky',
    top: 0,
  },
})

export default useStyles;