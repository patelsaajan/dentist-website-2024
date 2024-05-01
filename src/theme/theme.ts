import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: { main: "#0000000" },
    secondary: {
      main: "#FDC435",
      dark: "#FFBA0B",
      light: "FED776",
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
