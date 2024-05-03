"use client";
import { Button, useTheme } from "@mui/material";
import Link from "next/link";
import React from "react";

const LandingPageButton = () => {
  const theme = useTheme();
  return (
    <Link href={"/"}>
      <Button
        variant="contained"
        sx={{
          px: 3,
          transition: "all 200ms ease-in",
          width: 200,
          border: `2px solid ${theme.palette.primary.main}`,
          "&:hover": {
            backgroundColor: `${theme.palette.primary.light}`,
            color: "black",
          },
        }}
      >
        Landing Page
      </Button>
    </Link>
  );
};

export default LandingPageButton;
