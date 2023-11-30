import React from "react";
import { TypographyH1, TypographyH4 } from "@/components/typography";

const Hero = () => {
  return (
    <React.Fragment>
      <TypographyH1>
        <span className="text-neutral-600">👋 hey there,</span> <br /> i&apos;m albert stan
      </TypographyH1>

      <TypographyH4>a full-stack software developer that mostly writes typescript</TypographyH4>
    </React.Fragment>
  );
};

export { Hero };
