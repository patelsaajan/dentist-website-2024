import { DeleteOutline, Edit } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { ICaseStudyForm } from "types/caseStudiesForm";

type AdminCaseStudyCardProps = {
  selectedCaseStudy: ICaseStudyForm;
  selectCaseStudyToDelete: (caseStudy: ICaseStudyForm | null) => void;
  selectCaseStudyToEdit: (caseStudy: ICaseStudyForm | null) => void;
};

const AdminCaseStudyCard = ({
  selectedCaseStudy,
  selectCaseStudyToDelete,
  selectCaseStudyToEdit,
}: AdminCaseStudyCardProps) => {
  const date = new Date(selectedCaseStudy.created || "").toDateString();
  return (
    <Card>
      <CardContent>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{
            py: 2,
            alignItems: "flex-start",
            textAlign: "left",
            width: " 100%",
          }}
        >
          <Typography variant="h6" sx={{ width: "80%" }}>
            {selectedCaseStudy.title}
          </Typography>
          <Typography variant="body1">{date}</Typography>
        </Stack>
        <Typography variant="body2" textAlign={"justify"}>
          {selectedCaseStudy.abstract}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          startIcon={<Edit />}
          variant="outlined"
          onClick={() => selectCaseStudyToEdit(selectedCaseStudy)}
        >
          Edit
        </Button>
        <Button
          startIcon={<DeleteOutline />}
          variant="outlined"
          color="error"
          onClick={() => selectCaseStudyToDelete(selectedCaseStudy)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default AdminCaseStudyCard;
