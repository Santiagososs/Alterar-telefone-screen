import React from 'react'
import {useStyles} from './Inputdata.style'
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import "./Inputdata.scss"
import { maskPhone } from 'mask/maskPhone'
import { useMask } from 'hooks/useMask'
import Slider from '@material-ui/core/Slider';


export const Inputdata : React.FC = () => { 
    const styles = useStyles();

    const [phoneInput, setPhoneInput] = useMask(maskPhone)

    const onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) =>
     setPhoneInput(event.target.value);

    return(      
         
         <div className={styles.divcontent}>
           <span className={styles.spanstyle}>Número de telefone</span>
           <TextField  value={phoneInput} onChange={onPhoneChange} className={styles.stylinput} id="style-input" placeholder="Digite apenas números" variant="outlined"/>
            
         </div>
    )
        
}