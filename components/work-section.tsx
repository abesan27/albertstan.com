import React from "react";

import { TypographyH4 } from "@/components/typography";
import { WorkCard } from "@/components/work-card";
import { experience } from "@/config/work-experience";

const WorkSection = () => {
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
