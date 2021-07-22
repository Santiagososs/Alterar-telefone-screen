import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  ContainerPopup: {
    position: "absolute",
    width: "100%",
    height: "212px",
    bottom: 0,
    zIndex: 10,
    background: "#323751",
    boxShadow: "0px -2px 2px rgba(0, 0, 0, 0.3)",
    borderRadius: "20px 20px 0px 0px",
  },

  title: {
    color: '#EFEFEF',
    marginTop: "12px",
    fontWeight: "bold",
    marginLeft:20
  },

  description: {
    color: '#EFEFEF',
    marginTop: "8px",
    fontWeight: 100,
    marginLeft:20,
    fontSize:12,
  },

  contentpassword: {
    display: 'flex',
    justifyContent:"center",
    alignItems:"center",
    marginTop:10,
  },

 
});