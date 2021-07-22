import React from 'react'
import {useStyles} from './Header.style'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import logofit from "assets/images/logofit.svg"
import { Button } from "components/Button";
import { Close } from "@material-ui/icons";
import logocancel from "assets/images/Shape.svg"



export const Header : React.FC = () => { 
    const styles = useStyles();


    const onCancelButtonClick = () => {
      alert("Cancelado")
    };


    return(
        <AppBar position="static" >
        <Toolbar className={styles.barstyle}>
        <Box>
          <img className={styles.imglogofit} src={logofit} alt="logo" />
        </Box>
             <Button palette="secondary" size="small" onClick={onCancelButtonClick}><img className={styles.cancelimg} src={logocancel} alt="logo" />Cancelar</Button>
        </Toolbar>
        
      </AppBar>
    )
        

    
}