import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Experience from "@/components/sections/Experience";
import WritingSection from "@/components/content/WritingSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <About />
      <Services />
      <Experience />
      <Testimonials />
      <WritingSection />
      <Footer />
    </main>
  );
}
