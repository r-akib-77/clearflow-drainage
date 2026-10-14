import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  ClipboardList,
  Droplets,
  FileSearch,
  Handshake,
  MessagesSquare,
  Phone,
  Send,
  Wrench,
} from "lucide-react";
import { baseMetadata } from "@/lib/seo/metadata";
import { business } from "@/config/business";
import { images, featuredWork } from "@/config/images";
import { services } from "@/content/services";
import { locations } from "@/content/locations";
import { homeFaqs } from "@/content/faqs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";
import LocationCard from "@/components/service-areas/LocationCard";
import FaqAccordion from "@/components/ui/FaqAccordion";
import Reveal from "@/components/ui/Reveal";
import ContactStrip from "@/components/sections/ContactStrip";
import CtaBand from "@/components/sections/CtaBand";

export const metadata = baseMetadata({
  title: "ClearFlow Drainage | Drainage Services in Cork",
  description:
    "Blocked drains, CCTV drain surveys, drain repairs, high-pressure jetting and septic enquiries in Cork. Clear communication and a straightforward quote process.",
  path: "/",
});

const whyItems = [
  {
    icon: MessagesSquare,
    title: "Clear Communication",
    text: "Plain-language explanations of what we see and what happens next — no jargon, no pressure.",
  },
  {
    icon: FileSearch,
    title: "Practical Recommendations",
    text: "Sensible next steps based on what is actually found, from inspection to clearing or repair planning.",
  },
  {
    icon: Handshake,
    title: "Homes & Businesses",
    text: "Residential and commercial enquiries welcome — houses, rentals, shops, offices and hospitality.",
  },
  {
    icon: ClipboardList,
    title: "Straightforward Quotes",
    text: "Tell us what is happening, share your Eircode, and follow a simple enquiry-to-visit process.",
  },
];

const steps = [
  { icon: Droplets, title: "Tell us about the problem", text: "Describe symptoms, property type and location." },
  { icon: Send, title: "Submit your enquiry", text: "Use the demo quote form — validation in your browser." },
  { icon: MessagesSquare, title: "Discuss the next steps", text: "Talk through inspection or visit options." },
  { icon: CalendarCheck, title: "Arrange the service", text: "Agree access, timing and practicalities." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="overflow-hidden border-b border-line bg-mist">
        <div className="container-x grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-20">
          <Reveal>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-brand">
              Residential & Commercial Drainage
            </p>
            <h1 className="mt-3 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl">
              Drainage Problems? Let&apos;s Get Things Flowing Again.
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-[17px] leading-8 text-muted">
              From blocked drains to CCTV inspections and drainage repairs, explore practical
              drainage solutions for properties in Cork and surrounding areas.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/request-a-quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-7 py-3.5 text-[16px] font-bold text-white shadow-sm hover:bg-brand-dark"
              >
                Request a Quote <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-line bg-white px-7 py-3.5 text-center text-[16px] font-bold text-navy hover:border-navy"
              >
                Explore Our Services
              </Link>
            </div>
            <p className="mt-4 flex items-center gap-2 text-[14px] font-medium text-muted">
              <BadgeCheck className="h-4 w-4 text-teal" aria-hidden />
              Clear communication. Practical solutions. Straightforward enquiries.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <div aria-hidden className="absolute -left-4 -top-4 h-24 w-24 rounded-3xl bg-teal/20" />
              <div aria-hidden className="absolute -bottom-4 -right-4 h-32 w-32 rounded-3xl bg-navy/10" />
              <div className="relative overflow-hidden rounded-3xl card-shadow-lg">
                <Image
                  src={images.hero}
                  alt={images.heroAlt}
                  width={1200}
                  height={900}
                  priority
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl bg-white/95 p-4 card-shadow backdrop-blur sm:right-auto">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-teal">
                  <Wrench className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-[14px] font-extrabold text-navy">Cork-based drainage help</span>
                  <span className="block text-[13px] text-muted">Enquiries for homes & businesses</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICE HIGHLIGHTS */}
      <section className="container-x py-14 lg:py-20">
        <SectionHeading
          eyebrow="Our services"
          title="Practical drainage services"
          intro="Five core offerings. Select a card to read what each service covers and how to enquire."
        />
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={Math.min(i * 0.06, 0.24)}>
              <ServiceCard slug={s.slug} title={s.title} description={s.description} />
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <Link
              href="/services"
              className="flex h-full min-h-[220px] flex-col items-start justify-center rounded-2xl bg-navy p-6 text-white transition-colors hover:bg-deep"
            >
              <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-teal">Not sure?</span>
              <span className="mt-2 text-[22px] font-extrabold leading-snug">Browse all services & guidance</span>
              <span className="mt-3 inline-flex items-center gap-2 text-[15px] font-bold text-teal">
                View services <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="border-y border-line bg-navy">
        <div className="container-x py-14 lg:py-20">
          <SectionHeading
            dark
            eyebrow="Why ClearFlow"
            title="A calm, professional way to sort drainage issues"
            intro="No invented awards or guarantees — just a clear process and honest communication."
          />
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyItems.map((w) => (
              <div key={w.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/20 text-teal">
                  <w.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-[17px] font-extrabold text-white">{w.title}</h3>
                <p className="mt-2 text-[14.5px] leading-6 text-slate-300">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-x py-14 lg:py-20">
        <SectionHeading
          eyebrow="How it works"
          title="From problem to arranged visit in four steps"
          intro="A simple enquiry path designed for busy homeowners and facilities managers."
        />
        <ol className="mt-9 grid gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-line bg-white p-6 card-shadow">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist text-brand">
                <s.icon className="h-5 w-5" aria-hidden />
              </span>
              <p className="mt-4 text-[12px] font-extrabold uppercase tracking-[0.14em] text-teal-dark">
                Step {i + 1}
              </p>
              <h3 className="mt-1 text-[16.5px] font-extrabold text-navy">{s.title}</h3>
              <p className="mt-1.5 text-[14.5px] leading-6 text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-7 text-center">
          <Link
            href="/request-a-quote"
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-7 py-3 text-[15.5px] font-bold text-white hover:bg-brand-dark"
          >
            Start Step 1 — Request a Quote <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="border-y border-line bg-mist">
        <div className="container-x py-14 lg:py-20">
          <SectionHeading
            eyebrow="Featured work"
            title="Example work gallery"
            intro="Demonstration imagery only — replace with verified ClearFlow projects before launch. Nothing here is claimed as completed work."
          />
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredWork.map((w) => (
              <figure key={w.title} className="group overflow-hidden rounded-2xl border border-line bg-white card-shadow">
                <div className="relative overflow-hidden bg-navy">
                  <Image
                    src={w.src}
                    alt={w.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-deep/80 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-teal backdrop-blur">
                    {w.tag}
                  </span>
                </div>
                <figcaption className="px-5 py-4 text-[14.5px] font-bold text-navy">{w.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="container-x py-14 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-brand">Service areas</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Based around Cork, with nearby towns as examples
            </h2>
            <p className="mt-3 text-[16px] leading-7 text-muted">
              Cork city and suburbs are shown as the example primary area. Surrounding towns are
              configurable demo entries — coverage must be confirmed by the owner before launch.
              Share your Eircode when enquiring so travel can be considered.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/service-areas"
                className="rounded-xl bg-navy px-6 py-3 text-center text-[15px] font-bold text-white hover:bg-brand"
              >
                View Service Areas
              </Link>
              <Link
                href="/service-areas/cork"
                className="rounded-xl border border-line bg-white px-6 py-3 text-center text-[15px] font-bold text-navy hover:border-navy"
              >
                Cork — Example Page
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {locations.slice(0, 4).map((l) => (
              <LocationCard key={l.slug} location={l} />
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN EXPECT (testimonial placeholder) */}
      <section className="border-y border-line bg-white">
        <div className="container-x py-14 lg:py-20">
          <SectionHeading
            eyebrow="Trust & clarity"
            title="What You Can Expect"
            intro="We do not publish fabricated reviews. When verified testimonials are available, they can replace this section."
          />
          <div className="mx-auto mt-9 grid max-w-4xl gap-4 md:grid-cols-3">
            {[
              { title: "Clear communication", text: "You will hear what was found, in plain language, with time for questions." },
              { title: "Next steps explained", text: "Options are talked through before anything is arranged — no surprises." },
              { title: "Easy quoting", text: "A short form, a phone call or an email — whichever suits you best." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-mist p-6 text-center">
                <h3 className="text-[16.5px] font-extrabold text-navy">{c.title}</h3>
                <p className="mt-2 text-[14.5px] leading-6 text-muted">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-14 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="FAQs"
            title="Common drainage questions"
            intro="Short, sensible answers. Anything specific to your property needs an on-site look."
          />
          <div className="mt-8">
            <FaqAccordion faqs={homeFaqs} />
          </div>
        </div>
      </section>

      <ContactStrip />

      <div className="pt-14">
        <CtaBand />
      </div>

      {/* Local demo contact line */}
      <div className="container-x -mt-8 pb-14 text-center text-[14px] text-muted">
        <a href={business.phoneHref} className="inline-flex items-center gap-2 font-bold text-navy hover:text-brand">
          <Phone className="h-4 w-4" aria-hidden /> {business.phoneDisplay}
        </a>
        <span className="mx-2" aria-hidden>·</span>
        <span>Demo contact details — replace before launch.</span>
      </div>
    </>
  );
}
