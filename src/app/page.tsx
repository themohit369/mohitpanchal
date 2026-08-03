import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Testimonials from "@/components/sections/Testimonials";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <About />
      <Experience />
      <Testimonials />
      <Footer />
    </main>
  );
}
