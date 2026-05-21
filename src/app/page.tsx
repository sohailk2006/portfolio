"use client";

import CanvasParticles from "@/components/CanvasParticles";
import AIChatbot from "@/components/AIChatbot";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Interests from "@/components/Interests";
import Skills from "@/components/Skills";
import CodingProfiles from "@/components/CodingProfiles";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 relative">
      <CanvasParticles />
      <Navbar />
      <Hero />
      <About />
      <Interests />
      <Skills />
      <CodingProfiles />
      <Projects />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
      <AIChatbot />
      <AnalyticsDashboard />
    </main>
  );
}

