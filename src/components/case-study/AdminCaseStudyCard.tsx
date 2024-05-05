import { DeleteOutline, Edit } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

type AdminCaseStudyCardProps = {
  title: string;
  created: number | undefined;
  abstract: string;
};

const AdminCaseStudyCard = ({
  title,
  created,
  abstract,
}: AdminCaseStudyCardProps) => {
  const date = new Date(created || "").toDateString();
  return (
    <Card>
      <CardContent>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ py: 2, alignItems: "center" }}
        >
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body1">{date}</Typography>
        </Stack>
        <Typography variant="body2" textAlign={"justify"}>
          {abstract}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button startIcon={<Edit />} variant="outlined">
          Edit
        </Button>
        <Button startIcon={<DeleteOutline />} variant="outlined" color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default AdminCaseStudyCard;
