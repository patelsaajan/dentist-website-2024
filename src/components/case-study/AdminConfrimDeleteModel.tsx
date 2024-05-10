import { Cancel, DeleteOutline, Edit } from "@mui/icons-material";
import { Box, Modal, Typography, Button, Stack } from "@mui/material";
import React from "react";
import { ICaseStudyForm } from "types/caseStudiesForm";

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

type AdminConfrimDeleteModelProps = {
  state: boolean;
  caseStudy: ICaseStudyForm;
  onClose: () => void;
  handleDelete: () => void;
};

const AdminConfrimDeleteModel = ({
  state,
  onClose,
  handleDelete,
  caseStudy,
}: AdminConfrimDeleteModelProps) => {
  return (
    <Modal
      open={state}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h5">Are you sure you want to delete:</Typography>
        <Typography variant="h6">{caseStudy.title}</Typography>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button
            startIcon={<Cancel />}
            variant="outlined"
            sx={{ alignItems: "center" }}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            startIcon={<DeleteOutline />}
            variant="outlined"
            color="error"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default AdminConfrimDeleteModel;
