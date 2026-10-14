import { baseMetadata } from "@/lib/seo/metadata";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";
import CtaBand from "@/components/sections/CtaBand";
import { services } from "@/content/services";

export const metadata = baseMetadata({
  title: "Drainage Services in Cork",
  description:
    "Browse ClearFlow Drainage services: blocked drains, CCTV surveys, drain repairs, high-pressure jetting and septic enquiries (example).",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <div className="border-b border-line bg-mist">
        <div className="container-x py-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Drainage services
          </h1>
          <p className="mt-3 max-w-2xl text-[16.5px] leading-7 text-muted">
            Practical help for homes and businesses in Cork. Septic tank content is marked as an
            example to be confirmed by the business before launch.
          </p>
        </div>
      </div>
      <section className="container-x py-12">
        <SectionHeading
          align="left"
          eyebrow="All services"
          title="Choose a service to learn more"
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} slug={s.slug} title={s.title} description={s.description} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
