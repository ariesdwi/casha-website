import Hero from "../components/Hero";
import AboutCasha from "../components/AboutCasha";
import ProblemsSolved from "../components/ProblemsSolved";
import WhyCasha from "../components/WhyCasha";
import HowToUse from "../components/HowToUse";
import CashaCapabilities from "../components/CashaCapabilities";
import TargetAudience from "../components/TargetAudience";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutCasha />
      <ProblemsSolved />
      <WhyCasha />
      <HowToUse />
      <CashaCapabilities />
      <TargetAudience />
      <Testimonials />
      <Pricing />
      <CTASection />
      <Footer />
    </main>
  );
}