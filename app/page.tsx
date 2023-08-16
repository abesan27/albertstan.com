"use client";

import React from "react";

import { Container } from "@/components/container";
import { Separator } from "@/components/ui/separator";
import { WorkSection } from "@/components/work-section";
import { HeaderSection } from "@/components/header-section";
import { Footer } from "@/components/footer";

const Home = () => {
  React.useEffect(() => {
    console.log("i see you sneaking in here :)");
  }, []);

  return (
    <Container>
      <HeaderSection />

      <Separator />

      <WorkSection />

      <Separator />

      <Footer />
    </Container>
  );
};

export default Home;
