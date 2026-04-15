"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    photo: "",
    initials: "S",
    name: "Santiago",
    label: "Alumno desde 2024 · Competidor",
    text: "Desde chiquito quería hacer boxeo, pero no me dejaron porque pensaban que eran ambientes muy violentos. Con mucho humor y mucho esfuerzo Nico me ayudó a cumplirle un sueño a mi yo de 6 años.",
  },
  {
    photo: "",
    initials: "S",
    name: "Samuel",
    label: "Alumno desde 2023 · Recreativo",
    text: "No hay mejor terapia después de un día de full estrés del laburo que entrar al tatami con los chicos. Risas, golpes y transpiración, mi verdadero cable a tierra.",
  },
  {
    photo: "",
    initials: "D",
    name: "Damián",
    label: "Alumno desde 2020 · Recreativo",
    text: "He practicado artes marciales desde chico y como profesional de la actividad física soy muy exigente con dónde entreno. Elegí Rap Thai porque Nico tiene una base técnica impecable.",
  },
  {
    photo: "",
    initials: "S",
    name: "Sofía",
    label: "Alumna desde 2024 · Futura competidora",
    text: "Desde mis 4 años practico danza, nunca había hecho un deporte de contacto. Hoy me siento super segura y con una confianza que antes no tenía. Me preparo camino a mi primera experiencia en el ring.",
  },
];

function Avatar({ photo, initials, name }: { photo: string; initials: string; name: string }) {
  const [error, setError] = useState(false);

  if (!photo || error) {
    return (
      <div className="w-16 h-16 rounded-full bg-rap-rojo flex items-center justify-center flex-shrink-0">
        <span className="font-display text-2xl text-rap-blanco">{initials}</span>
      </div>
    );
  }

  return (
    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
      <Image
        src={photo}
        alt={name}
        fill
        className="object-cover"
        onError={() => setError(true)}
      />
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-rap-negro py-10 md:py-14 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-6xl text-rap-blanco tracking-wide mb-4">
            LO QUE DICEN LOS CHICOS
          </h2>
          <div className="w-16 h-1 bg-rap-rojo" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name + i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-rap-gris border-l-2 border-rap-rojo pl-6 pr-6 py-8 flex flex-col gap-5"
            >
              {/* Foto + nombre */}
              <div className="flex items-center gap-4">
                <Avatar photo={t.photo} initials={t.initials} name={t.name} />
                <div>
                  <p className="font-display text-xl text-rap-blanco tracking-wide leading-none mb-1">
                    {t.name}
                  </p>
                  <p className="font-body text-rap-blanco/70 text-xs tracking-wide">
                    {t.label}
                  </p>
                </div>
              </div>

              {/* Testimonio */}
              <p className="font-body text-rap-blanco/70 text-sm md:text-base leading-relaxed italic">
                {t.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
