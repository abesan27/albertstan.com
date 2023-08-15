import React from "react";

import { TypographyH4 } from "@/components/typography";
import { WorkCard, WorkCardProps } from "@/components/work-card";

const WorkSection = () => {
  const experience: WorkCardProps[] = [
    {
      name: "kubrio.com",
      role: "front-end developer",
      workFrom: "2021",
      workUntill: "present",
      description: "where young innovators, makers, and creators build their future",
    },
    {
      name: "getwineful.com",
      role: "ceo & founder",
      workFrom: "2023",
      workUntill: "present",
      description: "the only app for natural wine enthusiasts",
    },
  ];

  return (
    <React.Fragment>
      <TypographyH4>my work experience</TypographyH4>

      {experience.map((work, index) => (
        <WorkCard key={index} {...work} />
      ))}
    </React.Fragment>
  );
};

export { WorkSection };
