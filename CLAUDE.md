# CLAUDE.md – Landing Page Rap Thai Muay Thai

## Objetivo del proyecto

Crear una **landing page de alta conversión** para el gimnasio de Muay Thai **Rap Thai**, ubicado en Córdoba, Argentina. El objetivo principal es que el visitante haga clic en el CTA y se comunique por WhatsApp para reservar su primera clase gratis.

---

## Stack técnico

- **Next.js** con App Router (`/src/app`)
- **TypeScript**
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones (`npm install framer-motion`)
- **Lucide React** para íconos (`npm install lucide-react`)
- Todo en una sola página (`src/app/page.tsx`) con componentes separados en `src/components/`

---

## Estructura de carpetas esperada

```
src/
├── app/
│   ├── layout.tsx        # Metadata, fuentes Google, configuración global
│   ├── page.tsx          # Página principal que ensambla todos los componentes
│   └── globals.css       # Variables CSS y estilos base
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Benefits.tsx
│   ├── Coach.tsx
│   ├── Schedule.tsx
│   ├── Gallery.tsx
│   ├── FAQ.tsx
│   ├── Pricing.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx   # Botón flotante mobile
public/
├── images/               # Carpeta para imágenes reales (placeholder por ahora)
└── videos/               # Carpeta para videos reales (placeholder por ahora)
```

---

## Identidad visual

### Paleta de colores
Definir en `tailwind.config.ts` como colores personalizados:

```ts
colors: {
  'rap-negro':  '#0A0A0A',
  'rap-gris':   '#1A1A1A',
  'rap-rojo':   '#C0272D',
  'rap-dorado': '#C9A84C',
  'rap-blanco': '#F5F5F5',
}
```

### Tipografía
Importar desde Google Fonts en `layout.tsx`:
- **Bebas Neue** → títulos, headings, CTA
- **Barlow** → cuerpo de texto, descripciones, precios

Configurar en `tailwind.config.ts` como `font-display` y `font-body`.

### Estética general
- Dark, intensa y premium — como un gimnasio serio, no un spa
- Textura de ruido/grain sutil como pseudo-elemento en el fondo
- Uso de diagonales con `clip-path` para separar secciones
- Animaciones de entrada con Framer Motion (`fadeInUp` escalonado al hacer scroll)
- El dorado se usa SOLO para lo más importante: CTA, precio, nombre del profesor, detalles clave
- NUNCA usar gradientes violetas ni estéticas genéricas

---

## Secciones de la página (en orden)

### 1. HEADER (sticky)
- Fondo negro semitransparente con blur (`backdrop-blur`)
- Logo placeholder a la izquierda: `[LOGO_RAP_THAI]`
- Botón CTA pequeño a la derecha en dorado: `CLASE GRATIS →`
- Se vuelve visible con sombra al hacer scroll

### 2. HERO
- Video de fondo en loop: `public/videos/[VIDEO_HERO].mp4` con overlay oscuro (`bg-black/60`)
- Atributos del video: `autoPlay muted loop playsInline`
- Fallback: imagen `public/images/[IMAGEN_HERO].jpg` como `poster`
- Contenido centrado:
  - Título: `ENTRENÁ MUAY THAI EN CÓRDOBA` (Bebas Neue, enorme)
  - Subtítulo: `Primera clase gratis. Sin experiencia previa.`
  - CTA principal (botón dorado, grande): `→ QUIERO MI CLASE GRATIS`
  - El botón abre WhatsApp con mensaje predefinido

### 3. BENEFICIOS
Grid de 4 cards (2x2 en mobile, 4 columnas en desktop):
- 💪 **Fuerza y resistencia** — Quemás calorías, ganás músculo y mejorás tu estado físico general
- 🧠 **Confianza real** — Conocés los límites de tu cuerpo y los superás constantemente
- 🥋 **Técnica desde cero** — Aprendés a moverte bien antes de cualquier contacto
- 🤝 **Comunidad real** — Un equipo que se acompaña dentro y fuera del tatami

Cards con borde dorado sutil, fondo `rap-gris`, animación de entrada escalonada.

### 4. SOBRE EL PROFESOR
Layout de dos columnas (imagen izquierda, texto derecha):
- Imagen placeholder: `public/images/[FOTO_NICOLAS].jpg`
- Nombre en dorado: **Nicolás Gutiérrez**
- Título: Profesor y competidor de Muay Thai
- Texto: "Vas a aprender de alguien que entrena en serio. Nicolás combina experiencia competitiva con una enseñanza progresiva, adaptada a cada alumno sin importar su nivel."
- Un detalle decorativo en rojo (línea o acento) para jerarquía visual

### 5. HORARIOS
Cards visuales con los horarios:

| Día | Horario | Tipo |
|-----|---------|------|
| Lunes y Miércoles | 18:30 – 22:00 | Recreativo y Competidores |
| Martes y Jueves | 19:00 – 20:00 | Recreativo |

- Aclaración: "Recomendamos empezar con 2 veces por semana. Si tus horarios no coinciden, podemos adaptarlo."
- Diseño: cards en `rap-gris` con borde en `rap-rojo`, ícono de reloj en dorado

### 6. GALERÍA
Grid asimétrico (estilo masonry simulado con CSS Grid) de fotos y videos del gimnasio.

Placeholders marcados claramente:
- `public/images/gallery-1.jpg` a `public/images/gallery-6.jpg`
- `public/videos/gallery-video-1.mp4` (opcional, máximo 1 video en galería)

Comportamiento:
- Las imágenes tienen hover con zoom sutil (`scale-105`, `transition`)
- El video se reproduce en loop y muted al hacer hover
- Al hacer clic en una imagen se abre un lightbox simple (modal con la imagen ampliada)
- Debajo de la galería: link al Instagram → `[LINK_INSTAGRAM]` con texto "Seguinos en Instagram para más contenido"

### 7. FAQ (Preguntas Frecuentes)
Acordeón interactivo — solo una pregunta abierta a la vez. Usar estado de React (`useState`).
Animación de apertura/cierre con Framer Motion (`AnimatePresence`).

Incluir TODAS estas preguntas en este orden exacto:

1. **¿Qué beneficios tiene entrenar Muay Thai?**
   Mejora tu fuerza, flexibilidad, movilidad y resistencia. También desarrollás reflejos, coordinación y una gran confianza en vos mismo al conocer los límites de tu cuerpo y superarlos constantemente.

2. **¿Voy a recibir golpes desde el primer día?**
   No. Primero aprendés a pegar correctamente: guardia, golpes rectos, ganchos, patadas frontales y circulares. Cuando tenés una base sólida, podés empezar con sparring de forma progresiva, siempre cuidando al compañero y priorizando el aprendizaje.

3. **¿Cuántas veces por semana entreno?**
   Recomendamos empezar con dos clases por semana: lunes y miércoles, o martes y jueves. Si tus horarios no coinciden, podemos adaptarlo.

4. **¿Es obligatorio hacer sparring o pelear?**
   Nadie te va a obligar. Podés entrenar con pads y escudos sin necesidad de hacer combate. Pero si querés progresar, en algún momento el contacto es parte natural del aprendizaje.

5. **¿Es un deporte peligroso?**
   En el gimnasio entrenamos con responsabilidad: nos cuidamos entre todos y trabajamos como equipo. El objetivo no es lastimar, sino mejorar.

6. **¿Tengo que competir?**
   No. Podés aprender todas las técnicas sin necesidad de competir. Con el tiempo vas a notar cómo el miedo disminuye y tu confianza crece.

7. **¿Qué equipo necesito para empezar?**
   Para empezar solo necesitás vendas y protector bucal. Más adelante sumás guantes y tibiales. El protector inguinal es opcional pero recomendable.

8. **¿Es un deporte solo para gente agresiva?**
   Para nada. Los deportes de contacto ayudan a canalizar la energía, reducir el estrés y aprender a controlar las emociones. No hace falta ser agresivo.

9. **¿Sirve para bajar de peso?**
   Sí. Es una de las formas más efectivas de quemar calorías y mejorar tu estado físico general.

10. **¿Cuánto cuesta?**
    Las clases tienen un valor de $30.000 mensuales e incluyen dos entrenamientos semanales con el profesor Nicolás Gutiérrez.

### 8. PRECIO + CTA FINAL
Card centrada destacada:
- Precio en grande (dorado): **$30.000 / mes**
- Lista de lo incluido:
  - ✓ 2 entrenamientos semanales
  - ✓ Profesor Nicolás Gutiérrez
  - ✓ Apto para todos los niveles
- CTA final: `→ QUIERO MI CLASE GRATIS` (igual que el hero)
- Texto debajo: *"Sin compromiso. La primera clase es completamente gratis."*

### 9. FOOTER
- Logo placeholder: `public/images/[LOGO_RAP_THAI].png`
- Dirección: Javier Díaz 597, Córdoba, Argentina
- Instagram: ícono + `[INSTAGRAM_HANDLE]` → enlaza a `[LINK_INSTAGRAM]`
- WhatsApp: ícono + `[NUMERO_WHATSAPP]`
- Copyright: © 2025 Rap Thai. Todos los derechos reservados.

### 10. WHATSAPP BUTTON (flotante)
- Componente `WhatsAppButton.tsx`
- Visible solo en mobile (hidden en `md:` y superior)
- Posición fija, esquina inferior derecha
- Ícono de WhatsApp en verde sobre fondo oscuro
- Abre el mismo link de WhatsApp que el CTA principal

---

## Links de WhatsApp

Todos los botones y links de WhatsApp deben usar este formato:
```
https://wa.me/[NUMERO_WHATSAPP]?text=[MENSAJE_WHATSAPP_ENCODED]
```

Mensaje sugerido (sin encodear):
```
Hola! Vi la página de Rap Thai y me gustaría reservar mi primera clase gratis 🥊
```

---

## Placeholders a reemplazar

Todos marcados con corchetes para búsqueda fácil con Ctrl+Shift+F:

| Placeholder | Descripción |
|-------------|-------------|
| `[NUMERO_WHATSAPP]` | Número sin + ni espacios. Ej: `5493512345678` |
| `[MENSAJE_WHATSAPP_ENCODED]` | Mensaje URL-encodeado para el link de WhatsApp |
| `[LINK_INSTAGRAM]` | URL completa del perfil de Instagram |
| `[INSTAGRAM_HANDLE]` | @usuario de Instagram. Ej: `@rapthaioficial` |
| `[LOGO_RAP_THAI]` | Ruta al logo. Ej: `public/images/logo.png` |
| `[FOTO_NICOLAS]` | Ruta a la foto del profesor |
| `[VIDEO_HERO]` | Nombre del video de fondo del hero |
| `[IMAGEN_HERO]` | Imagen de fallback para el hero |
| `gallery-1.jpg` … `gallery-6.jpg` | Fotos reales del gimnasio |

---

## Animaciones (Framer Motion)

- **Hero**: fade in desde abajo al cargar la página
- **Benefits cards**: entrada escalonada con `delay` incremental al entrar en viewport
- **Coach section**: slide desde la izquierda (imagen) y derecha (texto)
- **FAQ**: `AnimatePresence` para la apertura/cierre del acordeón
- **Gallery**: fade in al entrar en viewport
- Usar `useInView` de Framer Motion para trigger de animaciones al hacer scroll

---

## Tono del copy

- Directo, honesto, sin exageraciones
- Tuteo rioplatense: "vas a aprender", "empezá hoy", "te va a costar"
- No usar frases genéricas de marketing como "transforma tu vida" o "el mejor gimnasio"
- Transmitir seriedad y comunidad al mismo tiempo

---

## Lo que NO hacer

- No usar Inter, Roboto, Arial ni fuentes de sistema
- No usar gradientes violetas ni estéticas genéricas
- No hardcodear número de WhatsApp ni links: usar placeholders
- No inventar información que no está en este documento
- No usar imágenes de stock de internet: solo placeholders con `bg-rap-gris` y texto descriptivo
- No usar `<form>` HTML nativo — usar eventos de React

---

## Dependencias a instalar

Después de crear el proyecto con `create-next-app`, instalar:

```bash
npm install framer-motion lucide-react
```

---

## Checklist antes de entregar

- [ ] Estructura de carpetas y componentes creada
- [ ] Colores personalizados en `tailwind.config.ts`
- [ ] Fuentes Bebas Neue y Barlow importadas en `layout.tsx`
- [ ] Todos los componentes implementados y ensamblados en `page.tsx`
- [ ] Responsive en mobile, tablet y desktop
- [ ] Todos los placeholders marcados con `[MAYUSCULAS]`
- [ ] CTA principal, header y botón flotante abren WhatsApp
- [ ] FAQ acordeón funciona con animación
- [ ] Galería con lightbox funcional
- [ ] Animaciones de scroll con Framer Motion activadas
- [ ] Video hero con fallback de imagen
- [ ] Footer completo con dirección, Instagram y WhatsApp