"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock } from "lucide-react";

const schedules = [
  {
    days: "Lunes y Miércoles",
    time: "21:00 – 22:30",
    type: "Recreativo y Competidores",
  },
  {
    days: "Martes y Jueves",
    time: "18:00 – 19:00",
    type: "Recreativo",
  },
];

export default function Schedule() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-rap-negro pt-10 md:pt-14 pb-20 md:pb-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-4xl md:text-6xl text-rap-blanco tracking-wide mb-4">
            HORARIOS
          </h2>
          <div className="w-16 h-1 bg-rap-rojo mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {schedules.map((s, i) => (
            <motion.div
              key={s.days}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-rap-gris border border-rap-rojo/40 p-8 hover:border-rap-rojo transition-colors duration-300"
            >
              <Clock className="text-rap-dorado mb-4" size={28} />
              <h3 className="font-display text-2xl md:text-3xl text-rap-blanco tracking-wide mb-2">
                {s.days}
              </h3>
              <p className="font-display text-3xl md:text-4xl text-rap-dorado tracking-wide mb-3">
                {s.time}
              </p>
              <p className="font-body text-rap-blanco/60 text-sm tracking-widest uppercase">
                {s.type}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-rap-blanco/50 text-sm text-center mt-10 max-w-md mx-auto leading-relaxed"
        >
          Recomendamos empezar con 2 veces por semana. Si tus horarios no coinciden,
          podemos adaptarlo.
        </motion.p>
      </div>
    </section>
  );
}
