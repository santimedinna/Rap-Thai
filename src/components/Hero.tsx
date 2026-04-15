"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/5493517738904?text=Hola!%20Vi%20la%20p%C3%A1gina%20de%20Rap%20Thai%20y%20me%20gustar%C3%ADa%20reservar%20mi%20primera%20clase%20gratis%20%F0%9F%A5%8A";

const TRANSITION = "transform 0.1s ease-out";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (isMobile) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setOffset({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  const t = (factor: number) =>
    isMobile
      ? undefined
      : `translate(${offset.x * factor}px, ${offset.y * factor}px)`;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Capa 1: video + overlay (z-0) ── */}
      <div
        className="absolute z-0"
        style={{
          inset: "-3%",
          transform: t(0.01),
          transition: TRANSITION,
        }}
      >
        {/* Fallback */}
        <div className="absolute inset-0 bg-rap-gris" />
        {/* Video — solo portrait */}
        <video
          className="absolute inset-0 w-full h-full object-cover landscape:hidden"
          src="/videos/edit_hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Diagonal bottom edge — fuera del parallax para no descubrir bordes */}
      <div
        className="hidden md:block absolute bottom-0 left-0 right-0 h-24 bg-rap-negro z-30"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
      />

      {/* ── Capa 2: texto (z-10) ── */}
      <div
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full [text-shadow:0_2px_12px_rgba(0,0,0,0.9)] md:[text-shadow:none]"
        style={{
          transform: t(0.02),
          transition: TRANSITION,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-body text-rap-dorado text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            Solo 8 lugares por turno
          </p>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-rap-blanco leading-none tracking-wide mb-6">
            APRENDE MUAY THAI {" "}
            <br />
            <span className="text-rap-dorado">EN CÓRDOBA</span>
          </h1>
          <p className="font-body text-rap-blanco/80 text-lg md:text-xl mb-10">
            Entrena desde cero. Ponete en forma, liberá estrés y ganá confianza.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-display text-xl md:text-2xl tracking-widest bg-rap-dorado text-rap-negro px-10 py-4 hover:bg-rap-dorado/90 transition-all duration-200 hover:scale-105 active:scale-95 [text-shadow:none]"
          >
            PROBA UNA CLASE GRATIS
          </a>
        </motion.div>
      </div>

      {/* ── Capa 3: figura luchador (z-20) — solo desktop ── */}
      <div
        className="absolute bottom-0 right-0 h-full pointer-events-none z-20 hidden md:block"
        style={{
          transform: t(0.035),
          transition: TRANSITION,
        }}
      >
        <Image
          src="/images/luchador.png"
          alt="Luchador Rap Thai"
          width={600}
          height={900}
          className="h-full w-auto object-contain object-right-bottom"
          priority
        />
      </div>
    </section>
  );
}
