import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles({
barstyle:{
    backgroundColor:"rgba(50, 55, 81, 1)",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    height:48,
    "& .MuiToolbar-root":{
        height:48,
      },
},
cancelimg:{
    marginRight:"5px",
    width:14,
    height:14,
},
imglogofit:{
   width:"67px",
   height:"21px",
},
cancelspan:{
    width:40,
    height:12,
    marginBottom:6.32,
    marginRight:10.8,
},

appbarname:{
  "& .MuiToolbar-root":{
    height:48,
  },
}

})