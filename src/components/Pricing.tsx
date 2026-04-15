"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5493517738904?text=Hola!%20Vi%20la%20p%C3%A1gina%20de%20Rap%20Thai%20y%20me%20gustar%C3%ADa%20reservar%20mi%20primera%20clase%20gratis%20%F0%9F%A5%8A";

const includes = [
  "Atención Personalizada: Entrenás en grupos de máximo 8 personas.",
  "Guía Profesional: Clases dictadas directamente por Nicolás Gutiérrez.",
  "Flexibilidad: 2 entrenamientos semanales adaptados a tu ritmo.",
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-rap-gris pt-14 pb-6 px-4 sm:px-6">
      <div className="max-w-xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-4xl md:text-6xl text-rap-blanco tracking-wide mb-4">
            EMPEZÁ HOY
          </h2>
          <div className="w-16 h-1 bg-rap-rojo mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-rap-negro border border-rap-dorado/30 p-10 text-center"
        >
          <p className="font-body text-rap-blanco/50 text-sm tracking-[0.3em] uppercase mb-4">
            TU TRANSFORMACIÓN REAL
          </p>
          <p className="font-display text-6xl md:text-7xl text-rap-dorado tracking-wide mb-2">
            $30.000
          </p>
          <p className="font-body text-rap-blanco/40 text-sm mb-10">/ mes</p>

          <ul className="space-y-4 mb-10 text-left">
            {includes.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <Check size={18} className="text-rap-dorado flex-shrink-0" />
                <span className="font-body text-rap-blanco/80 text-sm md:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block font-display text-xl md:text-2xl tracking-widest bg-rap-dorado text-rap-negro px-8 py-4 hover:bg-rap-dorado/90 transition-all duration-200 hover:scale-105 active:scale-95 w-full text-center"
          >
            QUIERO MI CLASE GRATIS
          </a>

          <p className="font-body text-rap-blanco/30 text-xs mt-5 italic">
            Probá el método sin poner un peso. Si no es para vos, no pagás nada.
          </p>
        </motion.div>
      </div>

      <p className="font-body text-rap-blanco/20 text-xs text-center mt-6">
        Sitio producido por{" "}
        <a
          href="https://www.levelgrowthagency.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-rap-blanco/50 transition-colors duration-200"
        >
          Level Growth
        </a>
      </p>
    </section>
  );
}
