"use client";
import { Container, LinearProgress, Typography } from "@mui/material";
import dynamic from "next/dynamic";

import _ from "lodash";
import { useSession } from "next-auth/react";
import { createCaseStudy, fileStorage } from "lib/firebase/utils";

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

  const onSubmit = (data: ICaseStudyForm): void => {
    if (!session?.user?.name) {
      return;
    }

    const { title, ...payload } = data;

    const slug = _.kebabCase(sanitiseSlug(title));
    // fileStorage(
    //   cardPhoto as File,
    //   `${process.env.NEXT_PUBLIC_API_URL}/firebase/document?collection=caseStudies/${slug}`
    // );

    createCaseStudy(slug, {
      ...payload,
      title,
      // cardPhoto: cardPhoto,
      slug,
    });
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
