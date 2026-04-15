"use client";

import Image from "next/image";

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon({ size = 14 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-rap-negro border-t border-white/5 px-4 sm:px-6">

      {/* ── Mobile ── */}
      <div className="md:hidden py-6 flex flex-col items-center gap-3 text-center">
        <Image src="/images/logo.webp" alt="Rap Thai" width={40} height={40} className="h-10 w-auto object-contain" />
        <div>
          <p className="font-display text-xl text-rap-blanco tracking-widest leading-none">RAP THAI</p>
          <p className="font-body text-rap-blanco/60 text-xs mt-0.5">Muay Thai de alto rendimiento en Córdoba</p>
        </div>

        {/* Redes en una línea */}
        <div className="flex items-center gap-4 text-xs font-body text-rap-blanco/60">
          <a href="https://www.instagram.com/rapthai.mt/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-rap-dorado transition-colors duration-200">
            <InstagramIcon size={13} /> RapThai.mt
          </a>
          <span className="text-rap-blanco/60">|</span>
          <a href="https://wa.me/5493517738904" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-rap-dorado transition-colors duration-200">
            <WhatsAppIcon size={13} /> Habla con Nico
          </a>
        </div>

        {/* Dirección */}
        <a href="https://maps.app.goo.gl/hJkWLBD1bnER2pDP7" target="_blank" rel="noopener noreferrer"
          className="font-body text-rap-blanco/70 text-xs hover:text-rap-dorado transition-colors duration-200">
          Javier Díaz 597, Córdoba
        </a>

        <p className="font-body text-rap-blanco/60 text-xs">© 2025 Rap Thai. Todos los derechos reservados.</p>
      </div>

      {/* ── Desktop ── */}
      <div className="hidden md:block max-w-7xl mx-auto py-12">
        <div className="flex items-start justify-between gap-10">

          {/* Logo + nombre */}
          <div className="flex flex-col items-start gap-3">
            <Image src="/images/logo.webp" alt="Rap Thai" width={56} height={56} className="h-14 w-auto object-contain" />
            <div>
              <p className="font-display text-2xl text-rap-blanco tracking-widest leading-none mb-1">Rap Thai</p>
              <p className="font-body text-rap-blanco/60 text-xs tracking-wide">Muay Thai de alto rendimiento en Córdoba</p>
            </div>
          </div>

          {/* Columnas info */}
          <div className="flex gap-16 text-left">
            <div>
              <p className="font-body text-rap-blanco/60 text-xs tracking-[0.2em] uppercase mb-3">Ubicación</p>
              <a href="https://maps.app.goo.gl/hJkWLBD1bnER2pDP7" target="_blank" rel="noopener noreferrer"
                className="font-body text-rap-blanco/70 text-sm leading-relaxed hover:text-rap-dorado transition-colors duration-200">
                Javier Díaz 597<br />Córdoba, Argentina
              </a>
            </div>
            <div>
              <p className="font-body text-rap-blanco/60 text-xs tracking-[0.2em] uppercase mb-3">Redes</p>
              <a href="https://www.instagram.com/rapthai.mt/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-rap-blanco/70 text-sm hover:text-rap-dorado transition-colors duration-200 mb-2">
                <InstagramIcon size={16} /> RapThai.mt
              </a>
              <a href="https://wa.me/5493517738904" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-rap-blanco/70 text-sm hover:text-rap-dorado transition-colors duration-200">
                <WhatsAppIcon size={16} /> Habla con Nico
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-8 text-center">
          <p className="font-body text-rap-blanco/60 text-xs">© 2025 Rap Thai. Todos los derechos reservados.</p>
        </div>
      </div>

    </footer>
  );
}
