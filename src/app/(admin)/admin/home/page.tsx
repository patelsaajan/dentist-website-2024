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
  console.log(process.env.NEXT_PUBLIC_ADMIN_EMAIL);

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

          <Typography variant="h5">Case Study</Typography>
          <Stack direction={"row"} spacing={3}>
            <Link href={"/admin/case-studies/all"}>
              <Button
                variant="contained"
                sx={{
                  px: 3,
                  width: 100,
                  transition: "all 200ms ease-in",
                  border: `2px solid ${theme.palette.primary.main}`,
                  "&:hover": {
                    backgroundColor: `${theme.palette.primary.light}`,
                    color: "black",
                  },
                }}
              >
                All
              </Button>
            </Link>
            <Link href={"/admin/case-studies/add"}>
              <Button
                // variant="contained"
                sx={{
                  color: "black",
                  border: "2px solid black",
                  px: 3,
                  width: 100,
                  transition: "all 200ms ease-in",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                  },
                }}
              >
                Add
              </Button>
            </Link>
          </Stack>
          <Typography variant="h5">Portfolio</Typography>
          <Stack direction={"row"} spacing={3}>
            <Link href={"/admin/portfolio/all"}>
              <Button
                variant="contained"
                sx={{
                  px: 3,
                  width: 100,
                  transition: "all 200ms ease-in",
                  border: `2px solid ${theme.palette.primary.main}`,
                  "&:hover": {
                    backgroundColor: `${theme.palette.primary.light}`,
                    color: "black",
                  },
                }}
              >
                All
              </Button>
            </Link>
            <Link href={"/admin/portfolio/add"}>
              <Button
                sx={{
                  color: "black",
                  border: "2px solid black",
                  px: 3,
                  width: 100,
                  transition: "all 200ms ease-in",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                  },
                }}
              >
                Add
              </Button>
            </Link>
          </Stack>
          <SignOut />
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
