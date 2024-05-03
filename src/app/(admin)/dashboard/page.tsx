import { authConfig, logInIsRequiredServer } from "@/lib/auth";
import { Button, Typography } from "@mui/material";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import React from "react";
import { auth } from "../../../../firebase/firebaseConfig";
import SignOut from "@/components/sign-out";

const Dashboard = async () => {
  const session = await getServerSession(authConfig);
  await logInIsRequiredServer();

  return (
    <>
      <div>{session?.user?.name}</div>
      {session?.user?.email === process.env.ADMIN_EMAIL ? (
        <Typography>Welcome</Typography>
      ) : (
        <Typography>Wrong User</Typography>
      )}
      <SignOut />
    </>
  );
  {
  }
};

export default Dashboard;
