import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { TimelineSection } from "@/components/sections/TimelineSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSection />
      <TimelineSection />
      <Footer />
    </>
  );
}
