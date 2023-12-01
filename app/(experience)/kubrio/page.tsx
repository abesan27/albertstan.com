import React from "react";

import { TypographyH3, TypographyP } from "@/components/typography";

const KubrioExperience = () => {
  return (
    <React.Fragment>
      <TypographyH3>
        front-end developer <br /> at kubrio
      </TypographyH3>

      <div className="text-muted-foreground space-y-3">
        <TypographyP>
          i first joined kubrio in 2022 as an intern, working on refactoring an old react project to
          use functional components & hooks.
        </TypographyP>

        <TypographyP>
          then, stepped up and took ownership of my first production project, a svelte & sveltekit
          based website, complete with api calls, data pagination & filtering, as well as
          third-party integrations.
        </TypographyP>

        <TypographyP>
          currently, i&apos;m working on a thrilling new project: a ground up rebuild of the current
          kubrio.com website. i&apos;m using my personal favorite tech stack: typescript, react,
          next.js 13, radix ui & many more cool technologies.
        </TypographyP>
      </div>
    </React.Fragment>
  );
};

export default KubrioExperience;
