"use client";
import { GoogleSignInButton } from "@/components/authButtons";
import GoogleIcon from "@mui/icons-material/Google";
import { Button, Container, Stack, Typography } from "@mui/material";
import { signIn } from "next-auth/react";

export default function LogInPage() {
  return (
    <Container
      maxWidth={"md"}
      sx={{
        mt: 10,
      }}
    >
      <Stack
        spacing={8}
        sx={{
          alignItems: "center",
        }}
      >
        <Typography
          variant={"h2"}
          sx={{
            fontFamily: "Noto_Serif",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Hello There
        </Typography>

        <Button
          size="large"
          variant="outlined"
          startIcon={<GoogleIcon />}
          onClick={() => signIn("google")}
          sx={{
            width: "50%",
            color: "black",
            borderColor: "grey.400",
          }}
        >
          Google
        </Button>
      </Stack>
    </Container>
  );
}
