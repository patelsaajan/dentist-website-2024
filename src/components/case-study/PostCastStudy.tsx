"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Box, Skeleton, Stack, Typography } from "@mui/material";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "lib/firebase/config";

import "./styles.css";
import { ICaseStudyForm } from "types/caseStudiesForm";

const PostCaseStudy = ({
  content,
  created,
  slug,
  title,
  cardPhoto,
  abstract,
}: ICaseStudyForm) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!cardPhoto) return;

    if (typeof cardPhoto !== "string") {
      const url = URL.createObjectURL(cardPhoto as File);
      setImageUrl(url);

      return;
    }

    const pathReference = ref(storage, `caseStudies/${slug}/${cardPhoto}`);
    getDownloadURL(pathReference)
      .then((url) => {
        setImageUrl(url);
      })
      .catch((error) => {
        setImageUrl(null);
      });
  }, [slug, cardPhoto]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        textAlign: "left",
      }}
    >
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body1" sx={{ textAlign: "justify" }}>
        {abstract}
      </Typography>

      <Stack direction={"row"}>
        <Stack direction={"column"}>
          <Stack direction={"row"} gap={1}>
            <Typography variant="body2" color={"text.secondary"}>
              {new Date(created || Date.now()).toDateString()}
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            width={400}
            height={300}
            alt="Blog image"
            style={{
              borderRadius: "16px",
              objectFit: "cover",
            }}
          />
        ) : (
          <Skeleton variant="rectangular" width={400} height={300} />
        )}
      </Box>

      {content ? (
        <Box>
          <div className="blog" dangerouslySetInnerHTML={{ __html: content }} />
        </Box>
      ) : (
        <Typography>No Content Found</Typography>
      )}
    </Box>
  );
};

export default PostCaseStudy;
