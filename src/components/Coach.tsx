"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  "/images/foto_nicolas.jpeg",
  "/images/foto_nicolas_1.jpeg",
  "/images/foto_nicolas_2.jpeg",
  "/images/foto_nicolas_3.jpeg",
];

export default function Coach() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <section className="bg-rap-gris py-20 md:py-28 px-4 sm:px-6 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Carrusel */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative aspect-[3/4] bg-rap-negro overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {photos.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`Nicolás Gutiérrez, profesor de Muay Thai en Rap Thai Córdoba – foto ${i + 1}`}
              fill
              className="object-cover transition-opacity duration-700"
              style={{ opacity: i === current ? 1 : 0 }}
              priority={i === 0}
            />
          ))}

          {/* Flechas */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 text-rap-blanco p-1.5 transition-colors duration-200"
            aria-label="Foto anterior"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 text-rap-blanco p-1.5 transition-colors duration-200"
            aria-label="Foto siguiente"
          >
            <ChevronRight size={22} />
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: i === current ? "#C9A84C" : "rgba(245,245,245,0.3)",
                  transform: i === current ? "scale(1.3)" : "scale(1)",
                }}
                aria-label={`Foto ${i + 1}`}
              />
            ))}
          </div>

          {/* Acento decorativo */}
          <div className="absolute top-0 left-0 w-1 h-24 bg-rap-rojo z-10" />
          <div className="absolute top-0 left-0 w-24 h-1 bg-rap-rojo z-10" />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <p className="font-body text-rap-rojo text-sm tracking-[0.3em] uppercase mb-4">
            Sobre el profesor
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-rap-dorado tracking-wide leading-none mb-2">
            NICOLÁS
            <br />
            GUTIÉRREZ
          </h2>
          <p className="font-body text-rap-blanco/60 text-base mb-8 tracking-wide">
            Profesor y competidor de Muay Thai
          </p>

          <div className="w-12 h-0.5 bg-rap-rojo mb-8" />

          <p className="font-body text-rap-blanco/80 text-base md:text-lg leading-relaxed">
            Vas a aprender de alguien que vive el Muay Thai. Con más de 13 años de entrenamiento 
            y 6 formando alumnos, Nicolás se mantiene activo aprendiendo y mejorando día a día
            en el Diamond Muay Thai Team, una de las escuelas más sólidas de Córdoba, junto a 
            peleadores profesionales con experiencias internacionales. 
            Esto se nota en su forma de enseñar ya que, no solo enseña técnicas, 
            Nico te acompaña en el proceso para convertirte en tu mejor version. 
            Ha guiado a más de 50 personas a superar sus límites, acompañando a muchos de ellos
            en todos los pasos hasta conseguir el Prajiad rojo y logrando que alumnos que 
            empezaron desde cero hoy compitan bajo la bandera del Diamante.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
