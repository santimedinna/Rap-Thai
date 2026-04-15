"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const images = [
  { src: "/images/entrenamiento.jpeg",    alt: "Clase de Muay Thai en Rap Thai Córdoba" },
  { src: "/images/entrenamiento-1.jpeg",  alt: "Alumnos entrenando técnica de patadas en Rap Thai" },
  { src: "/images/entrnamiento-3.jpeg",   alt: "Trabajo en pads durante entrenamiento de Muay Thai" },
  { src: "/images/entrenamiento-2.jpeg",  alt: "Sparring controlado en el gimnasio Rap Thai" },
  { src: "/images/entrnamiento-4.jpeg",   alt: "Calentamiento grupal en clase de Muay Thai Córdoba" },
  { src: "/images/entrenamiento-5.jpeg",  alt: "Alumno practicando golpes de puño con guantes" },
  { src: "/images/entrenamiento-6.jpeg",  alt: "Entrenamiento de patada circular en Rap Thai" },
  { src: "/images/entrnamiento-7.jpeg",   alt: "Profesor Nicolás Gutiérrez corrigiendo técnica" },
  { src: "/images/entrenamiento-8.jpeg",  alt: "Clase nocturna de Muay Thai en Rap Thai Córdoba" },
  { src: "/images/entrnamiento-9.jpeg",   alt: "Alumnos trabajando en parejas con escudos" },
  { src: "/images/entrenamiento-10.jpeg", alt: "Sesión de entrenamiento físico en Rap Thai" },
  { src: "/images/entrnamiento-11.jpeg",  alt: "Técnica de rodilla en clase de Muay Thai" },
  { src: "/images/entrnamiento-12.jpeg",  alt: "Grupo de alumnos al finalizar entrenamiento en Rap Thai" },
  { src: "/images/entrnamiento-13.jpeg",  alt: "Interior del gimnasio Rap Thai Muay Thai Córdoba" },
];

// Celdas más altas en posiciones 0, 4, 9 para efecto masonry
const tallCells = new Set([0, 4, 9]);

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const lightboxPrev = () => setLightbox((i) => (i! - 1 + images.length) % images.length);
  const lightboxNext = () => setLightbox((i) => (i! + 1) % images.length);

  return (
    <section className="bg-rap-gris pt-10 md:pt-14 pb-10 md:pb-14 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-4xl md:text-6xl text-rap-blanco tracking-wide mb-4">
            EL GIMNASIO
          </h2>
          <div className="w-16 h-1 bg-rap-rojo mx-auto" />
        </motion.div>

        {/* Grid masonry */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px]">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              onClick={() => openLightbox(i)}
              className={`relative overflow-hidden cursor-pointer group ${
                tallCells.has(i) ? "row-span-2" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 font-display text-rap-blanco text-base tracking-widest transition-opacity duration-300">
                  VER →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="[LINK_INSTAGRAM]"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-rap-blanco/60 hover:text-rap-dorado transition-colors duration-200 text-sm tracking-wide"
          >
            <InstagramIcon size={18} />
            Seguinos en Instagram para más contenido
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Cerrar */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-rap-blanco/70 hover:text-rap-blanco transition-colors z-10"
              aria-label="Cerrar"
            >
              <X size={32} />
            </button>

            {/* Flecha izquierda */}
            <button
              onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-rap-blanco/70 hover:text-rap-blanco transition-colors z-10 bg-black/40 p-2 hover:bg-black/70"
              aria-label="Anterior"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Imagen */}
            <motion.div
              key={lightbox}
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl max-h-[85vh] aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>

            {/* Flecha derecha */}
            <button
              onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-rap-blanco/70 hover:text-rap-blanco transition-colors z-10 bg-black/40 p-2 hover:bg-black/70"
              aria-label="Siguiente"
            >
              <ChevronRight size={32} />
            </button>

            {/* Contador */}
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-body text-rap-blanco/40 text-sm">
              {lightbox + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
