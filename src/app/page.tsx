"use client";
import { Button, Stack, Typography, useTheme } from "@mui/material";

export default function Home() {
  const theme = useTheme();
  return (
    <Stack direction={"column"} spacing={1} sx={{ m: 10 }}>
      <Typography color={"#FDC435"}>Foundation Dentist</Typography>
      <Typography variant="h3">Hello, my name is Deesha Chudasama</Typography>
      <Typography>
        Short text with details about you, what you do or your professional
        career. You can add more information on the about page.
      </Typography>
      <Stack direction={"row"} spacing={2}>
        <Button sx={{ backgroundColor: "secondary.main", px: 3 }}>
          Projects
        </Button>
        <Button sx={{ color: "black", border: "2px solid black", px: 3 }}>
          LinkedIn
        </Button>
      </Stack>
    </Stack>
  );
}
