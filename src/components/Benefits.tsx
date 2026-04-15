"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const benefits = [
  {
    icon: "💪",
    title: "Fuerza y resistencia",
    desc: "Quemás calorías, ganás músculo y mejorás tu estado físico general.",
  },
  {
    icon: "🧠",
    title: "Confianza real",
    desc: "Conocés los límites de tu cuerpo y los superás constantemente.",
  },
  {
    icon: "🥋",
    title: "Técnica desde cero",
    desc: "Aprendés a moverte bien antes de cualquier contacto.",
  },
  {
    icon: "🤝",
    title: "Comunidad real",
    desc: "Un equipo que se acompaña dentro y fuera del tatami.",
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-rap-negro pt-20 md:pt-28 pb-4 md:pb-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-6xl text-rap-blanco tracking-wide mb-4">
            ¿POR QUÉ MUAY THAI?
          </h2>
          <div className="w-16 h-1 bg-rap-rojo mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-rap-gris border border-rap-dorado/20 p-8 hover:border-rap-dorado/60 transition-colors duration-300 group"
            >
              <span className="text-4xl block mb-5">{b.icon}</span>
              <h3 className="font-display text-xl md:text-2xl text-rap-dorado tracking-wide mb-3">
                {b.title}
              </h3>
              <p className="font-body text-rap-blanco/70 text-sm md:text-base leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
