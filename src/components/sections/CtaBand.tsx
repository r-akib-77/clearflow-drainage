import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { business } from "@/config/business";

export default function CtaBand({
  title = "Need Help With a Drainage Problem?",
  intro = "Tell us what is happening and explore the next steps for requesting a quote.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="container-x pb-16">
      <div className="overflow-hidden rounded-3xl bg-navy px-6 py-12 text-center sm:px-12 card-shadow-lg">
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[16px] leading-7 text-slate-300">{intro}</p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/request-a-quote"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-7 py-3.5 text-[16px] font-bold text-deep transition-colors hover:bg-white"
          >
            Request a Quote <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-white/25 px-7 py-3.5 text-[16px] font-bold text-white hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
        <a
          href={business.phoneHref}
          className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-slate-300 hover:text-white"
        >
          <Phone className="h-4 w-4" aria-hidden /> Prefer to talk? {business.phoneDisplay} (demo)
        </a>
      </div>
    </section>
  );
}
