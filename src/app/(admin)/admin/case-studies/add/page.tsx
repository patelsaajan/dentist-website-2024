"use client";
import { Container, LinearProgress, Typography } from "@mui/material";
import dynamic from "next/dynamic";

import _ from "lodash";
import { useSession } from "next-auth/react";
import { createCaseStudy, fileStorage } from "lib/firebase/utils";
import { useSnackbar } from "notistack";

const AddOrEditCaseStudy = dynamic(
  () => import("components/case-study/addOrEditCaseStudy"),
  { ssr: false, loading: () => <LinearProgress /> }
);

const removeEmojis = (text: string) =>
  text.replace(
    /[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2580-\u27BF]|\uD83E[\uDD10-\uDDFF]|/g,
    ""
  );

const sanitiseSlug = (text: string) =>
  removeEmojis(text).replace(/[^\w\s]/gi, "");

const AddCaseStudy = () => {
  const { data: session } = useSession();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (data: ICaseStudyForm): void => {
    if (!session?.user?.name || !data.cardPhoto) {
      enqueueSnackbar("Invalid data, please try again.", { variant: "error" });
      return;
    }

    const { cardPhoto, title, ...payload } = data;

    const slug = _.kebabCase(sanitiseSlug(title));
    fileStorage(cardPhoto as File, `caseStudies/${slug}`).then((cardPhoto) =>
      createCaseStudy(slug, {
        ...payload,
        title,
        cardPhoto: cardPhoto,
        slug,
      })
        .then(() => enqueueSnackbar(" case study has been added"))
        .catch((e) =>
          enqueueSnackbar(`Error adding the case study: ${e.message}`, {
            variant: "error",
          })
        )
    );
  };

  if (!session) return <LinearProgress color="secondary" />;

  return (
    <Container maxWidth="md" sx={{ mt: 8, textAlign: "center" }}>
      <Typography variant="h4">New Case Study</Typography>
      <AddOrEditCaseStudy onSubmitCaseStudy={onSubmit} />
    </Container>
  );
};

export default AddCaseStudy;
