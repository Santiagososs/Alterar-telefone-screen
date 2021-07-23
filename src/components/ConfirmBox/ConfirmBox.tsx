import {useStyles} from './ConfirmBox.style'
import ConfirmAlertSVG from 'assets/images/ok.svg'
import {Slide} from '@material-ui/core'
import {useSelector, useDispatch} from 'react-redux'

export const ConfirmBox = () => {

  const style = useStyles()

  const dispatch = useDispatch()

  const confirmAlertAnimation = useSelector((state: any) => state.ShowConfirmBox)


  return (
    <Slide direction="left" in={confirmAlertAnimation} mountOnEnter unmountOnExit>
      <div className={style.confirmContainer} onClick={() => {  
        dispatch({type: "HIDDENBOX"})
        dispatch({type: "HIDDEN" })
        }}>
        <img src={ConfirmAlertSVG} className={style.imgConfirmAlert} alt="Senha Confirmada"/>
      </div>
    </Slide>
   
  )
}