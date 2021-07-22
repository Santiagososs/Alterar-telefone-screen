import React from "react";
import { Button as MuiButton } from "@material-ui/core";
import { ButtonStylesProps, useStyles } from "./Button.style";

interface ButtonProps extends ButtonStylesProps {
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  id?: string;
  
}

export const Button: React.FC<ButtonProps> = ({
  disabled,
  startIcon,
  endIcon,
  onClick,
  size,
  variant = "contained",
  palette = "primary",
  children,
  id,
 
}) => {
  const styles = useStyles({ size, palette, variant });

  return (
    <MuiButton
      variant={variant}
      color={palette}
      size={size}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      className={`${styles.button} buttonpadding` }
      onClick={onClick} 
      id={id}
    >
      {children}
    </MuiButton>
  );
};
