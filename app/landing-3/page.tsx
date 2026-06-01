import Link from "next/link";
import { business, services, valueProps } from "@/app/lib/site";
import { LogoMark } from "@/app/components/LogoMark";
import { ServiceIcon } from "@/app/components/ServiceIcon";

// ── Landing 3 — "Premium / One of One" ───────────────────────────────────────
// Upscale and bespoke. Deep navy, gold accents, elegant serif headings —
// leans into the "one of one" name as a mark of exclusivity.

const GOLD = "#c9a86a";

export default function Landing3() {
  return (
    <div className="flex-1 bg-[#0b1622] font-serif text-slate-200">
      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0b1622]/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <LogoMark className="h-8 w-auto" style={{ color: GOLD }} />
            <span className="hidden font-serif text-sm tracking-[0.3em] text-white/70 sm:block">
              ONE OF ONE
            </span>
          </div>
          <div className="hidden items-center gap-9 font-sans text-xs uppercase tracking-[0.2em] text-white/60 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a
            href={business.phoneHref}
            className="rounded-sm border px-5 py-2.5 font-sans text-xs uppercase tracking-[0.2em] transition-colors hover:bg-white/5"
            style={{ borderColor: GOLD, color: GOLD }}
          >
            Request Estimate
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(${GOLD} 1px, transparent 1px)`,
            backgroundSize: "26px 26px",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-24 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.4em]" style={{ color: GOLD }}>
            {business.legalName}
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-tight text-white md:text-7xl">
            Cleaning, treated as a
            <span className="italic" style={{ color: GOLD }}> craft.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Restaurants, homes, and vehicles detailed with the care of a single,
            signature commission — because every job is one of one.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={business.phoneHref}
              className="rounded-sm px-8 py-4 font-sans text-sm uppercase tracking-[0.2em] text-[#0b1622] transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: GOLD }}
            >
              Book a Consultation
            </a>
            <a
              href="#services"
              className="rounded-sm border border-white/20 px-8 py-4 font-sans text-sm uppercase tracking-[0.2em] text-white hover:bg-white/5"
            >
              View Services
            </a>
          </div>
          <p className="mt-8 font-sans text-xs uppercase tracking-[0.3em] text-white/40">
            {business.tagline}
          </p>
        </div>
        <div className="mx-auto h-px max-w-6xl" style={{ backgroundColor: `${GOLD}55` }} />
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.4em]" style={{ color: GOLD }}>
            What we offer
          </p>
          <h2 className="mt-3 font-serif text-4xl text-white md:text-5xl">Signature Services</h2>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {services.map((s, i) => (
            <article key={s.id} className="group relative">
              <div className="flex items-center gap-4">
                <span className="font-serif text-5xl text-white/15">0{i + 1}</span>
                <ServiceIcon icon={s.icon} className="h-9 w-9" style={{ color: GOLD }} />
              </div>
              <h3 className="mt-5 font-serif text-2xl text-white">{s.title}</h3>
              <p className="font-serif italic text-lg" style={{ color: GOLD }}>
                {s.accent}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.blurb}</p>
              <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-sans text-sm text-slate-300">
                    <span style={{ color: GOLD }}>—</span>
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* About — split with portrait */}
      <section id="about" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-[1fr_1.1fr]">
          <div className="relative mx-auto w-full max-w-sm">
            <div
              className="absolute -inset-3 rounded-sm border"
              style={{ borderColor: `${GOLD}66` }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={business.ownerSrc}
              alt={`${business.name} owner`}
              className="relative aspect-[4/5] w-full rounded-sm object-cover"
            />
          </div>
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.4em]" style={{ color: GOLD }}>
              The standard
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-white md:text-5xl">
              One name. One standard. <span className="italic">One of one.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">{business.owner.blurb}</p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {valueProps.map((v) => (
                <div key={v.title}>
                  <p className="font-serif text-lg text-white">{v.title}</p>
                  <p className="mt-1 font-sans text-xs leading-relaxed text-slate-400">{v.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 font-serif text-xl" style={{ color: GOLD }}>
              {business.owner.name}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative overflow-hidden">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="font-serif text-4xl text-white md:text-5xl">
            Request your <span className="italic" style={{ color: GOLD }}>free estimate</span>
          </h2>
          <p className="mt-4 text-slate-300">
            {business.location} · By appointment and on call.
          </p>
          <a
            href={business.phoneHref}
            className="mt-8 inline-block rounded-sm px-10 py-4 font-serif text-2xl text-[#0b1622] transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: GOLD }}
          >
            {business.phone}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 font-sans text-xs uppercase tracking-[0.2em] text-white/50 md:flex-row">
          <LogoMark className="h-7 w-auto" style={{ color: GOLD }} />
          <p className="tracking-[0.2em]">{business.legalName} · {business.location}</p>
          <div className="flex gap-5">
            <a href={business.social.facebook} className="hover:text-white">Facebook</a>
            <a href={business.social.instagram} className="hover:text-white">Instagram</a>
            <a href={business.social.tiktok} className="hover:text-white">TikTok</a>
          </div>
        </div>
        <p className="pb-6 text-center font-sans text-[10px] uppercase tracking-[0.2em] text-white/30">
          <Link href="/compare" className="hover:text-white/60">← Compare all three layouts</Link>
        </p>
      </footer>
    </div>
  );
}
