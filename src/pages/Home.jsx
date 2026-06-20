import React from "react";
import Navbar from "@/components/gifted/Navbar";
import HeroSection from "@/components/gifted/HeroSection";
import TickerBanner from "@/components/gifted/TickerBanner";
import MissionVisionSection from "@/components/gifted/MissionVisionSection";
import AboutSection from "@/components/gifted/AboutSection";
import WorshipSection from "@/components/gifted/WorshipSection";
import JoinSection from "@/components/gifted/JoinSection";
import ConnectSection from "@/components/gifted/ConnectSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0618]">
      <Navbar />
      <HeroSection />
      <TickerBanner />
      <MissionVisionSection />
      <AboutSection />
      <WorshipSection />
      <JoinSection />
      <ConnectSection />
    </div>
  );
}