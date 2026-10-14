import Link from "next/link";
import { MapPin } from "lucide-react";
import type { DemoLocation } from "@/content/locations";

export default function LocationCard({ location }: { location: DemoLocation }) {
  if (location.slug === "cork") {
    return (
      <Link
        href="/service-areas/cork"
        className="group block rounded-2xl border border-line bg-white p-6 card-shadow transition-all hover:-translate-y-1 hover:border-brand/40"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist text-brand group-hover:bg-brand group-hover:text-white">
          <MapPin className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="mt-3 text-[17px] font-extrabold text-navy group-hover:text-brand">{location.name}</h3>
        <p className="mt-1 text-[14px] leading-6 text-muted">{location.blurb}</p>
        <span className="mt-3 inline-block rounded-full bg-teal/15 px-2.5 py-1 text-[12px] font-bold text-teal-dark">
          Example primary area
        </span>
      </Link>
    );
  }
  return (
    <div className="rounded-2xl border border-dashed border-line bg-mist/60 p-6">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-muted">
        <MapPin className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="mt-3 text-[17px] font-extrabold text-navy">{location.name}</h3>
      <p className="mt-1 text-[14px] leading-6 text-muted">{location.blurb}</p>
      <span className="mt-3 inline-block rounded-full bg-white px-2.5 py-1 text-[12px] font-bold text-muted">
        Demo example — confirm coverage
      </span>
    </div>
  );
}
