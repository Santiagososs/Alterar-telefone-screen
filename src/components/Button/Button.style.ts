import { makeStyles, Theme } from "@material-ui/core";
import { colors, textColors } from "config/theme";

export interface ButtonStylesProps {
  variant?: "outlined" | "contained";
  size?: "small" | "medium" | "large";
  palette?: "primary" | "secondary";
}

export const useStyles = makeStyles<Theme, ButtonStylesProps, "button">({
  button: {
    height: 36,
    fontSize: 12,
    hover:"none",
    alignItems:"center",
    alignContent:"center",
    backgroundColor: ({ palette, variant }) => {
      if (variant === "outlined") return "transparent";

      return palette === "primary" ? colors.primary.main : "white";
    },
    color: ({ palette, variant }) => {
      if (variant === "outlined") return textColors.primary;

      return palette === "primary" ? "white" : textColors.primary;
    },
    borderRadius: 4,

    "&.MuiButton-contained": {
      border: "0.5px solid transparent",
      hover:"none",
    },

    "&.MuiButton-outlined": {
      hover:"none",
      border: ({ palette }) =>
        `0.5px solid ${
          palette === "primary" ? colors.primary.main : colors.secondary
        }`,
    },

    "& .MuiButton-label": {
      textTransform: "none",
      textAlign: "center",
      hover:"none",
      
    },

    "&.MuiButton-sizeSmall": {
      fontSize: 12,
      height: 26,
      hover:"none",
    },
    "& .MuiButton-iconSizeSmall": {
      "& > *:first-child, & > *:last-child": {
        fontSize:"large",
        hover:"none",
      },
    },

    "&.MuiButton-sizeLarge": {
      minWidth: 120,
      fontSize: 12,
      height: 40,
      hover:"none",
    },
  },
});
