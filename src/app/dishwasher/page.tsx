"use client";
import {
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";

const Admin = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleGoogle = async (e: React.MouseEvent) => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  return (
    <Container
      maxWidth={"lg"}
      sx={{
        mt: 8,

        textAlign: "center",
      }}
    >
      <Typography
        variant={isMobile ? "h3" : "h2"}
        sx={{
          fontFamily: "Noto_Serif ",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Hello there
      </Typography>
      <Button onClick={handleGoogle} sx={{ m: "auto", mt: 6 }}>
        Click Me
      </Button>
    </Container>
  );
};

export default Admin;
