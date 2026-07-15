import Navbar from "@/components/clipzy/Navbar";
import Hero from "@/components/clipzy/Hero";
import LogoMarquee from "@/components/clipzy/LogoMarquee";
import ProcessSteps from "@/components/clipzy/ProcessSteps";
import WorksCarousel from "@/components/clipzy/WorksCarousel";
import StoryStats from "@/components/clipzy/StoryStats";
import ServicesGrid from "@/components/clipzy/ServicesGrid";
import HireBanner from "@/components/clipzy/HireBanner";
import Testimonials from "@/components/clipzy/Testimonials";
import Pricing from "@/components/clipzy/Pricing";
import Footer from "@/components/clipzy/Footer";

export default function ClipzyPreviewPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <ProcessSteps />
        <WorksCarousel />
        <StoryStats />
        <ServicesGrid />
        <HireBanner />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
