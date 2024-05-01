"use client";
import { Button, Container, Stack, Typography, useTheme } from "@mui/material";

export default function Home() {
  const theme = useTheme();
  return (
    <Container maxWidth={"xl"}>
      <Stack direction={"column"} spacing={2} sx={{ m: 12, maxWidth: "35%" }}>
        <Typography color={"secondary.main"}>Foundation Dentist</Typography>
        <Typography variant="h3" textAlign={"left"}>
          Hello, my name is Deesha Chudasama
        </Typography>
        <Typography color={"#828282"} textAlign={"justify"}>
          Short text with details about you, what you do or your professional
          career. You can add more information on the about page.
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Button
            sx={{
              backgroundColor: "secondary.main",
              px: 3,
              "&:hover": {
                backgroundColor: "secondary.dark",
              },
            }}
          >
            Projects
          </Button>
          <Button sx={{ color: "black", border: "2px solid black", px: 3 }}>
            LinkedIn
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
