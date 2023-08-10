"use client";

import { Container } from "@/components/container";
import { Separator } from "@/components/ui/separator";
import { WorkSection } from "@/components/work-section";
import { HeaderSection } from "@/components/header-section";

const Home = () => {
  return (
    <Container>
      <HeaderSection />

      <Separator />

      <WorkSection />
    </Container>
  );
};

export default Home;
