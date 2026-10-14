import { baseMetadata } from "@/lib/seo/metadata";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/forms/QuoteForm";

export const metadata = baseMetadata({
  title: "Request a Quote",
  description:
    "Request a drainage quote in Cork: browser-validated demo form. Nothing is sent or stored — enquire about blocked drains, surveys, repairs and more.",
  path: "/request-a-quote",
});

export default function QuotePage() {
  return (
    <>
      <div className="border-b border-line bg-mist">
        <div className="container-x py-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Request a Quote" }]} />
          <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Request a quote
          </h1>
          <p className="mt-3 max-w-2xl text-[16.5px] leading-7 text-muted">
            Describe the problem and share your location. This is a frontend demo — validation
            happens in your browser and nothing is transmitted or stored.
          </p>
        </div>
      </div>
      <section className="container-x grid gap-8 py-12 lg:grid-cols-[1.5fr_1fr]">
        <QuoteForm />
        <aside className="space-y-4">
          <div className="rounded-2xl bg-navy p-6 text-white">
            <h2 className="text-[18px] font-extrabold">What helps your enquiry?</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[14.5px] leading-6 text-slate-200">
              <li>Which drains or fixtures are affected</li>
              <li>When it started and whether it is getting worse</li>
              <li>Property type and Eircode</li>
              <li>Any smells, sounds or water levels you have noticed</li>
              <li>Photos of accessible gullies (optional)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-mist p-6 text-[14px] leading-6 text-muted">
            <strong className="text-navy">Demo behaviour:</strong> submitting shows a success
            message and explicitly states that no enquiry was sent. Duplicate submissions are
            prevented while the simulated delay runs. Photo previews are local-only via object
            URLs and are discarded when removed.
          </div>
        </aside>
      </section>
    </>
  );
}
