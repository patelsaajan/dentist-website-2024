import React from "react";

const caseStudyPage = ({ params }: { params: { caseStudy: string } }) => {
  return <div>{params.caseStudy}</div>;
};

export default caseStudyPage;
