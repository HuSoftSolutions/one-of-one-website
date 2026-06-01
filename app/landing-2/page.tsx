import Link from "next/link";
import { business, services, valueProps } from "@/app/lib/site";
import { BrandLogo } from "@/app/components/BrandLogo";
import { LogoMark } from "@/app/components/LogoMark";
import { ServiceIcon } from "@/app/components/ServiceIcon";

// ── Landing 2 — "Clean & Professional" ───────────────────────────────────────
// Bright, airy, trustworthy. Sky-blue + white, soft cards, rounded corners.
// Shows the client a polished, modern alternative to the flyer aesthetic.

export default function Landing2() {
  return (
    <div className="flex-1 bg-white font-sans text-slate-800">
      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <LogoMark className="h-8 w-auto text-slate-900" />
            <span className="font-oswald text-lg font-semibold uppercase tracking-wide text-slate-900">
              {business.name}
            </span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#services" className="hover:text-sky-600">Services</a>
            <a href="#why" className="hover:text-sky-600">Why us</a>
            <a href="#about" className="hover:text-sky-600">About</a>
          </div>
          <a
            href={business.phoneHref}
            className="rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-sky-600/30 transition-colors hover:bg-sky-700"
          >
            Free Estimate
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-sm font-medium text-sky-700">
              ● {business.estimate} · {business.location}
            </span>
            <h1 className="mt-5 font-oswald text-5xl font-bold uppercase leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
              A spotless clean,
              <span className="text-sky-600"> done right</span> the first time.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-600">
              Professional cleaning &amp; detailing for {business.tagline.toLowerCase()}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={business.phoneHref}
                className="rounded-full bg-sky-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-sky-600/25 transition-colors hover:bg-sky-700"
              >
                Call {business.phone}
              </a>
              <a
                href="#services"
                className="rounded-full border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 transition-colors hover:border-sky-300 hover:text-sky-600"
              >
                Explore services
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -rotate-3 rounded-3xl bg-sky-200/50" />
            <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-3xl bg-black p-10 shadow-xl ring-1 ring-slate-900/10">
              <BrandLogo variant="rectangle" className="h-auto w-full" priority />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white p-4 shadow-lg ring-1 ring-slate-100">
              <p className="font-oswald text-2xl font-bold text-sky-600">FREE</p>
              <p className="text-xs text-slate-500">Estimates, always</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-oswald text-4xl font-bold uppercase tracking-tight text-slate-900">
            Our services
          </h2>
          <p className="mt-3 text-slate-600">
            From the front of the restaurant to the kitchen equipment — and anything in between.
          </p>
        </div>
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.id}
              className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100"
            >
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-sky-50 text-sky-600 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                <ServiceIcon icon={s.icon} className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-oswald text-xl font-semibold uppercase tracking-wide text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.blurb}</p>
              <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.1 3.1 6.8-6.8a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {valueProps.map((v, i) => (
              <div key={v.title} className="rounded-2xl bg-white p-7 shadow-sm">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-sky-600 font-oswald font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-oswald text-xl font-semibold uppercase tracking-wide text-slate-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-slate-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={business.ownerSrc}
            alt={`${business.name} owner`}
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-oswald text-4xl font-bold uppercase tracking-tight text-slate-900">
            Locally owned, <span className="text-sky-600">detail obsessed</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">{business.owner.blurb}</p>
          <p className="mt-6 font-oswald text-lg font-semibold uppercase tracking-wide text-slate-900">
            {business.owner.name}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-sky-600">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center text-white">
          <h2 className="font-oswald text-4xl font-bold uppercase tracking-tight md:text-5xl">
            Ready for a free estimate?
          </h2>
          <p className="mt-3 text-sky-100">Serving {business.location} and the surrounding area.</p>
          <a
            href={business.phoneHref}
            className="mt-7 inline-block rounded-full bg-white px-9 py-4 text-xl font-bold text-sky-600 shadow-lg transition-transform hover:-translate-y-0.5"
          >
            {business.phone}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row">
          <span className="font-oswald font-semibold uppercase tracking-wide text-slate-700">
            {business.legalName}
          </span>
          <p>{business.location}</p>
          <div className="flex gap-5">
            <a href={business.social.facebook} className="hover:text-sky-600">Facebook</a>
            <a href={business.social.instagram} className="hover:text-sky-600">Instagram</a>
            <a href={business.social.tiktok} className="hover:text-sky-600">TikTok</a>
          </div>
        </div>
        <p className="pb-6 text-center text-xs text-slate-400">
          <Link href="/compare" className="hover:text-sky-600">← Compare all three layouts</Link>
        </p>
      </footer>
    </div>
  );
}
