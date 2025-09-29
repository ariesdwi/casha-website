import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* <Features /> */}
      <Pricing />
      <Testimonials />
      {/* <About />
      <CTASection /> */}
      <Footer />
    </main>
  );
}