"use client";
import GoogleIcon from "@mui/icons-material/Google";
import { Button, Container, Stack, Typography } from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function LogIn() {
  const { data: session } = useSession();

  if (session) {
    redirect("/dashboard");
  }

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

        <Typography
          variant={"h4"}
          sx={{
            fontFamily: "Noto_Serif",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Should you be here?
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
