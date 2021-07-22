import { makeStyles } from "@material-ui/core";
import { theme } from "config/theme";

const padding = 16;

interface StylesProps {
  footerPosition?: "relative" | "fixed";
}

export const useStyles = makeStyles<typeof theme, StylesProps>({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  header: {
    padding: 0,
  },
  main: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: padding,
  },
  footer: {
    padding: 0,
    position: ({ footerPosition }) => footerPosition ?? "relative",
    backgroundColor: theme.palette.background.default,
    bottom: 0,
    left: 0,
    right: 0,

    "& .MuiContainer-root": {
      padding: 0,
    },
  },
});
