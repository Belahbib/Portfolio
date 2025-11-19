"use client";
import About from "@/components/About";
import Contact from "@/components/contact";
import HeroSection from "@/components/HeroSection";
import AppLayout from "@/components/Layout/Applayout";
import HorizontalScrollSection from "@/components/Section";
import SidebarVariants from "@/components/ui/SideBar";
import WhatIdo from "@/components/whatIdo";

export default function HomePage() {
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
