import Link from "next/link";
import { MapPin } from "lucide-react";
import { baseMetadata } from "@/lib/seo/metadata";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import LocationCard from "@/components/service-areas/LocationCard";
import CtaBand from "@/components/sections/CtaBand";
import { locations } from "@/content/locations";

export const metadata = baseMetadata({
  title: "Service Areas — Cork & Surrounds",
  description:
    "Example service areas for ClearFlow Drainage: Cork city, Ballincollig, Carrigaline, Cobh, Midleton and Mallow. Coverage to be confirmed.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <div className="border-b border-line bg-mist">
        <div className="container-x py-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Service Areas" }]} />
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Service areas
          </h1>
          <p className="mt-3 max-w-2xl text-[16.5px] leading-7 text-muted">
            All locations below are configurable demo examples. Confirm exact coverage with the
            business owner before launch — no area is claimed until approved.
          </p>
        </div>
      </div>
      <section className="container-x py-12">
        <SectionHeading
          align="left"
          eyebrow="Coverage"
          title="Example areas around Cork"
          intro="Cork links to a full example page. Other towns are shown as badges to be enabled or removed."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l) => (
            <LocationCard key={l.slug} location={l} />
          ))}
        </div>
        <div className="mt-8 flex items-start gap-2 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-[14.5px] leading-6 text-amber-900">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
          <p>
            <strong>Demo note:</strong> only <Link href="/service-areas/cork" className="font-bold underline">Cork</Link> has
            a dedicated page in this demo. Additional location pages can be added from the same
            reusable template once coverage is confirmed.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
