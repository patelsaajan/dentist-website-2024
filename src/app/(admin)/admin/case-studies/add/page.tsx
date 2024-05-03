"use client";
import {
  Container,
  LinearProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";

const AddCaseStudy = () => {
  const { data: session } = useSession();

  const dv2 = {
    title: "",
    summary: "",
    tag: "",
    content: "",
    heroPhoto: null,
  };

  const { control, handleSubmit, reset, setValue, watch, getValues } =
    useForm<caseStudyForm>({
      defaultValues: dv2,
    });

  if (!session) {
    return <LinearProgress color="secondary" />;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="h4">New Case Study</Typography>
      <Stack spacing={3} sx={{ mt: 4 }}>
        <TextField label={"Title"} size="small" />
        <TextField label={"Abstract"} size="small" />
        <TextField type="file" size="small" />
        <TextField label={"React Quill"} size="small" multiline minRows={5} />
      </Stack>
    </Container>
  );
};

export default AddCaseStudy;
