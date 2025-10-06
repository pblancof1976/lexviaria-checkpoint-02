// src/App.jsx
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Topbar (iconos a la derecha) */}
      <div className="bg-neutral-900">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-end gap-4">
          
      {/* YouTube */}
      <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube">
      <img
        src={import.meta.env.BASE_URL + 'assets/youtube.png'}
        alt="YouTube"
        className="w-8 h-8 inline-block"
        loading="lazy"
        decoding="async"
          />
        </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
            <img
              src={import.meta.env.BASE_URL + 'assets/linkeding.png'}  // ← así se llama tu archivo
              alt="LinkedIn"
              className="w-8 h-8 inline-block"
              loading="lazy"
              decoding="async"
            />
          </a>

          
          {/* Instagram */}
          <a href="https://www.instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
            <svg width="28" height="28" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="ig" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F58529"/><stop offset="50%" stopColor="#DD2A7B"/><stop offset="100%" stopColor="#8134AF"/>
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig)"/>
              <circle cx="12" cy="12" r="4.2" fill="none" stroke="#FFFFFF" strokeWidth="2"/>
              <circle cx="16.8" cy="7.2" r="1.2" fill="#FFFFFF"/>
            </svg>
          </a>
          {/* Facebook */}
          <a href="https://www.facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
            <svg width="28" height="28" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" fill="#1877F2"/>
              <path fill="#FFFFFF" d="M13.5 9.5V8.1c0-.7.5-1.1 1.3-1.1h1.2V4.9h-2c-2.1 0-3.5 1.2-3.5 3.3v1.3H9v2.3h1.5V19h2.5v-5.2h2l.3-2.3h-2.3Z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Header / Nav */}
      <header className="bg-white sticky top-0 z-40 border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-yellow-500" />
            <div className="leading-tight">
              <div className="font-extrabold text-xl">LexViaria</div>
              <div className="text-[10px] text-neutral-500 -mt-1">
                Estudio jurídico-técnico del siniestro vial
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#inicio" className="text-yellow-600 font-semibold">Inicio</a>
            <a href="#despacho" className="hover:text-yellow-600">Jurídico</a>
            <a href="#despacho" className="hover:text-yellow-600">Tecnológico</a>
            <a href="#blog" className="hover:text-yellow-600">Blog</a>
            <a href="/contacto.html" target="_blank" rel="noopener" className="hover:text-yellow-600">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO (usa imagen si existe en /public/hero.png; si no, verás el color de fondo) */}
      <section
        id="inicio"
        className="relative isolate min-h-[70vh] flex items-center"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#111827"
        }}
      >
        <div className="absolute inset-0 bg-neutral-900/40" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32 text-center text-white">
          <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-yellow-400">
            ESTUDIO JURÍDICO-TÉCNICO DE SEGURIDAD VIAL
          </p>
          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold">LexViaria</h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Investigando, estudiando y colaborando en la siniestralidad vial
          </p>
          <a
            href="/contacto.html"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-yellow-500 px-8 py-3 text-neutral-900 font-bold tracking-widest hover:bg-yellow-400"
          >
            Contáctanos
          </a>
        </div>
      </section>

      {/* Contenido (texto primero, visual debajo con badge) */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          {/* TEXTO CINCELADO */}
          <span className="inline-block rounded-lg bg-neutral-100 px-5 py-2.5 shadow-sm">
            <span className="font-cinzel tracking-[0.25em] text-yellow-700 font-extrabold text-xl md:text-2xl lg:text-3xl">
              LEX VIARIA
            </span>
          </span>

          {/* TEXTO PRESENTACION */}
          <h2 className="mt-3 font-inscrip text-2xl md:text-2xl lg:text-5xl font-semibold tracking-[0.1em] leading-[1.12] text-neutral-800 uppercase">
            El Derecho Romano que aun guía el camino
          </h2>

          <p className="mt-4 text-neutral-600 leading-relaxed">
            Este proyecto bautizado como LEX VIARIA por la pasión de la tradición romana, el estudio universitario del Derecho Romano y las Bases Romanistas en el derecho comparado, enlazado con la seguridad vial contemporánea.
          </p>

          <a
            href="#servicios"
            className="mt-8 inline-block rounded-full bg-yellow-500 px-6 py-3 text-neutral-900 font-semibold tracking-widest hover:bg-yellow-400"
          >
            Breve lectura histórica
          </a>

          {/* VISUAL */}
          <div className="mt-16">
            <div className="relative w-full md:w-1/2 mx-auto">
              <div className="w-full aspect-[4/3] rounded-2xl bg-neutral-200 overflow-hidden">
                {/* <img src="/equipo-lexviaria.jpg" alt="Equipo LexViaria" className="h-full w-full object-cover" loading="lazy" /> */}
              </div>

              {/* Badge +25 */}
              <div className="absolute -top-6 -left-6 z-30">
                <div className="rounded-xl bg-white px-6 py-4 shadow-lg ring-1 ring-black/5">
                  <div className="text-4xl font-extrabold text-yellow-500 leading-none">+25</div>
                  <div className="mt-1 text-sm text-neutral-700">Años de experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publicidad / CTA */}
      <section className="bg-yellow-500">
        <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col md:items-start">
            <h3 className="text-2xl font-extrabold text-neutral-900">
              Si necesitas resolver alguna duda importante
            </h3>
            <p className="mt-2 text-sm italic text-neutral-900/90">
              Te responderemos en menos de 2 horas.
            </p>
          </div>
          <a
            href="/contacto.html"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto rounded-full bg-neutral-900 px-6 py-3 text-white font-semibold hover:bg-neutral-800"
          >
            Contáctanos
          </a>
        </div>
      </section>

      {/* Sección Contacto (home) */}
      <section id="contacto" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 grid lg:grid-cols-2 gap-10">
          <form className="grid gap-4">
            <h2 className="text-3xl font-extrabold">Escríbenos</h2>
            <input className="w-full rounded-xl border px-4 py-3" placeholder="Nombre" />
            <input className="w-full rounded-xl border px-4 py-3" placeholder="Teléfono" />
            <input className="w-full rounded-xl border px-4 py-3" placeholder="Email" />
            <textarea className="w-full rounded-xl border px-4 py-3" rows="4" placeholder="Mensaje" />
            <label className="flex items-center gap-2 text-sm text-neutral-600">
              <input type="checkbox" className="w-4 h-4" /> He leído y acepto la política de privacidad
            </label>
            <button className="rounded-full bg-yellow-500 px-6 py-3 text-neutral-900 font-semibold hover:bg-yellow-400">
              Enviar
            </button>
          </form>
          <div className="rounded-2xl bg-neutral-50 p-6 border">
            <h3 className="font-semibold text-lg">Contacto</h3>
            <ul className="mt-4 space-y-2 text-neutral-700">
              <li><strong>Teléfono:</strong> +34 600 00 00 00</li>
              <li><strong>Email:</strong> info@lexviaria.com</li>
              <li><strong>Dirección:</strong> Dirección</li>
              <li><strong>Horario:</strong> L–V 9:00–19:00</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300">
        <div className="mx-auto max-w-6xl px-4 py-8 text-xs">
          © {new Date().getFullYear()} LexViaria — Demostración.
        </div>
      </footer>
    </div>
  );
}
