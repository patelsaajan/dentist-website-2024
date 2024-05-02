"use client";
import {
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Butterfly_Kids } from "next/font/google";
import Link from "next/link";
import React from "react";

const page = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container maxWidth={"lg"}>
      <Stack
        direction={"column"}
        spacing={2}
        sx={{
          width: "100%",
          alignItems: "center",
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
          Contact
        </Typography>
        <Stack
          spacing={2}
          direction={"column"}
          sx={{
            justifyContent: "center",
            mt: 4,
            width: "60%",
            mx: "auto",
          }}
        >
          <TextField label={"Name"} />
          <TextField label={"Email"} />
          <TextField label={"Subject"} />
          <TextField label={"Message"} multiline rows={10} />
        </Stack>
        <Link href={"/contact"}>
          <Button variant="contained">Submit</Button>
        </Link>
      </Stack>
    </Container>
  );
};

export default page;
