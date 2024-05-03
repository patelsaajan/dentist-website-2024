"use client";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const page = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container maxWidth="lg" disableGutters>
      <Stack
        direction={"column"}
        spacing={4}
        sx={{ width: "100%", textAlign: "center", mt: 6 }}
      >
        <Typography
          variant={isMobile ? "h3" : "h2"}
          sx={{ fontFamily: "Noto_Serif ", fontWeight: 700 }}
        >
          Portfolio
        </Typography>
        <Stack direction={"column"} spacing={6}>
          <Card elevation={0} sx={{ height: "400px" }}>
            <Stack direction={"row"} sx={{ height: "100%" }}>
              <CardContent
                sx={{
                  width: "50%",
                  textAlign: "left",
                  pl: 5,
                  height: "100%",
                }}
              >
                <Stack
                  direction={"column"}
                  spacing={2}
                  sx={{
                    height: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant={isMobile ? "h5" : "h4"}
                    sx={{ fontFamily: "Noto_Serif ", fontWeight: 500 }}
                  >
                    Hello world
                  </Typography>
                  <Typography>
                    I created this personal project in order to show how to
                    create an interface in Figma using a portfolio as an
                    example.
                  </Typography>
                  <Link href={"/case-studies"}>
                    <Button variant="outlined" color="secondary">
                      View
                    </Button>
                  </Link>
                </Stack>
              </CardContent>
              <CardMedia
                sx={{ height: "100%", width: "50%" }}
                image="/imgs/hero.png"
                title="Dishwasher"
              />
            </Stack>
          </Card>
          <Card elevation={0} sx={{ height: "400px" }}>
            <Stack direction={"row-reverse"} sx={{ height: "100%" }}>
              <CardContent
                sx={{
                  width: "50%",
                  textAlign: "left",
                  pl: 5,
                  height: "100%",
                }}
              >
                <Stack
                  direction={"column"}
                  spacing={2}
                  sx={{
                    height: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant={isMobile ? "h5" : "h4"}
                    sx={{ fontFamily: "Noto_Serif ", fontWeight: 500 }}
                  >
                    Hello world
                  </Typography>
                  <Typography>
                    I created this personal project in order to show how to
                    create an interface in Figma using a portfolio as an
                    example.
                  </Typography>
                  <Link href={"/case-studies"}>
                    <Button variant="outlined" color="secondary">
                      View
                    </Button>
                  </Link>
                </Stack>
              </CardContent>
              <CardMedia
                sx={{ height: "100%", width: "50%" }}
                image="/imgs/hero.png"
                title="Dishwasher"
              />
            </Stack>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
};

export default page;
