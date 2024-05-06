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
import AdminCaseStudyCard from "components/case-study/AdminCaseStudyCard";
import AdminConfrimDelete from "components/case-study/AdminConfrimDeleteModel";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ICaseStudyForm } from "types/caseStudiesForm";

const AllCaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<ICaseStudyForm[] | null>(null);
  const [confirmDelete, setConfrimDelete] = useState(false);
  useEffect(() => {
    // add event listener on firestore collection
    const unsubscribe = getCaseStudies(setCaseStudies);

    // remove event listener on unmount
    return () => unsubscribe();
  }, []);

  const handleOpenDeleteModel = () => {
    setConfrimDelete(true);
  };

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
          <AdminCaseStudyCard
            key={caseStudy.title}
            title={caseStudy.title}
            abstract={caseStudy.abstract}
            created={caseStudy.created}
            openDeleteModel={() => setConfrimDelete(true)}
          />
        ))}
      </Stack>
      {confirmDelete && (
        <AdminConfrimDelete
          state={confirmDelete}
          onClose={() => setConfrimDelete(false)}
        />
      )}
    </Container>
  );
};

export default AllCaseStudies;
