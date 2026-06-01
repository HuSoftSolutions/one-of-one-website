import Link from "next/link";
import { business } from "@/app/lib/site";
import { LogoMark } from "@/app/components/LogoMark";

const options = [
  {
    href: "/landing-1",
    name: "Bold & Edgy",
    desc: "True to the flyers — black, white & red, condensed type, FREE ESTIMATES stamp.",
    swatches: ["#000000", "#ffffff", "#e6332a"],
    cardClass: "bg-black text-white border-white/10",
  },
  {
    href: "/landing-2",
    name: "Clean & Professional",
    desc: "Bright, airy and trustworthy — sky blue & white, soft cards, modern feel.",
    swatches: ["#0284c7", "#e0f2fe", "#0f172a"],
    cardClass: "bg-white text-slate-900 border-slate-200",
  },
  {
    href: "/landing-3",
    name: "Premium · One of One",
    desc: "Upscale & bespoke — deep navy with gold accents and elegant serif type.",
    swatches: ["#0b1622", "#c9a86a", "#e2e8f0"],
    cardClass: "bg-[#0b1622] text-white border-white/10",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-100 px-6 py-16 font-sans">
      <div className="w-full max-w-5xl">
        <header className="text-center">
          <LogoMark className="mx-auto h-12 w-auto text-zinc-900" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            {business.legalName}
          </h1>
          <p className="mt-3 text-zinc-600">
            Three landing-page directions to review. Open each, then tell me which
            look and feel to build out.
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {options.map((o) => (
            <Link
              key={o.href}
              href={o.href}
              className={`group flex flex-col rounded-2xl border p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${o.cardClass}`}
            >
              <div className="flex gap-1.5">
                {o.swatches.map((c) => (
                  <span
                    key={c}
                    className="h-5 w-5 rounded-full ring-1 ring-black/10"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <h2 className="mt-5 text-xl font-bold tracking-tight">{o.name}</h2>
              <p className="mt-2 flex-1 text-sm opacity-80">{o.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold opacity-90 group-hover:gap-2">
                View layout →
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-14 text-center text-sm text-zinc-500">
          {business.location} · {business.phone} · {business.estimate}
        </p>
      </div>
    </div>
  );
}
