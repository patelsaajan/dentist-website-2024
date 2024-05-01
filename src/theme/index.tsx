"use client";

import { ThemeProvider } from "@mui/material";
import theme from "./theme";

type DentistThemeProviderProps = {
  children: React.ReactNode;
};

const DentistThemeProvider = ({ children }: DentistThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default DentistThemeProvider;
