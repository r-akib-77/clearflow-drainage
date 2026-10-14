import Link from "next/link";
import { Droplets } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container-x flex max-w-xl flex-col items-center py-20 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mist text-brand">
        <Droplets className="h-7 w-7" aria-hidden />
      </span>
      <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-navy">Page not found</h1>
      <p className="mt-3 text-[16px] leading-7 text-muted">
        Sorry — that page does not exist or was moved. Try the homepage, services or quote form.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="rounded-xl bg-brand px-6 py-3 text-[15px] font-bold text-white hover:bg-brand-dark">
          Back to Home
        </Link>
        <Link href="/request-a-quote" className="rounded-xl border border-line bg-white px-6 py-3 text-[15px] font-bold text-navy hover:border-navy">
          Request a Quote
        </Link>
      </div>
    </div>
  );
}
