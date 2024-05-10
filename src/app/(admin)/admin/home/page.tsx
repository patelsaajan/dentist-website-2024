"use client";

import { Button, Container, Stack, Typography, useTheme } from "@mui/material";
import SignOut from "components/sign-out";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const AdminHome = () => {
  const { data: session } = useSession();
  const theme = useTheme();

  if (!session || !session.user?.email) {
    redirect("/");
  }

  if (session.user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
    const user = session.user.name;
    return (
      <Container maxWidth="lg">
        <Stack
          spacing={4}
          sx={{ textAlign: "center", alignItems: "center", mt: 10 }}
        >
          <Typography variant="h3">Welcome</Typography>
          <Typography variant="h5">{user}</Typography>
        </Stack>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Typography>Wrong User</Typography>
      <SignOut />
    </Container>
  );
};

export default AdminHome;
