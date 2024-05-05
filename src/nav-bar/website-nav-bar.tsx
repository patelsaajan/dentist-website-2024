"use client";
import { useTheme } from "@emotion/react";
import {
  AppBar,
  Box,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";

const navItems = [
  { name: "Case Studies", route: "/case-studies" },
  { name: "Portfolio", route: "/portfolio" },
  { name: "About", route: "/about" },
  { name: "Contact", route: "/contact" },
];

const WebsiteNav = () => {
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        width: "100%",
      }}
    >
      <Toolbar disableGutters>
        <Container maxWidth={"lg"} disableGutters sx={{ flexGrow: 1 }}>
          <Stack
            direction={"row"}
            width={"100%"}
            sx={{ justifyContent: "space-between" }}
          >
            <Link href={"/"}>
              <Typography
                sx={{
                  color: "black",
                  "&:hover": {
                    textDecoration: "underline 2px",
                    textUnderlineOffset: 5,
                  },
                }}
              >
                Deesha Chudasama
              </Typography>
            </Link>
            <Stack
              direction={"row"}
              spacing={6}
              sx={{ justifyContent: "flex-end" }}
            >
              {navItems.map((navItem) => (
                <Link href={navItem.route} key={navItem.name}>
                  <Typography
                    sx={{
                      color: "black",
                      "&:hover": {
                        textDecoration: "underline 2px",
                        textUnderlineOffset: 5,
                      },
                    }}
                  >
                    {navItem.name}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default WebsiteNav;
