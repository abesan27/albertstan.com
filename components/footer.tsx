"use client";

import { TypographyMuted } from "@/components/typography";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <div className="space-y-4">
      <Separator />

      <TypographyMuted>built by me</TypographyMuted>
    </div>
  );
};

export { Footer };
