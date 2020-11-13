import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({

  reviewCard: {
    outline: "none",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: 1020,
    paddingBottom: 10,
    paddingTop: 10,
    margin: "0 auto",
    border: "3px solid #F2DABD",
    borderRadius: 10,
    backgroundColor: "#FFD1DC",
  },

  reviewCardCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "justify",
    textJustify: "inter-word",
    fontSize: 15,
    padding: 10,
    margin: "0px auto 0px 100px",
  },

  reviewCardRight: {
    marginRight: 40,
    marginLeft: 40,
    fontFamily: "Rubik",
    fontWeight: 500,
  },

  elementCenter: {
    fontFamily: "Rubik",
    fontWeight: 400,
    textAlign: "justify",
    marginBottom: 1,
    marginTop: 3,
  },

  elementTitle: {
    fontFamily: "Amatic SC",
    fontSize: 30,
    fontWeight: 700,
    textAlign: "justify",
    marginBottom: 3,
    marginTop: 3,
  },

  elementRight: {
    textAlign: "right",
    marginTop: 20,
    marginBottom: -20,
    paddingBottom: 10,
  },

  button: {
    outline: "none",
    fontFamily: "Bungee",
    color: "#000000",
    width: 100,
    height: 50,
    border: "1px solid #000000",
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "#F2DABD",
  },

  buttons: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    padding: 10
  }
})

export default useStyles
