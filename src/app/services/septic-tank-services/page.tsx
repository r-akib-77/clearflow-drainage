import { baseMetadata } from "@/lib/seo/metadata";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { getService } from "@/content/services";

export const metadata = baseMetadata({
  title: "Septic Tank Services (Example)",
  description:
    "Example septic tank enquiry content for Cork. Scope must be confirmed by the business before launch.",
  path: "/services/septic-tank-services",
});

export default function Page() {
  const service = getService("septic-tank-services")!;
  return <ServiceDetailLayout service={service} />;
}
