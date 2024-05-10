"use client";
import { Button, useTheme } from "@mui/material";
import { signOut } from "next-auth/react";
import React from "react";

const SignOut = () => {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      sx={{ border: `1px solid ${theme.palette.primary.main}` }}
      onClick={() => signOut()}
    >
      sign out
    </Button>
  );
};

export default SignOut;
