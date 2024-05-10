"use client";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  LinearProgress,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { getCaseStudies } from "api/caseStudies";
import CardCaseStudy from "components/case-study/CardCaseStudy";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ICaseStudyForm } from "types/caseStudiesForm";

const page = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [caseStudies, setCaseStudies] = useState<ICaseStudyForm[]>([]);

  useEffect(() => {
    // add event listener on firestore collection
    const unsubscribe = getCaseStudies(setCaseStudies);

    // remove event listener on unmount
    return () => unsubscribe();
  }, []);

  if (!caseStudies) return <LinearProgress />;

  return (
    <Container maxWidth="lg" disableGutters>
      <Stack
        direction={"column"}
        spacing={4}
        sx={{ width: "100%", textAlign: "center", mt: 6 }}
      >
        <Typography
          variant={isMobile ? "h3" : "h2"}
          sx={{ fontFamily: "Noto_Serif ", fontWeight: 700 }}
        >
          Case Studies
        </Typography>
        <Stack direction={"column"} spacing={6}>
          {caseStudies.map((cs, i) => (
            <CardCaseStudy key={cs.title} caseStudy={cs} oriNum={i} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default page;
