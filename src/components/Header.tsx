"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/5493517738904?text=Hola!%20Vi%20la%20p%C3%A1gina%20de%20Rap%20Thai%20y%20me%20gustar%C3%ADa%20reservar%20mi%20primera%20clase%20gratis%20%F0%9F%A5%8A";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${
        scrolled
          ? "bg-rap-negro/90 backdrop-blur-md shadow-lg shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <Image
          src="/images/logo.webp"
          alt="Rap Thai"
          width={56}
          height={56}
          className="h-12 md:h-14 w-auto object-contain"
          priority
        />

        {/* CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-sm md:text-base tracking-widest bg-rap-dorado text-rap-negro px-4 py-2 hover:bg-rap-dorado/90 transition-colors duration-200"
        >
          CLASE GRATIS →
        </a>

      </div>
    </header>
  );
}
