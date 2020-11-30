import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({

  body: {
    backgroundColor: "#FFD1DC",
  },

  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: 1080,
  },

  formHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    width: 600,
    margin: "auto",
  },

  title: {
    outline: "none",
    fontFamily: "Rubik",
    fontWeight: 800,
    width: 300,
    height: 30,
    backgroundColor: "#F2DBAE",
    borderRadius: 5,
    padding: 10,
    border: "3px solid #BAD0D9",
    marginBottom: 10,
  },

  userName: {
    outline: "none",
    width: 300,
    height: 30,
    fontFamily: "Rubik",
    fontWeight: 800,
    backgroundColor: "#F2DBAE",
    padding: 10,
    borderRadius: 5,
    border: "3px solid #BAD0D9",
  },

  newScore: {
    outline: "none",
    width: 50,
    height: 30,
    backgroundColor: "#F2DBAE",
    borderRadius: 5,
    border: "3px solid #BAD0D9",
    marginTop: 20,
    marginBottom: 10,
  },

  description: {
    outline: "none",
    fontFamily: "Rubik",
    fontWeight: 800,
    width: 600,
    height: 600,
    backgroundColor: "#F2DBAE",
    padding: 10,
    margin: "auto",
    borderRadius: 15,
    border: "10px solid #BAD0D9",
  },

  button: {
    outline: "none",
    fontFamily: "Bungee",
    color: "#000000",
    width: 140,
    height: 50,
    border: "1px solid #000000",
    borderRadius: 10,
    backgroundColor: "#F2DABD",
  },

  buttons: {
    display: "flex",
    justifyContent: "space-around",
  },
})

export default useStyles