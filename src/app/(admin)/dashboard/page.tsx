import { authConfig } from "@/lib/auth";
import { Typography } from "@mui/material";
import { getServerSession } from "next-auth";
import React from "react";

const Dashboard = async () => {
  const session = await getServerSession(authConfig);
  return (
    <>
      <div>{session?.user?.name}</div>
      {session?.user?.email === "saajanpatel@hotmail.com" ? (
        <Typography>Welcome</Typography>
      ) : (
        <Typography>Wrong User</Typography>
      )}
    </>
  );
  {
  }
};

export default Dashboard;
