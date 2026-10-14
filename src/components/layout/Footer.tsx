import Link from "next/link";
import { Droplets, Mail, MapPin, Phone } from "lucide-react";
import { business } from "@/config/business";
import { navigation } from "@/config/navigation";
import { locations } from "@/content/locations";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-deep text-slate-300">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <Droplets className="h-5 w-5 text-teal" aria-hidden />
            </span>
            <span className="leading-tight">
              <span className="block text-[17px] font-extrabold tracking-tight text-white">
                ClearFlow Drainage
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400">
                Cork, Ireland
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-[14.5px] leading-6 text-slate-300">
            Practical drainage help for homes and businesses — blocked drains, CCTV surveys,
            repairs, jetting and septic enquiries. Straightforward enquiries, clear communication.
          </p>
          <p className="mt-3 inline-block rounded-full bg-white/10 px-3 py-1 text-[12px] font-semibold text-teal">
            Demonstration website — content to be confirmed
          </p>
        </div>

        <nav aria-label="Company">
          <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-slate-400">Company</h3>
          <ul className="mt-4 space-y-2.5">
            {navigation.footerCompany.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[15px] font-medium hover:text-white hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-slate-400">Services</h3>
          <ul className="mt-4 space-y-2.5">
            {navigation.footerServices.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[15px] font-medium hover:text-white hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-6 text-[13px] font-bold uppercase tracking-[0.12em] text-slate-400">
            Service areas (examples)
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {locations.map((l) => (
              <li key={l.slug}>
                {l.slug === "cork" ? (
                  <Link
                    href="/service-areas/cork"
                    className="rounded-full border border-white/15 px-3 py-1 text-[13px] hover:bg-white/10 hover:text-white"
                  >
                    {l.short}
                  </Link>
                ) : (
                  <span className="rounded-full border border-white/15 px-3 py-1 text-[13px] text-slate-300">
                    {l.short}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-slate-400">Contact (demo)</h3>
          <ul className="mt-4 space-y-3 text-[15px]">
            <li>
              <a href={business.phoneHref} className="flex items-center gap-2.5 font-semibold text-white hover:underline">
                <Phone className="h-4 w-4 text-teal" aria-hidden />
                {business.phoneDisplay}
              </a>
              <p className="ml-6 text-[12.5px] text-slate-400">Demo number — replace before launch</p>
            </li>
            <li>
              <a href={business.emailHref} className="flex items-center gap-2.5 font-semibold text-white hover:underline">
                <Mail className="h-4 w-4 text-teal" aria-hidden />
                {business.emailDisplay}
              </a>
              <p className="ml-6 text-[12.5px] text-slate-400">Demo email — replace before launch</p>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden />
              <span>
                Cork and surrounding areas
                <span className="block text-[12.5px] text-slate-400">No office address listed in this demo</span>
              </span>
            </li>
          </ul>
          <Link
            href="/request-a-quote"
            className="mt-5 inline-block rounded-xl bg-teal px-5 py-2.5 text-[15px] font-bold text-deep transition-colors hover:bg-white"
          >
            Request a Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-[13px] text-slate-400 sm:flex-row">
          <p>© {year} ClearFlow Drainage — demo website. All service scope to be confirmed.</p>
          <p>
            <Link href="/privacy" className="hover:text-white hover:underline">
              Privacy Policy
            </Link>
            <span className="mx-2" aria-hidden>·</span>
            <Link href="/contact" className="hover:text-white hover:underline">
              Contact
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
