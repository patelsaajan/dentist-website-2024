"use client";
import { useTheme } from "@emotion/react";
import {
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container maxWidth={"lg"} disableGutters>
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={8}
        sx={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 10,
        }}
      >
        <Stack
          direction={"column"}
          spacing={2}
          sx={{ width: "50%", textAlign: isMobile ? "center" : "" }}
        >
          <Typography
            variant={isMobile ? "h3" : "h2"}
            sx={{ fontFamily: "Noto_Serif ", fontWeight: 700 }}
          >
            About me
          </Typography>
          <Typography color={"#828282"} sx={{ lineHeight: 1.8 }}>
            Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor
            neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed
            cras sed. Aliquet risus posuere aliquet imperdiet sit.
          </Typography>
          <Link href={"/case-studies"}>
            <Button variant="contained">Case Studies</Button>
          </Link>
        </Stack>
        <Image
          src={"/imgs/hero.png"}
          alt={"hero image of Deesha"}
          width={isMobile ? 400 : 500}
          height={isMobile ? 400 : 500}
          style={{
            borderRadius: "50%",
            border: `10px solid ${theme.palette.primary.main}`,
          }}
        />
      </Stack>
    </Container>
  );
};

export default page;
