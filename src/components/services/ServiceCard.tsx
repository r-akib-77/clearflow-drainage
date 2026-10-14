import Link from "next/link";
import { ArrowRight, Camera, Container, Droplet, Wrench, Waves } from "lucide-react";
import type { ServiceSlug } from "@/content/services";

const icons: Record<ServiceSlug, typeof Droplet> = {
  "blocked-drains": Droplet,
  "cctv-drain-surveys": Camera,
  "drain-repairs": Wrench,
  "high-pressure-jetting": Waves,
  "septic-tank-services": Container,
};

export function ServiceIcon({ slug, className = "h-6 w-6" }: { slug: ServiceSlug; className?: string }) {
  const Icon = icons[slug];
  return <Icon className={className} aria-hidden />;
}

export default function ServiceCard({
  slug,
  title,
  description,
}: {
  slug: ServiceSlug;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 card-shadow transition-all hover:-translate-y-1 hover:border-brand/40 hover:card-shadow-lg"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-teal transition-colors group-hover:bg-brand group-hover:text-white">
        <ServiceIcon slug={slug} />
      </span>
      <h3 className="mt-4 text-[18px] font-extrabold tracking-tight text-navy">{title}</h3>
      <p className="mt-2 flex-1 text-[14.5px] leading-6 text-muted">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-[14.5px] font-bold text-brand group-hover:gap-2.5">
        Learn more <ArrowRight className="h-4 w-4 transition-all" aria-hidden />
      </span>
    </Link>
  );
}
