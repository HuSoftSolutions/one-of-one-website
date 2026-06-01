import Link from "next/link";
import { business, services, valueProps } from "@/app/lib/site";
import { LogoMark } from "@/app/components/LogoMark";
import { ServiceIcon } from "@/app/components/ServiceIcon";

// ── "Bold & Edgy" landing layout ─────────────────────────────────────────────
// Mirrors the client's flyer language: black field, hard white condensed caps,
// the red "FREE ESTIMATES" stamp, a script accent, and halftone dots.
// Promoted to the site's main page (app/page.tsx); also rendered at /landing-1.

const RED = "#e6332a";

function Stamp({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block -rotate-12 border-2 px-4 py-1.5 font-display text-lg tracking-wide ${className}`}
      style={{ color: RED, borderColor: RED }}
    >
      FREE ESTIMATES
    </span>
  );
}

export function Landing1({ showCompareLink = false }: { showCompareLink?: boolean }) {
  return (
    <div className="flex-1 bg-black text-white font-sans selection:bg-[#e6332a] selection:text-white">
      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <LogoMark className="h-8 w-auto text-white" />
          <div className="hidden items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/70 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a
            href={business.phoneHref}
            className="rounded-sm px-4 py-2 text-sm font-bold uppercase tracking-wider text-black"
            style={{ backgroundColor: RED }}
          >
            {business.phone}
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* halftone dots, top-right (echoes the flyer) */}
        <div
          className="pointer-events-none absolute -right-10 top-10 h-40 w-40 opacity-30"
          style={{
            backgroundImage: "radial-gradient(white 1.5px, transparent 1.5px)",
            backgroundSize: "12px 12px",
          }}
        />
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
          <p className="font-display text-lg tracking-wide text-white/60">
            {business.legalName}
          </p>
          <h1 className="mt-2 font-display text-6xl leading-[0.9] tracking-tight sm:text-7xl md:text-8xl">
            CLEANING
            <br />
            <span style={{ color: RED }}>SOLUTIONS</span>
          </h1>
          <p className="mt-1 font-script text-4xl text-white/90 md:text-5xl">
            and Detailing
          </p>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            {business.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href={business.phoneHref}
              className="rounded-sm px-7 py-3.5 font-display text-xl tracking-wide text-black transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: RED }}
            >
              BOOK NOW
            </a>
            <a
              href="#services"
              className="rounded-sm border border-white/30 px-7 py-3.5 font-display text-xl tracking-wide text-white hover:bg-white hover:text-black"
            >
              OUR SERVICES
            </a>
            <Stamp />
          </div>
        </div>
        {/* diagonal cut */}
        <div className="h-10 w-full -skew-y-1 border-t border-white/10 bg-white/[0.03]" />
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-display text-4xl tracking-tight md:text-5xl">
            OUR <span style={{ color: RED }}>SERVICE</span>
          </h2>
          <span className="hidden font-script text-3xl text-white/50 md:block">
            anything in between
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.id}
              className="group relative overflow-hidden border border-white/10 bg-white/[0.02] p-7 transition-colors hover:border-white/30"
            >
              <div
                className="absolute right-0 top-0 h-1 w-16"
                style={{ backgroundColor: RED }}
              />
              <ServiceIcon icon={s.icon} className="h-12 w-12 text-white" />
              <h3 className="mt-5 font-display text-2xl uppercase tracking-tight">
                {s.title}
              </h3>
              <p className="font-script text-2xl" style={{ color: RED }}>
                {s.accent}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {s.blurb}
              </p>
              <ul className="mt-5 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/80">
                    <span style={{ color: RED }} className="font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Value props band */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-3">
          {valueProps.map((v) => (
            <div key={v.title}>
              <h3 className="font-display text-2xl uppercase tracking-tight" style={{ color: RED }}>
                {v.title}
              </h3>
              <p className="mt-2 text-sm text-white/70">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About / Owner */}
      <section id="about" className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[1fr_1.2fr]">
        <div className="relative">
          <div
            className="absolute -left-3 -top-3 h-full w-full"
            style={{ backgroundColor: RED }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={business.ownerSrc}
            alt={`${business.name} owner`}
            className="relative w-full object-cover grayscale"
          />
        </div>
        <div>
          <h2 className="font-display text-4xl uppercase tracking-tight md:text-5xl">
            One of One <span style={{ color: RED }}>Care</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            {business.owner.blurb}
          </p>
          <p className="mt-6 font-display text-xl tracking-wide">
            {business.owner.name}
          </p>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="relative overflow-hidden bg-white text-black">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="font-display text-5xl tracking-tight md:text-7xl">
            BOOK NOW
          </h2>
          <p className="mt-3 text-lg text-black/70">
            {business.location} · {business.estimate}
          </p>
          <a
            href={business.phoneHref}
            className="mt-7 inline-block rounded-sm px-10 py-4 font-display text-3xl tracking-wide text-white"
            style={{ backgroundColor: RED }}
          >
            {business.phone}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-white/50 md:flex-row">
          <LogoMark className="h-7 w-auto text-white/90" />
          <p>{business.legalName} · {business.location}</p>
          <div className="flex gap-5 uppercase tracking-widest">
            <a href={business.social.facebook} className="hover:text-white">Facebook</a>
            <a href={business.social.instagram} className="hover:text-white">Instagram</a>
            <a href={business.social.tiktok} className="hover:text-white">TikTok</a>
          </div>
        </div>
        {showCompareLink && (
          <p className="pb-6 text-center text-xs text-white/30">
            <Link href="/compare" className="hover:text-white/60">← Compare all three layouts</Link>
          </p>
        )}
      </footer>
    </div>
  );
}
