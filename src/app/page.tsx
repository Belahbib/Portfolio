"use client";
import About from "@/components/About";
import Contact from "@/components/contact";
import HeroSection from "@/components/HeroSection";
import { Skills } from "@/components/icons/skills";
import AppLayout from "@/components/Layout/Applayout";
import HorizontalScrollSection from "@/components/Section";
import SidebarVariants from "@/components/ui/SideBar";
import WhatIdo from "@/components/whatIdo";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HomePage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-300px" });

  return (
    <AppLayout>
      <SidebarVariants />
      <HeroSection />
      <About />
      <WhatIdo /> 
      <HorizontalScrollSection />
      <div className="h-screen flex items-center justify-center">
        <Contact />
      </div>
    </AppLayout>
  );
}
