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

const navItems = ["Home", "About", "Contact"];

const WebsiteNav = () => {
  const theme = useTheme();
  return (
    <Container maxWidth={"lg"} sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          boxShadow: "0",
          backgroundColor: "white",
        }}
      >
        <Toolbar>
          <Stack direction={"row"}>
            <Typography>Deesha Chudsama</Typography>
            <Stack
              direction={"row"}
              spacing={6}
              width="100%"
              sx={{ justifyContent: "flex-end" }}
            >
              {navItems.map((navItem) => (
                <Typography id={navItem} sx={{ color: "black" }}>
                  {navItem}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default WebsiteNav;
