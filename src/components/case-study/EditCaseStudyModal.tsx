import { Box, LinearProgress, Modal, Typography } from "@mui/material";
import {
  deleteCaseStudyStorage,
  getCardPhotoFile,
  updateCaseStudy,
} from "api/caseStudies";
import { fileStorage } from "lib/firebase/utils";
import dynamic from "next/dynamic";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { ICaseStudyForm } from "types/caseStudiesForm";

type EditCaseStudyModalProps = {
  caseStudy: ICaseStudyForm;
  state: boolean;
  onClose: () => void;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "90vh",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  overflow: "auto",
};

const AddOrEditCaseStudy = dynamic(
  () => import("components/case-study/addOrEditCaseStudy"),
  { ssr: false, loading: () => <LinearProgress /> }
);

const EditCaseStudyModal = ({
  caseStudy,
  state,
  onClose,
}: EditCaseStudyModalProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const [caseStudyPhotoFile, setCaseStudyPhotoFile] = useState<File | null>(
    null
  );

  useEffect(() => {
    getCardPhotoFile(caseStudy.slug, caseStudy.cardPhoto as string)
      .then((file) => {
        setCaseStudyPhotoFile(file);
      })
      .catch((e) => {});
  }, []);

  const defaultValues = {
    ...caseStudy,
    cardPhoto: caseStudyPhotoFile,
  } as ICaseStudyForm;

  const onSubmit = (data: ICaseStudyForm) => {
    const { cardPhoto, slug, ...payload } = data;

    deleteCaseStudyStorage(caseStudy.cardPhoto as string, caseStudy.slug);

    fileStorage(cardPhoto as File, `caseStudies/${slug}`).then((imageId) => {
      updateCaseStudy(slug, {
        ...payload,
        cardPhoto: imageId,
        slug,
      })
        .then(() => enqueueSnackbar("Case study has been updated"))
        .catch((e) =>
          enqueueSnackbar(`Error updating the case study: ${e.message}`, {
            variant: "error",
          })
        )
        .finally(onClose);
    });
  };

  if (!caseStudyPhotoFile) return <LinearProgress />;

  return (
    <Modal
      open={state}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <AddOrEditCaseStudy
          onSubmitCaseStudy={onSubmit}
          defaultValues={defaultValues}
        />
      </Box>
    </Modal>
  );
};

export default EditCaseStudyModal;
