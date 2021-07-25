import React from "react";
import { Box } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { Button } from "components/Button";
import { useStyles } from "./Footerbutton.style";
import "./Footerbutton.scss"
import { useDispatch } from 'react-redux'
import arrownext from "assets/images/NextArrow.svg"
import arrowback from "assets/images/BackArrow.svg"


interface ProcessPageFooterProps {
  primaryButton?: React.ReactNode;
}

export const Footerbutton: React.FC<ProcessPageFooterProps> = ({
  primaryButton,
}) => {
  const dispatch = useDispatch()
  const styles = useStyles();

  const onPreviousButtonClick = () => console.log("nada");

  return (
    <Box className={styles.buttonsWrapper}>
      <Button
        palette="secondary"
        startIcon={<img className={styles.nextlogo} src={arrowback} alt="logo" />}
        onClick={onPreviousButtonClick} 
      >
        Voltar
      </Button>
      <Button
        palette="primary"
        endIcon={<img className={styles.nextlogo} src={arrownext} alt="logo" />}
        onClick={()=> dispatch({type:"SHOW"})}           
      >
        Próximo
      </Button>
      {primaryButton}
    </Box>
  );
};
