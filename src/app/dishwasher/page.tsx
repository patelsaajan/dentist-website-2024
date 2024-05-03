import { Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Container maxWidth={"md"} sx={{ textAlign: "center", mt: 10 }}>
      <Stack spacing={8}>
        <Typography
          variant={"h2"}
          sx={{
            fontFamily: "Noto_Serif ",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Hello There
        </Typography>
        <Link href={"/api/auth/signin"}>
          <Button variant="contained">Log In</Button>
        </Link>
      </Stack>
    </Container>
  );
};

export default page;
