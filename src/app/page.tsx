import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Stack direction={"column"} spacing={1} sx={{ m: 10 }}>
      <Typography color={"#FDC435"}>Foundation Dentist</Typography>
      <Typography variant="h3">Hello, my name is Deesha Chudasama</Typography>
      <Typography>
        Short text with details about you, what you do or your professional
        career. You can add more information on the about page.
      </Typography>
      <Stack direction={"row"}>
        <Button>Projects</Button>
        <Button>LinkedIn</Button>
      </Stack>
    </Stack>
  );
}
