import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { baseMetadata } from "@/lib/seo/metadata";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { business } from "@/config/business";
import { images } from "@/config/images";
import { services } from "@/content/services";
import { getLocation, locations } from "@/content/locations";

export const metadata = baseMetadata({
  title: "Drainage Services in Cork",
  description:
    "Example drainage service page for Cork city and suburbs: blocked drains, CCTV surveys, repairs, jetting and septic enquiries.",
  path: "/service-areas/cork",
});

export default function CorkPage() {
  const location = getLocation("cork")!;
  return (
    <>
      <div className="border-b border-line bg-mist">
        <div className="container-x py-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas" },
              { label: "Cork" },
            ]}
          />
        </div>
      </div>

      <section className="container-x grid gap-10 py-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="inline-flex items-center gap-1.5 rounded-full bg-teal/15 px-3 py-1 text-[12px] font-extrabold uppercase tracking-wider text-teal-dark">
            <MapPin className="h-3.5 w-3.5" aria-hidden /> Example primary area
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Drainage services in Cork
          </h1>
          <p className="mt-4 text-[16.5px] leading-8 text-muted">{location.blurb}</p>
          {location.detail.map((p) => (
            <p key={p.slice(0, 20)} className="mt-3 text-[15.5px] leading-7 text-muted">
              {p}
            </p>
          ))}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-a-quote"
              className="rounded-xl bg-brand px-6 py-3 text-center text-[15.5px] font-bold text-white hover:bg-brand-dark"
            >
              Request a Quote
            </Link>
            <a
              href={business.phoneHref}
              className="flex items-center justify-center gap-2 rounded-xl border border-line bg-white px-6 py-3 text-[15.5px] font-bold text-navy hover:border-navy"
            >
              <Phone className="h-4 w-4" aria-hidden /> {business.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl card-shadow-lg">
          <Image
            src={images.technician}
            alt={images.technicianAlt}
            width={1200}
            height={800}
            className="aspect-[3/2] w-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="border-y border-line bg-mist">
        <div className="container-x py-12">
          <SectionHeading
            eyebrow="In Cork"
            title="Services available in this example area"
            intro="All services are shown as enabled for Cork. Adjust per area once coverage is confirmed."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} slug={s.slug} title={s.title} description={s.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-x grid gap-10 py-12 lg:grid-cols-2">
        <div className="rounded-2xl bg-navy p-7 text-white">
          <h2 className="text-[22px] font-extrabold">Enquiring from Cork?</h2>
          <ul className="mt-4 space-y-3">
            {[
              "Include your Eircode and suburb or townland",
              "Mention property type — house, apartment, shop, office",
              "Describe what you are seeing and when it started",
              "Note access to manholes, gullies or yards where relevant",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-[14.5px] leading-6 text-slate-200">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden /> {t}
              </li>
            ))}
          </ul>
          <Link
            href="/request-a-quote"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-teal px-6 py-3 text-[15px] font-bold text-deep hover:bg-white"
          >
            Start a Cork enquiry <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div>
          <h2 className="text-[22px] font-extrabold text-navy">Other example areas</h2>
          <p className="mt-2 text-[14.5px] leading-6 text-muted">
            These are placeholders. Link them to dedicated pages only after the owner confirms
            coverage.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {locations
              .filter((l) => l.slug !== "cork")
              .map((l) => (
                <Link
                  key={l.slug}
                  href="/service-areas"
                  className="rounded-xl border border-line bg-white p-4 text-[15px] font-bold text-navy hover:border-brand hover:text-brand"
                >
                  {l.name}
                  <span className="block text-[13px] font-medium text-muted">Example — confirm coverage</span>
                </Link>
              ))}
          </div>
          <div className="mt-6">
            <FaqAccordion
              faqs={[
                { q: "Is Cork a confirmed service area?", a: "In this demo, Cork is shown as the example primary area. Treat it as a placeholder until the business owner confirms exact boundaries and scheduling." },
                { q: "What should I include in a Cork enquiry?", a: "Your suburb or townland, Eircode if handy, property type, and a short description of the issue. Photos of accessible areas are helpful but optional." },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
