import React from "react";
import { Box, Button } from "@material-ui/core";
import { useStyles } from "./ButtonWithFloatingIcon.style";

interface ButtonWithFloatingIconProps {
  icon: string;
  iconAlt?: string;
  size?: "small" | "medium" | "large";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const ButtonWithFloatingIcon: React.FC<ButtonWithFloatingIconProps> = ({
  icon,
  iconAlt,
  size = "medium",
  onClick,
  children,
}) => {
  const styles = useStyles({ size });

  return (
    <Button
      variant="contained"
      size={size}
      className={styles.button}
      onClick={onClick}
    >
      <Box className={styles.icon}>
        <img src={icon} alt={iconAlt} />
      </Box>
      {children}
    </Button>
  );
};
