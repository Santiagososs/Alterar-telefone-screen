import {useStyles} from './ConfirmBox.style'
import ConfirmAlertSVG from 'assets/images/ok.svg'

import {useSelector, useDispatch} from 'react-redux'

export const ConfirmBox = () => {

  const style = useStyles()

  const dispatch = useDispatch()


  return (
    
      <div className={style.confirmContainer} onClick={() => {  
        dispatch({type: "HIDDENBOX"})
        dispatch({type: "HIDDEN" })
        }}>
        <img src={ConfirmAlertSVG} className={style.imgConfirmAlert} alt="Senha Confirmada"/>
      </div>
   
  )
}