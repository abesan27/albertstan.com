import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Container } from "@/components/container";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/footer";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "albert stan | full-stack software developer",
  description: "hey there, i'm a software developer that mostly codes typescript",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>{children}</Container>

        <Analytics />
      </body>
    </html>
  );
}
