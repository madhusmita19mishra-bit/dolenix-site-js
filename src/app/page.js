// src/app/page.js
export default function DolenixLanding() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="font-semibold tracking-tight">
              DOLENIX SECURITY
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#about" className="hover:opacity-70">About</a>
              <a href="#services" className="hover:opacity-70">Services</a>
              <a href="#work" className="hover:opacity-70">Work</a>
              <a href="#contact" className="hover:opacity-70">Contact</a>
              <a
                href="#contact"
                className="rounded-full border border-black px-3 py-1 hover:bg-black hover:text-white transition"
              >
                Let’s talk
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section id="home" className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-28">
          <p className="uppercase tracking-widest text-xs text-[var(--muted)]">
            Aligning needs & journeys
          </p>
          <h1 className="mt-3 text-4xl sm:text-6xl leading-[1.05] font-semibold max-w-4xl">
            We design, test, and secure systems that empower people and strengthen culture.
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#services" className="rounded-full bg-black text-white px-5 py-3 text-sm">
              Explore services
            </a>
            <a
              href="#contact"
              className="rounded-full border border-black px-5 py-3 text-sm hover:bg-black hover:text-white transition"
            >
              Start a project
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
