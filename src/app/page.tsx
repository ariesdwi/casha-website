import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}