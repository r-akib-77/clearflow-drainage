import { Mail, MapPin, Phone } from "lucide-react";
import { business } from "@/config/business";

export default function ContactStrip() {
  return (
    <section aria-label="Contact options" className="border-y border-line bg-white">
      <div className="container-x grid gap-4 py-8 md:grid-cols-3">
        <a
          href={business.phoneHref}
          className="flex items-center gap-3 rounded-2xl border border-line bg-mist p-5 transition-colors hover:border-brand"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-teal">
            <Phone className="h-5 w-5" aria-hidden />
          </span>
          <span>
            <span className="block text-[13px] font-bold uppercase tracking-wider text-muted">Call (demo)</span>
            <span className="block text-[16px] font-extrabold text-navy">{business.phoneDisplay}</span>
          </span>
        </a>
        <a
          href={business.emailHref}
          className="flex items-center gap-3 rounded-2xl border border-line bg-mist p-5 transition-colors hover:border-brand"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-teal">
            <Mail className="h-5 w-5" aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block text-[13px] font-bold uppercase tracking-wider text-muted">Email (demo)</span>
            <span className="block truncate text-[16px] font-extrabold text-navy">{business.emailDisplay}</span>
          </span>
        </a>
        <div className="flex items-center gap-3 rounded-2xl border border-line bg-mist p-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-teal">
            <MapPin className="h-5 w-5" aria-hidden />
          </span>
          <span>
            <span className="block text-[13px] font-bold uppercase tracking-wider text-muted">Based in</span>
            <span className="block text-[16px] font-extrabold text-navy">Cork & surrounding areas</span>
          </span>
        </div>
      </div>
    </section>
  );
}
