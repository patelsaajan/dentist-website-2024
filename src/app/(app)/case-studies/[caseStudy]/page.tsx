"use client";
import { ArrowBack } from "@mui/icons-material";
import { Button, Container, LinearProgress } from "@mui/material";
import PostCaseStudy from "components/case-study/PostCastStudy";
import { doc, getDoc } from "firebase/firestore";
import { db } from "lib/firebase/config";
import { notFound, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ICaseStudyForm } from "types/caseStudiesForm";

const caseStudyPage = ({ params }: { params: { caseStudy: string } }) => {
  const router = useRouter();
  const [loadedDoc, setLoadedDoc] = useState<ICaseStudyForm | null>(null);

  useEffect(() => {
    const getCaseStudy = async () => {
      const docRef = doc(db, "case-studies", params.caseStudy);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLoadedDoc(docSnap.data() as ICaseStudyForm);
      } else {
        notFound();
      }
    };

    getCaseStudy();
  }, [params.caseStudy]);

  if (!loadedDoc) return <LinearProgress />;

  return (
    <Container maxWidth="md" sx={{ my: 2 }}>
      <Button
        sx={{ my: 2, color: "black" }}
        startIcon={<ArrowBack />}
        onClick={() => router.back()}
      >
        Back
      </Button>
      <PostCaseStudy {...loadedDoc} />
    </Container>
  );
};

export default caseStudyPage;
