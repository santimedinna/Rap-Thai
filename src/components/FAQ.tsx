"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Qué beneficios tiene entrenar Muay Thai?",
    a: "Mejora tu fuerza, flexibilidad, movilidad y resistencia. También desarrollás reflejos, coordinación y una gran confianza en vos mismo al conocer los límites de tu cuerpo y superarlos constantemente.",
  },
  {
    q: "¿Voy a recibir golpes desde el primer día?",
    a: "No. Primero aprendés a pegar correctamente: guardia, golpes rectos, ganchos, patadas frontales y circulares. Cuando tenés una base sólida, podés empezar con sparring de forma progresiva, siempre cuidando al compañero y priorizando el aprendizaje.",
  },
  {
    q: "¿Cuántas veces por semana entreno?",
    a: "Recomendamos empezar con dos clases por semana: lunes y miércoles, o martes y jueves. Si tus horarios no coinciden, podemos adaptarlo.",
  },
  {
    q: "¿Es obligatorio hacer sparring o pelear?",
    a: "Nadie te va a obligar. Podés entrenar con pads y escudos sin necesidad de hacer combate. Pero si querés progresar, en algún momento el contacto es parte natural del aprendizaje.",
  },
  {
    q: "¿Es un deporte peligroso?",
    a: "En el gimnasio entrenamos con responsabilidad: nos cuidamos entre todos y trabajamos como equipo. El objetivo no es lastimar, sino mejorar.",
  },
  {
    q: "¿Tengo que competir?",
    a: "No. Podés aprender todas las técnicas sin necesidad de competir. Con el tiempo vas a notar cómo el miedo disminuye y tu confianza crece.",
  },
  {
    q: "¿Qué equipo necesito para empezar?",
    a: "Para empezar solo necesitás vendas y protector bucal. Más adelante sumás guantes y tibiales. El protector inguinal es opcional pero recomendable.",
  },
  {
    q: "¿Es un deporte solo para gente agresiva?",
    a: "Para nada. Los deportes de contacto ayudan a canalizar la energía, reducir el estrés y aprender a controlar las emociones. No hace falta ser agresivo.",
  },
  {
    q: "¿Sirve para bajar de peso?",
    a: "Sí. Es una de las formas más efectivas de quemar calorías y mejorar tu estado físico general.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Las clases tienen un valor de $30.000 mensuales e incluyen dos entrenamientos semanales con el profesor Nicolás Gutiérrez.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-rap-negro pt-10 md:pt-14 pb-20 md:pb-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-4xl md:text-6xl text-rap-blanco tracking-wide mb-4">
            PREGUNTAS FRECUENTES
          </h2>
          <div className="w-16 h-1 bg-rap-rojo mx-auto" />
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-rap-gris border border-white/5"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span className="font-body font-semibold text-rap-blanco text-sm md:text-base pr-4 group-hover:text-rap-dorado transition-colors duration-200">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-rap-dorado flex-shrink-0"
                >
                  <ChevronDown size={20} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-rap-blanco/60 text-sm md:text-base leading-relaxed px-6 pb-5">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
