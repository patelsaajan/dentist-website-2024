"use client";
import { Container, LinearProgress, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";

const AddOrEditCaseStudy = dynamic(
  () => import("components/case-study/addOrEditCaseStudy"),
  {
    ssr: false,
    loading: () => <LinearProgress />,
  }
);

const AddCaseStudy = () => {
  const { data: session } = useSession();

  const onSubmit = () => {
    console.log("submit");
  };

  if (!session) {
    return <LinearProgress color="secondary" />;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="h4">New Case Study</Typography>
      <AddOrEditCaseStudy onSubmitCaseStudy={onSubmit} />
    </Container>
  );
};

export default AddCaseStudy;
