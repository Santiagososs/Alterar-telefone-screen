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
import logoclose from "assets/images/iconclose.svg"


const ConfirmPopup: React.FC = () => {

  const styles = useStyles()

  const [inputValue, setInputValue] = React.useState("")

  const handlePassword = (e: string) => {
    const regExp = /[0-9]/g;
    e = e.replaceAll(regExp, '*')
    setInputValue(e)
  }


  let statePopUp = useSelector((state: any) => state.animationState) as any
  
  const dispatch = useDispatch()
  
  const confirmPopUpAnimation = useSelector((state: any) => state.Confirmpop)

  return (
      
    <Slide direction="up" in={confirmPopUpAnimation} mountOnEnter unmountOnExit>
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
            onChange={(e: string) => handlePassword(e)} 
            isInputNum
            className="InputContainer"
          />

          <Box className="closeButtonContainer">
            <Button palette="secondary"
              size="small"
              startIcon={ <img className={styles.logoclosebtn} src={logoclose} alt="logo" />}
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
              //dispatch({type:"HIDDEN"})
            }}
            >
              <span className="style-confirm">
               Confirmar
               </span>
            </ButtonWithFloatingIcon>
          </Box>
        </div>
      </Container>
    </Slide>
  )
}
export { ConfirmPopup }

