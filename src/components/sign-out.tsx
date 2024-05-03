"use client";
import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
import React from "react";

const SignOut = () => {
  return <Button onClick={() => signOut()}>sign out</Button>;
};

export default SignOut;
