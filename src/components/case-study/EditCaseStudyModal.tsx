import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import { ICaseStudyForm } from "types/caseStudiesForm";
import AddOrEditCaseStudy from "./addOrEditCaseStudy";

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
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EditCaseStudyModal = ({
  caseStudy,
  state,
  onClose,
}: EditCaseStudyModalProps) => {
  return (
    <Modal
      open={state}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <AddOrEditCaseStudy
          onSubmitCaseStudy={() => console.log("submitted")}
        />
      </Box>
    </Modal>
  );
};

export default EditCaseStudyModal;
