import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFBA0B",
      light: "#FDC435",
    },
    secondary: { main: "#000000" },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
        contained: {
          color: "black",
          boxShadow: "none",
          "&:hover": { boxShadow: "none" },
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
