import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import WhatWeLookAtSection from "@/components/sections/WhatWeLookAtSection";
import WhyChannelyticsSection from "@/components/sections/WhyChannelyticsSection";
import SecondOpinionSection from "@/components/sections/SecondOpinionSection";
import WhoThisIsForSection from "@/components/sections/WhoThisIsForSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
// import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
// import { BlogPostsSection } from "@/components/sections/BlogPostsSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <HowItWorksSection />
      <WhatWeLookAtSection />
      <WhyChannelyticsSection />
      <SecondOpinionSection />
      <WhoThisIsForSection />
      <TestimonialsSection />
      <FAQSection />
      {/* <BlogPostsSection /> */}
      {/* <CaseStudiesSection /> */}
    </MainLayout>
  );
}


