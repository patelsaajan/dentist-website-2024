"use client";
import { AddBox } from "@mui/icons-material";
import {
  Button,
  Container,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import {
  deleteCaseStudyDB,
  deleteCaseStudyStorage,
  getCaseStudies,
} from "api/caseStudies";
import AdminCaseStudyCard from "components/case-study/AdminCaseStudyCard";
import AdminConfrimDelete from "components/case-study/AdminConfrimDeleteModel";
import EditCaseStudyModal from "components/case-study/EditCaseStudyModal";
import Link from "next/link";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { ICaseStudyForm } from "types/caseStudiesForm";

const AllCaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<ICaseStudyForm[] | null>(null);
  const [caseStudyToDelete, setCaseStudyToDelete] =
    useState<ICaseStudyForm | null>(null);
  const [caseStudyToEdit, setCaseStudyToEdit] = useState<ICaseStudyForm | null>(
    null
  );

  useEffect(() => {
    // add event listener on firestore collection
    const unsubscribe = getCaseStudies(setCaseStudies);

    // remove event listener on unmount
    return () => unsubscribe();
  }, []);

  const handleDeleteCaseStudy = () => {
    if (!caseStudyToDelete) return;

    deleteCaseStudyStorage(
      caseStudyToDelete?.cardPhoto as string,
      caseStudyToDelete.slug
    ).catch(() => enqueueSnackbar("Error deleting hero image"));

    deleteCaseStudyDB(caseStudyToDelete.slug)
      .then(() => {
        enqueueSnackbar("Blog post deleted");
      })
      .catch(() => enqueueSnackbar("Error deleting blog"))
      .finally(() => {
        setCaseStudyToDelete(null);
      });
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
            selectedCaseStudy={caseStudy}
            selectCaseStudyToDelete={setCaseStudyToDelete}
            selectCaseStudyToEdit={setCaseStudyToEdit}
          />
        ))}
      </Stack>
      {caseStudyToDelete && (
        <AdminConfrimDelete
          state={!!caseStudyToDelete}
          onClose={() => setCaseStudyToDelete(null)}
          caseStudy={caseStudyToDelete}
          handleDelete={handleDeleteCaseStudy}
        />
      )}
      {caseStudyToEdit && (
        <EditCaseStudyModal
          state={!!caseStudyToEdit}
          onClose={() => setCaseStudyToEdit(null)}
          caseStudy={caseStudyToEdit}
          // handleEdit={handleEditCaseStudy}
        />
      )}
    </Container>
  );
};
export default AllCaseStudies;
