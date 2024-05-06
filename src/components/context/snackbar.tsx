"use client";

import { SnackbarProvider } from "notistack";

const SnackbarContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={3000}
      preventDuplicate
      variant="success"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      iconVariant={{
        success: "✅",
        error: "✖️",
        warning: "⚠️",
        info: "ℹ️",
      }}
    >
      {children}
    </SnackbarProvider>
  );
};

export default SnackbarContext;
