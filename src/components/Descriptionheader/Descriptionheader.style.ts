import { makeStyles } from "@material-ui/core";
import { textColors } from "config/theme";

export const useStyles = makeStyles({
 boxstyle:{
   backgroundColor:"#F9F9F9",
   margin:0,
   padding:0,
  
  },

  title: {
    fontWeight: 700,
    fontSize: 20,
    paddingTop:21,
    color:" rgba(50, 55, 81, 1)",
    fontFamily:"Roboto",
    marginLeft:16,
    backgroundColor:"#F9F9F9",
    
  },

  subtitle: {
    fontWeight: 500,
    fontSize: 15,
    lineHeight: "16px",
    marginTop:28,
    marginLeft:16,
    color:" rgba(50, 55, 81, 1)",
    fontFamily:"Roboto",
    backgroundColor:"#F9F9F9",

  },
  description: {
    marginTop:1,
    fontWeight: 500,
    fontSize: 15,
    lineHeight: "16px",
    color:" rgba(50, 55, 81, 1)",
    fontFamily:"Roboto",
    marginLeft:16,
    backgroundColor:"#F9F9F9",

  },
});