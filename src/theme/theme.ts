import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: { main: "#0000000" },
    secondary: {
      main: "#FDC435",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
