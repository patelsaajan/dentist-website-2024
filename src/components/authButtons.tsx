"use client";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

export function GoogleSignInButton() {
  const handleClick = () => {
    signIn("google");

    return (
      <Button variant="contained" onClick={handleClick}>
        Log In
      </Button>
    );
  };
}
