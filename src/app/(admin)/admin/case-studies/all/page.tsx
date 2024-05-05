"use client";
import { Add, AddBox, DeleteOutline, Edit } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Container,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { getCaseStudies } from "api/caseStudies";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ICaseStudyForm } from "types/caseStudiesForm";

const AllCaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<ICaseStudyForm[] | null>(null);
  useEffect(() => {
    // add event listener on firestore collection
    const unsubscribe = getCaseStudies(setCaseStudies);

    // remove event listener on unmount
    return () => unsubscribe();
  }, []);

  if (!caseStudies) return <LinearProgress />;

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
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant="h4">Case Studies</Typography>
          <Link href={"/admin/case-studies/add"}>
            <Button startIcon={<AddBox />} variant="outlined" color="success">
              Add
            </Button>
          </Link>
        </Stack>
        {caseStudies.map((caseStudy) => (
          <Card>
            <CardContent>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                sx={{ p: 2, alignItems: "center" }}
              >
                <Typography variant="h6">{caseStudy.title}</Typography>
                <Typography variant="body1">
                  {new Date(caseStudy.created || "").toDateString()}
                </Typography>
              </Stack>
              <Typography variant="body2">{caseStudy.abstract}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <Button startIcon={<Edit />} variant="outlined">
                Edit
              </Button>
              <Button
                startIcon={<DeleteOutline />}
                variant="outlined"
                color="error"
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};

export default AllCaseStudies;
