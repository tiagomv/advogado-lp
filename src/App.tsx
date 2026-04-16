import { motion } from "motion/react";
import Hero from "./components/Hero";
import About from "./components/About";
import Areas from "./components/Areas";
import Differentials from "./components/Differentials";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppBtn from "./components/WhatsAppBtn";

function Header() {
  return (
    <header className="px-[60px] py-[30px] flex flex-col md:flex-row justify-between items-start md:items-end border-b border-dourado/30 gap-4">
      <div>
        <div className="font-display text-[24px] uppercase font-normal tracking-[2px] text-dourado">Rafael Monteiro</div>
        <div className="font-mono text-[10px] opacity-70 tracking-[1px] mt-1">ADVOGADO • OAB/SP 387.204</div>
      </div>
      <div className="label-tag !mb-0 shrink-0">I. Advocacia Especializada</div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-noite text-marfim selection:bg-dourado/30 flex flex-col pt-3">
      <Header />
      <Hero />
      <About />
      <Areas />
      <Differentials />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppBtn />
    </div>
  );
}
