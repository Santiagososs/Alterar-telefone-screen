import { Descriptionheader } from 'components/Descriptionheader';
import { Footerbutton } from 'components/Footerbutton';
import { Inputdata } from 'components/Input';
import { Pagecontainer } from 'components/Pagecontainer';
import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { ThemeProvider } from '@material-ui/core'
import { theme } from 'config/theme'
import { ProcessPageLayout } from 'components/ProcessPageLayout';
import OtpInput from 'react-otp-input';
import { ConfirmPopup } from 'components/ConfirmPopup';
import { useSelector } from 'react-redux'
import { ConfirmBox } from 'components/ConfirmBox';
import { useMask } from 'hooks/useMask'
import { maskPhone } from 'mask/maskPhone'




function App() {
const stateChange = useSelector((state:any)=> state.Confirmpop )

const stateChangeTwo = useSelector((state:any)=> state.ShowConfirmBox )
const [phoneInput, setPhoneInput] = useMask(maskPhone)



  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Pagecontainer>
        <ProcessPageLayout
        appBar={<Header/>}
        header={<Descriptionheader title={"Editar telefone"} subtitle={"Seu telefone atual é:"} description={"(85) 00000.00000"}/>}
        main={ stateChangeTwo ? <ConfirmBox/> : <Inputdata/>}
        footer={stateChange ? <ConfirmPopup /> : <Footerbutton/>}       
        />      
        
        </Pagecontainer>  
      </ThemeProvider>
    </div>
  );
}

export default App;
