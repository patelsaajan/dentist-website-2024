"use client";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "lib/firebase/config";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ICaseStudyForm } from "types/caseStudiesForm";

type CardCaseStudyProps = {
  caseStudy: ICaseStudyForm;
  oriNum: number;
};

const CardCaseStudy = ({ caseStudy, oriNum }: CardCaseStudyProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const pathReference = ref(
      storage,
      `caseStudies/${caseStudy.slug}/${caseStudy.cardPhoto}`
    );
    getDownloadURL(pathReference)
      .then((url) => {
        setImageUrl(url);
      })
      .catch((error) => {
        setImageUrl(null);
        console.log(error);
      });
  }, [caseStudy.slug, caseStudy.cardPhoto]);

  const rowDirection = oriNum % 2 !== 0 ? "row" : "row-reverse";

  const date = new Date(caseStudy.created || Date.now()).toDateString();

  return (
    <Card elevation={0} sx={{ height: "400px" }}>
      <Stack direction={rowDirection} sx={{ height: "100%" }}>
        <CardContent
          sx={{
            width: "50%",
            textAlign: "left",
            pl: 5,
            height: "100%",
          }}
        >
          <Stack
            direction={"column"}
            spacing={2}
            sx={{
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Typography
              variant={isMobile ? "h5" : "h4"}
              sx={{ fontFamily: "Noto_Serif ", fontWeight: 500 }}
            >
              {caseStudy.title}
            </Typography>
            <Typography>{caseStudy.abstract}</Typography>
            <Stack direction={"row"} spacing={3} sx={{ alignItems: "center" }}>
              <Link href={`/case-studies/${caseStudy.slug}`}>
                <Button variant="outlined" color="secondary">
                  View
                </Button>
              </Link>
              <Typography>{date}</Typography>
            </Stack>
          </Stack>
        </CardContent>
        {imageUrl ? (
          <CardMedia
            component={"img"}
            image={imageUrl}
            alt={`${caseStudy.title} card photo`}
            sx={{ height: "100%", width: "50%", borderRadius: 0 }}
          />
        ) : (
          <Skeleton
            variant="rectangular"
            sx={{ height: "100%", width: "50%" }}
          />
        )}
      </Stack>
    </Card>
  );
};

export default CardCaseStudy;
