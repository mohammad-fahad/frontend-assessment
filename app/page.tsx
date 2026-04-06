import Hero from "@/components/sections/Hero";

import Navbar from "@/components/sections/Navbar";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { CurriculumSection } from "@/components/sections/CurriculumSecion";
import { PricingSection } from "@/components/sections/PricingSection";
import { Footer } from "@/components/sections/Footer";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSection />
      <TimelineSection />
      <CurriculumSection />
      <PricingSection />
      <TestimonialSection />
      <Footer />
    </>
  );
}
