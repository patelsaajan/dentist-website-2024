"use client";
import { Button, Container, Stack, Typography } from "@mui/material";
import { getCaseStudies } from "api/caseStudies";
import React, { useEffect, useState } from "react";
import { ICaseStudyForm } from "types/caseStudiesForm";

const AllCaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<ICaseStudyForm[]>([]);
  useEffect(() => {
    // add event listener on firestore collection
    const unsubscribe = getCaseStudies(setCaseStudies);

    // remove event listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <Container maxWidth={"lg"}>
      <Stack
        spacing={3}
        sx={{
          mt: 6,
          justifyContent: "center",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography variant="h4">Edit Case Studies</Typography>
        {caseStudies.map((caseStudy) => (
          <Stack
            direction={"row"}
            spacing={4}
            sx={{
              width: "100%",
              justifyContent: "space-evenly",
              border: "1px solid black",
              borderRadius: 16,
            }}
          >
            <Typography>{caseStudy.title}</Typography>
            <Stack direction={"row"} spacing={4}>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};

export default AllCaseStudies;
