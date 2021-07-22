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



function App() {
const stateChange = useSelector((state:any)=> state.Confirmpop )

const stateChangeTwo = useSelector((state:any)=> state.ShowConfirmBox )



  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Pagecontainer>
        <ProcessPageLayout
        appBar={<Header/>}
        header={<Descriptionheader title={"Editar Telefone"} subtitle={"Seu telefone atual é:"} description={"(88) 9 99636505"}/>}
        main={ stateChangeTwo ? <ConfirmBox/> : <Inputdata/>}
        footer={stateChange ? <ConfirmPopup/> : <Footerbutton/>}       
        />      
        
        </Pagecontainer>  
      </ThemeProvider>
    </div>
  );
}

export default App;
