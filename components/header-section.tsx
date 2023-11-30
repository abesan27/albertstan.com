import React from "react";
import Link from "next/link";

import { EnvelopeOpenIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/hero";

const HeaderSection = () => {
  const technologies = [
    "typescript",
    "react",
    "react-native",
    "expo",
    "nextjs",
    "express",
    "graphql",
    "trpc",
    "and many more...",
  ];

  return (
    <React.Fragment>
      <Hero />

      <div className="flex flex-wrap gap-1.5">
        {technologies.map((tech, index) => (
          <Badge key={index} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="flex gap-3">
        <Button asChild>
          <Link href="mailto:albertstan30@gmail.com?subject=hey there!">
            <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> reach out via email
          </Link>
        </Button>

        <Button size="icon" asChild>
          <Link href="https://github.com/abesan27">
            <GitHubLogoIcon className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </React.Fragment>
  );
};

export { HeaderSection };
