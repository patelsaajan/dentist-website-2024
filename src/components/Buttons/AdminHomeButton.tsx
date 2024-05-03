import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const AdminHomeButton = () => {
  return (
    <Link href={"/admin/home"}>
      <Button
        sx={{
          color: "black",
          border: "2px solid black",
          px: 3,
          mt: 3,
          width: 200,
          transition: "all 200ms ease-in",
          "&:hover": {
            backgroundColor: "black",
            color: "white",
          },
        }}
      >
        Admin Home
      </Button>
    </Link>
  );
};

export default AdminHomeButton;
