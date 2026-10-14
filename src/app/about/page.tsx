import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ClipboardList, Handshake, MessagesSquare } from "lucide-react";
import { baseMetadata } from "@/lib/seo/metadata";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import CtaBand from "@/components/sections/CtaBand";
import { images } from "@/config/images";

export const metadata = baseMetadata({
  title: "About ClearFlow Drainage",
  description:
    "About this ClearFlow Drainage demo: a professional, approachable drainage website concept for Cork. No fabricated credentials.",
  path: "/about",
});

const values = [
  { icon: MessagesSquare, title: "Clear communication", text: "Explaining findings and next steps in plain language." },
  { icon: ClipboardList, title: "Practical approach", text: "Recommending sensible steps based on what is actually found." },
  { icon: Handshake, title: "Respectful service", text: "Tidy, considerate visits for homes and workplaces." },
];

export default function AboutPage() {
  return (
    <>
      <div className="border-b border-line bg-mist">
        <div className="container-x py-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            A professional demo for a Cork drainage business
          </h1>
          <p className="mt-3 max-w-2xl text-[16.5px] leading-7 text-muted">
            ClearFlow Drainage is a fictional company created to show how a modern website could
            present drainage services, build trust and handle enquiries.
          </p>
        </div>
      </div>

      <section className="container-x grid gap-10 py-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">What this demo represents</h2>
          <p className="mt-4 text-[15.5px] leading-7 text-muted">
            The site imagines a residential and commercial drainage provider serving Cork and
            surrounding areas — covering blocked drains, CCTV drain surveys, drain repairs,
            high-pressure jetting and (as an example to confirm) septic tank enquiries.
          </p>
          <p className="mt-4 text-[15.5px] leading-7 text-muted">
            It deliberately avoids fabricated credentials: no invented years of experience,
            customer counts, awards, certifications, reviews or guarantees. Those sections are
            left as honest placeholders the real business can fill with verified facts.
          </p>
          <div className="mt-6 grid gap-4">
            {values.map((v) => (
              <div key={v.title} className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5 card-shadow">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-teal">
                  <v.icon className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-[16px] font-extrabold text-navy">{v.title}</span>
                  <span className="block text-[14.5px] leading-6 text-muted">{v.text}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl card-shadow-lg">
          <Image
            src={images.about}
            alt={images.engineerLaptopAlt}
            width={1200}
            height={900}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </section>

      <section className="border-y border-line bg-mist">
        <div className="container-x py-12">
          <SectionHeading
            eyebrow="Before launch"
            title="What the owner would confirm"
            intro="A short checklist to turn this demo into a live, accurate website."
          />
          <ol className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-2">
            {[
              "Exact services offered — especially septic tank scope",
              "True service-area boundaries and scheduling",
              "Real phone number, email and preferred contact times",
              "Verified testimonials, credentials or case studies (if any)",
              "Final pricing or quote approach and terms",
            ].map((t, i) => (
              <li key={t} className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-[14px] font-extrabold text-white">
                  {i + 1}
                </span>
                <span className="text-[15px] font-semibold leading-6 text-navy">{t}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-navy px-7 py-3 text-[15.5px] font-bold text-white hover:bg-brand"
            >
              Discuss this demo <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand title="Like what you see?" intro="Imagine this structure with the real business details, photos and reviews." />
    </>
  );
}
