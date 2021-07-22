import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import {Button} from 'components/Button'
import OtpInput from 'react-otp-input';
import { Container, Typography, Box, Slide } from '@material-ui/core'
import { useStyles } from './ConfirmPopup.style'
import confirmicon from 'assets/images/icn-confirmar.svg'
import './ConfirmPopup.scss'
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux'



const ConfirmPopup: React.FC = () => {

  const styles = useStyles()

  const [inputValue, setInputValue] = React.useState("")
  
  
  
  const dispatch = useDispatch()
  
  return (
    
      <Container className={styles.ContainerPopup}>
        <Typography variant="h6" className={styles.title}>
          Digite sua senha
        </Typography>
        <Typography variant="subtitle1" className={styles.description}>
          Para autenticar a operação
        </Typography>
        
        <Box className={styles.contentpassword}>
          <OtpInput
            numInputs={4}
            value={inputValue}
            onChange={setInputValue}
            isInputSecure
            isInputNum
            className="InputContainer"
          />

          <Box className="closeButtonContainer">
            <Button palette="secondary"
              size="medium"
              startIcon={<CloseIcon fontSize="large" color="primary" />}
              onClick={() => dispatch({type:"HIDDEN"}) }
            >
              Fechar
            </Button>
            </Box>
        </Box>
        
        <div className="alignCenterButton">
          <Box>
            <Button palette="secondary"
              size="medium"
              startIcon={<img src={confirmicon} height={23} width={23} className="iconeConfirm" alt="Icone confirm"/>}
              onClick={() => {
                dispatch({type: "SHOWBOX"})
                dispatch({type:"HIDDEN"})
              }}
            >
              Confirmar
            </Button>
          </Box>
        </div>
      </Container>
 
  )
}
export { ConfirmPopup }

