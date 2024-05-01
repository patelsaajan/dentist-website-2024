import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FDC435",
      dark: "#FFBA0B",
      light: "FED776",
    },
    secondary: { main: "#000000" },
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
