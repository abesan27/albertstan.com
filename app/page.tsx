"use client";

import { EnvelopeOpenIcon, TwitterLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
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
    <div className="container max-w-[650px] space-y-4 my-10">
      <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl">
        <span className="text-neutral-600">👋 hey there,</span> <br /> i&apos;m albert stan
      </h1>

      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        a full-stack software engineer that mostly codes typescript
      </h4>

      <div className="flex flex-wrap gap-2">
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

        <Button size="icon" asChild>
          <Link href="https://twitter.com/abesan27">
            <TwitterLogoIcon className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <Separator />

      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">my work experience</h4>

      <Card>
        <CardHeader>
          <CardTitle className="-mb-0.5">kubrio.com</CardTitle>
          <CardDescription>front-end engineer</CardDescription>
        </CardHeader>

        <CardContent className="-mt-3">
          <CardDescription>2021 - present</CardDescription>

          <p>where young innovators, makers, and creators build their future</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="-mb-0.5">getwineful.com</CardTitle>
          <CardDescription>ceo & founder</CardDescription>
        </CardHeader>

        <CardContent className="-mt-2">
          <CardDescription>2023 - present</CardDescription>

          <p>the only app for natural wine enthusiasts</p>
        </CardContent>
      </Card>
    </div>
  );
}
