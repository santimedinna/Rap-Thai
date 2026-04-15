import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Schedule from "@/components/Schedule";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// JS-heavy below-fold: carga diferida para no inflar el bundle inicial
const Coach   = dynamic(() => import("@/components/Coach"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const FAQ     = dynamic(() => import("@/components/FAQ"));

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Testimonials />
        <Coach />
        <Schedule />
        <Gallery />
        <FAQ />
        <Pricing />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
