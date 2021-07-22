import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import {Button} from 'components/Button'
import OtpInput from 'react-otp-input';
import { Container, Typography, Box, Slide } from '@material-ui/core'
import { useStyles } from './ConfirmPopup.style'
import confirmicon from 'assets/images/icn-confirmar.svg'
import './ConfirmPopup.scss'
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux'
import { ButtonWithFloatingIcon } from 'components/ButtonWithFloatingIcon';


const ConfirmPopup: React.FC = () => {

  const styles = useStyles()

  const [inputValue, setInputValue] = React.useState("")
  
  let statePopUp = useSelector((state: any) => state.animationState) as any
  
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
              size="small"
              startIcon={<CloseIcon fontSize="large" color="primary" />}
              onClick={() => dispatch({type:"HIDDEN"}) }
            >
              Fechar
            </Button>
            </Box>
        </Box>
        
        <div className="alignCenterButton">
          <Box>
            <ButtonWithFloatingIcon size="medium" icon={confirmicon} 
            onClick={() => {
              dispatch({type: "SHOWBOX"})
              dispatch({type:"HIDDEN"})
            }}
            >
              <span className="style-confirm">
               Confirmar
               </span>
            </ButtonWithFloatingIcon>
          </Box>
        </div>
      </Container>
    
  )
}
export { ConfirmPopup }

