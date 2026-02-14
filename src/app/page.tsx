import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import Trainers from "@/components/sections/Trainers";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Trainers />
      <Contact />
      <Footer />
    </main>
  );
}
