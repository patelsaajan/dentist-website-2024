import { Container, Stack, TextField, Box, Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

// @ts-ignore
import ImageResize from "quill-image-resize-module-react";
import AddingCardImage from "./AddingCardImage";

Quill.register("modules/imageResize", ImageResize);

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    ["bold", "italic", "underline"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "formula"],

    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  ],
  imageResize: {
    parchment: Quill.import("parchment"),
    modules: ["Resize", "DisplaySize"],
  },
};

type addCaseStudyProps = {
  onSubmitCaseStudy: (data: ICaseStudyForm) => void;
  defaultValues?: ICaseStudyForm;
};

const AddOrEditCaseStudy = ({
  onSubmitCaseStudy,
  defaultValues,
}: addCaseStudyProps) => {
  const dv2 = {
    title: "",
    abstract: "",
    content: "",
    // cardPhoto: null,
  };

  const { control, handleSubmit, reset, setValue, watch, getValues } =
    useForm<ICaseStudyForm>({
      defaultValues: defaultValues || dv2,
    });

  // const blogHeroPhoto = watch("cardPhoto");

  // const handleClearChange = () => {
  //   setValue("cardPhoto", null);
  // };

  // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { files } = event.target;
  //   if (files && files.length > 0) {
  //     setValue("cardPhoto", files[0]);
  //   }
  // };

  const onSubmit = (data: ICaseStudyForm) => {
    onSubmitCaseStudy(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit((data: any) => {
        onSubmit(data);
      })}
    >
      <Container maxWidth="md" sx={{ mt: 4, textAlign: "center" }}>
        <Stack direction={"column"} spacing={2}>
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({
              field: { onChange, value },
              fieldState: { error },
            }: any) => (
              <TextField
                onChange={onChange}
                value={value}
                label={"Title"}
                error={!!error}
                helperText={!!error && "A title is required"}
                size="small"
              />
            )}
          />

          {/* {blogHeroPhoto ? (
            <AddingCardImage
              handleClearChange={handleClearChange}
              photoFile={blogHeroPhoto as File}
            />
          ) : (
            <Controller
              name="cardPhoto"
              control={control}
              rules={{ required: true }}
              render={({ field: { value }, fieldState: { error } }: any) => (
                <TextField
                  type="file"
                  error={!!error}
                  helperText={!!error && "A hero image is required"}
                  size="small"
                  onChange={handleImageChange}
                />
              )}
            />
          )} */}

          <Controller
            name="abstract"
            control={control}
            rules={{ required: true }}
            render={({
              field: { onChange, value },
              fieldState: { error },
            }: any) => (
              <TextField
                label={"Abstract"}
                onChange={onChange}
                multiline
                error={!!error}
                helperText={!!error && "An abstract is required"}
                value={value}
                size="small"
              />
            )}
          />

          <Box>
            <Controller
              name="content"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }: any) => (
                <ReactQuill
                  theme="snow"
                  value={value}
                  onChange={onChange}
                  modules={modules}
                />
              )}
            />
          </Box>
          <Button type={"submit"}>Submit</Button>
        </Stack>
      </Container>
    </form>
  );
};

export default AddOrEditCaseStudy;
