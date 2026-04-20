import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Coach from "@/components/Coach";
import Schedule from "@/components/Schedule";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Gallery = dynamic(() => import("@/components/Gallery"));

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
