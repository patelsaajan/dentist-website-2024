"use client";
import {
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container maxWidth={"lg"} disableGutters sx={{ mt: 5 }}>
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
          sx={{
            maxWidth: "60%",
            textAlign: isMobile ? "center" : "left",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" color={"primary.main"}>
            Foundation Dentist
          </Typography>
          <Typography
            variant={isMobile ? "h3" : "h2"}
            sx={{ fontFamily: "Noto_Serif ", fontWeight: 700 }}
          >
            Hello, my name is Deesha Chudasama
          </Typography>
          <Typography
            variant="h6"
            color={"#828282"}
            textAlign={isMobile ? "center" : "justify"}
          >
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </Typography>
          <Stack
            direction={"row"}
            spacing={2}
            justifyContent={isMobile ? "center" : "flex-start"}
          >
            <Link href={"/case-studies"}>
              <Button
                variant="contained"
                sx={{
                  px: 3,
                  transition: "all 200ms ease-in",
                  border: `2px solid ${theme.palette.primary.main}`,
                  "&:hover": {
                    backgroundColor: `${theme.palette.primary.light}`,
                    color: "black",
                  },
                }}
              >
                Case Studies
              </Button>
            </Link>
            <Link href={"/portfolio"}>
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
                Portfolio
              </Button>
            </Link>
          </Stack>
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
              width: isMobile ? "12%" : "10%",
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

        <Typography variant="h6" sx={{ mt: 6, textAlign: "center" }}>
          Coming Soon
        </Typography>
      </Stack>
    </Container>
  );
}
