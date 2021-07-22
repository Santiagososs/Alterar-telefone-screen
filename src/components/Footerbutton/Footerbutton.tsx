import React from "react";
import { Box } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { Button } from "components/Button";
import { useStyles } from "./Footerbutton.style";
import "./Footerbutton.scss"
import { useDispatch } from 'react-redux'


interface ProcessPageFooterProps {
  primaryButton?: React.ReactNode;
}

export const Footerbutton: React.FC<ProcessPageFooterProps> = ({
  primaryButton,
}) => {
  const dispatch = useDispatch()
  const styles = useStyles();

  const onPreviousButtonClick = () => alert("Voltou");

  return (
    <Box className={styles.buttonsWrapper}>
      <Button
        palette="secondary"
        startIcon={<KeyboardArrowLeft color="primary" />}
        onClick={onPreviousButtonClick} 
      >
        Voltar
      </Button>
      <Button
        palette="primary"
        endIcon={<KeyboardArrowRight color="secondary" />}
        onClick={()=> dispatch({type:"SHOW"})}           
      >
        Próximo
      </Button>
      {primaryButton}
    </Box>
  );
};
