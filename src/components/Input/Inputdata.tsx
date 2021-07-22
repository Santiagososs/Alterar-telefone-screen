import React from 'react'
import {useStyles} from './Inputdata.style'
import TextField from '@material-ui/core/TextField';


export const Inputdata : React.FC = () => { 
    const styles = useStyles();

    return(      
         
         <div className={styles.divcontent}>
           <span className={styles.spanstyle}>Número de telefone</span>
            <TextField  className={styles.stylinput} placeholder="Digite apenas números" id="outlined-basic"variant="outlined"/>
         </div>
    )
        

    
}