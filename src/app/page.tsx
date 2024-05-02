"use client";
import { Button, Container, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const theme = useTheme();
  return (
    <Container maxWidth={"lg"} disableGutters sx={{ mt: 5 }}>
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 10,
        }}
      >
        <Stack direction={"column"} spacing={2} sx={{ maxWidth: "45%" }}>
          <Typography variant="h6" color={"primary.main"}>
            Foundation Dentist
          </Typography>
          <Typography variant="h2" textAlign={"left"}>
            Hello, my name is Deesha Chudasama
          </Typography>
          <Typography variant="h6" color={"#828282"} textAlign={"justify"}>
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </Typography>
          <Stack direction={"row"} spacing={2}>
            <Link href={"/case-studies"}>
              <Button
                variant="contained"
                sx={{
                  px: 3,
                  transition: "all 200ms ease-in",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "primary.main",
                  },
                }}
              >
                Case Studies
              </Button>
            </Link>
            <Button
              sx={{
                color: "black",
                border: "2px solid black",
                px: 3,
                transition: "all 200ms ease-in",
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                },
              }}
            >
              LinkedIn
            </Button>
          </Stack>
        </Stack>
        <Image
          src={"/imgs/hero.png"}
          alt={"hero image of Deesha"}
          width={500}
          height={500}
          style={{
            borderRadius: "50%",
            border: `10px solid ${theme.palette.primary.main}`,
          }}
        />
      </Stack>
      <Stack direction={"column"} sx={{ mt: 25, width: "100%" }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            color: "secondary.main",
            textUnderlineOffset: 5,
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              position: "absolute",
              width: "10%",
              left: "50%",
              transform: "translate(-50%)",
              bottom: 0,
              height: "3px",
              background: `${theme.palette.primary.main}`,
            },
          }}
        >
          Case Studies
        </Typography>
      </Stack>
    </Container>
  );
}
