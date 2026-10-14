import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Mail, Phone } from "lucide-react";
import { baseMetadata } from "@/lib/seo/metadata";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { business } from "@/config/business";
import { images } from "@/config/images";

export const metadata = baseMetadata({
  title: "Contact ClearFlow Drainage",
  description:
    "Contact ClearFlow Drainage in Cork: demo phone, email and quote options for residential and commercial drainage enquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <div className="border-b border-line bg-mist">
        <div className="container-x py-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">Contact us</h1>
          <p className="mt-3 max-w-2xl text-[16.5px] leading-7 text-muted">
            Choose whatever suits you — call, email or send a quote enquiry. Demo details below
            must be replaced with real contact information before launch.
          </p>
        </div>
      </div>

      <section className="container-x grid gap-8 py-12 lg:grid-cols-2">
        <div className="space-y-4">
          <a href={business.phoneHref} className="flex items-center gap-4 rounded-2xl border border-line bg-white p-6 card-shadow hover:border-brand">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-teal">
              <Phone className="h-5 w-5" aria-hidden />
            </span>
            <span>
              <span className="block text-[13px] font-bold uppercase tracking-wider text-muted">Call (demo)</span>
              <span className="block text-[20px] font-extrabold text-navy">{business.phoneDisplay}</span>
              <span className="block text-[13px] text-muted">Tap to call from your device</span>
            </span>
          </a>
          <a href={business.emailHref} className="flex items-center gap-4 rounded-2xl border border-line bg-white p-6 card-shadow hover:border-brand">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-teal">
              <Mail className="h-5 w-5" aria-hidden />
            </span>
            <span className="min-w-0">
              <span className="block text-[13px] font-bold uppercase tracking-wider text-muted">Email (demo)</span>
              <span className="block truncate text-[20px] font-extrabold text-navy">{business.emailDisplay}</span>
              <span className="block text-[13px] text-muted">Include location + description</span>
            </span>
          </a>
          <div className="flex items-center gap-4 rounded-2xl border border-line bg-mist p-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand">
              <Clock className="h-5 w-5" aria-hidden />
            </span>
            <span>
              <span className="block text-[13px] font-bold uppercase tracking-wider text-muted">Enquiries</span>
              <span className="block text-[16px] font-bold text-navy">{business.hoursNote}</span>
              <span className="block text-[13px] text-muted">No 24/7 or response-time claims in this demo</span>
            </span>
          </div>
          <Link
            href="/request-a-quote"
            className="flex items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-4 text-[16px] font-bold text-white hover:bg-brand-dark"
          >
            Request a Quote <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div>
          <div className="overflow-hidden rounded-2xl card-shadow">
            <Image
              src={images.contact}
              alt={images.technicianAlt}
              width={1000}
              height={700}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-[14px] leading-6 text-amber-900">
            <strong>Demo notice:</strong> {business.phoneNote} {business.emailNote}{" "}
            {business.addressNote}
          </div>
        </div>
      </section>
    </>
  );
}
