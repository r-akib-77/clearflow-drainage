import { baseMetadata } from "@/lib/seo/metadata";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata = baseMetadata({
  title: "Privacy Policy (Demo)",
  description: "Demonstration privacy policy placeholder for ClearFlow Drainage.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="container-x max-w-3xl py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy">Privacy Policy</h1>
      <p className="mt-2 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-[14px] text-amber-900">
        Demo placeholder — replace with a real privacy policy drafted for the live business before launch.
      </p>
      <div className="mt-6 space-y-4 text-[15.5px] leading-7 text-muted">
        <p>
          This demonstration website includes a quote form that validates entirely in your
          browser. No personal data is transmitted, stored, shared or uploaded. File selections
          are previewed locally and discarded when you remove them or leave the page.
        </p>
        <p>
          The live website should describe what data is collected, why, how long it is kept, who
          it is shared with, and how to exercise data-protection rights under GDPR.
        </p>
        <p>
          Contact details shown throughout this demo are placeholders and must be replaced before
          launch.
        </p>
      </div>
    </div>
  );
}
