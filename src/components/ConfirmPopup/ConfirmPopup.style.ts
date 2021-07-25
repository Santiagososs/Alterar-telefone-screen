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
    fontWeight: 500,
    marginLeft:20,
    fontSize:16
  },

  description: {
    color: '#EFEFEF',
    marginTop: "12px",
    fontWeight: 300,
    marginLeft:20,
    fontSize:12,
    lineHeight:"14.06px",

  },

  contentpassword: {
    display: 'flex',
    justifyContent:"center",
    alignItems:"center",
    marginTop:16,
    marginLeft:25,
    caretColor:"transparent",
  
  },

  logoclosebtn:{
    
  }

});