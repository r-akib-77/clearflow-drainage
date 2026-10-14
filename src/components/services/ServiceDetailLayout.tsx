import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardList, Info, MapPin, Phone } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";
import { business } from "@/config/business";
import { locations } from "@/content/locations";
import type { ServiceContent } from "@/content/services";
import { services } from "@/content/services";

export default function ServiceDetailLayout({ service }: { service: ServiceContent }) {
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <div className="border-b border-line bg-mist">
        <div className="container-x py-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
        </div>
      </div>

      <section className="container-x grid gap-10 py-12 lg:grid-cols-2 lg:items-center lg:py-16">
        <div>
          <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-brand">
            {service.shortTitle} — Cork
          </p>
          <h1 className="mt-2 text-balance text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 text-pretty text-[17px] leading-8 text-muted">{service.tagline}</p>
          {service.needsConfirmation && (
            <p className="mt-4 flex items-start gap-2 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-[14px] leading-6 text-amber-900">
              <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              {service.needsConfirmation}
            </p>
          )}
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
              <Phone className="h-4 w-4" aria-hidden />
              {business.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-navy card-shadow-lg">
          <Image
            src={service.image}
            alt={service.imageAlt}
            width={1200}
            height={800}
            className="aspect-[3/2] w-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="container-x grid gap-10 py-12 lg:grid-cols-[1.4fr_1fr] lg:py-16">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy">Service overview</h2>
            {service.longIntro.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-[15.5px] leading-7 text-muted">
                {p}
              </p>
            ))}
            <h3 className="mt-8 text-xl font-extrabold text-navy">Situations this service may address</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.problems.map((pr) => (
                <li key={pr.title} className="rounded-xl border border-line bg-mist p-4">
                  <p className="text-[15px] font-bold text-navy">{pr.title}</p>
                  <p className="mt-1 text-[14px] leading-6 text-muted">{pr.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <aside className="h-fit rounded-2xl bg-navy p-6 text-white lg:sticky lg:top-24">
            <h3 className="flex items-center gap-2 text-[17px] font-extrabold">
              <ClipboardList className="h-5 w-5 text-teal" aria-hidden />
              What you can expect
            </h3>
            <ul className="mt-4 space-y-3">
              {service.expectations.map((e) => (
                <li key={e} className="flex items-start gap-2.5 text-[14.5px] leading-6 text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden />
                  {e}
                </li>
              ))}
            </ul>
            <Link
              href="/request-a-quote"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-teal px-5 py-3 text-[15px] font-bold text-deep hover:bg-white"
            >
              Start an enquiry <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </aside>
        </div>
      </section>

      <section className="container-x py-12 lg:py-16">
        <SectionHeading
          eyebrow="How it works"
          title="A straightforward process"
          intro="Four practical steps from first enquiry to an arranged visit."
        />
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {service.process.map((step, i) => (
            <li key={step.title} className="relative rounded-2xl border border-line bg-white p-5 card-shadow">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-[15px] font-extrabold text-white">
                {i + 1}
              </span>
              <p className="mt-3 text-[15.5px] font-bold text-navy">{step.title}</p>
              <p className="mt-1 text-[14px] leading-6 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-mist">
        <div className="container-x py-12 lg:py-16">
          <SectionHeading
            eyebrow="Coverage"
            title="Service areas (examples)"
            intro="Cork is the example primary area. All other locations must be confirmed by the owner before launch."
          />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/service-areas/cork"
              className="flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-[14.5px] font-bold text-white hover:bg-brand"
            >
              <MapPin className="h-4 w-4" aria-hidden /> Cork City & Suburbs
            </Link>
            {locations
              .filter((l) => l.slug !== "cork")
              .map((l) => (
                <Link
                  key={l.slug}
                  href="/service-areas"
                  className="rounded-full border border-line bg-white px-5 py-2.5 text-[14.5px] font-semibold text-navy hover:border-brand hover:text-brand"
                >
                  {l.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="container-x py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy">Common questions</h2>
            <div className="mt-5">
              <FaqAccordion faqs={service.faqs} />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy">Related services</h2>
            <div className="mt-5 grid gap-4">
              {related.map((r) => (
                <ServiceCard key={r.slug} slug={r.slug} title={r.title} description={r.description} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl bg-navy px-6 py-10 text-center sm:px-12">
          <h2 className="mx-auto max-w-xl text-balance text-3xl font-extrabold tracking-tight text-white">
            Need help with {service.shortTitle.toLowerCase()}?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[16px] leading-7 text-slate-300">
            Tell us what is happening and explore the next steps for requesting a quote.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/request-a-quote"
              className="rounded-xl bg-teal px-7 py-3 text-[15.5px] font-bold text-deep hover:bg-white"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/25 px-7 py-3 text-[15.5px] font-bold text-white hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
