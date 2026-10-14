import { baseMetadata } from "@/lib/seo/metadata";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { getService } from "@/content/services";

export const metadata = baseMetadata({
  title: "Drain Repairs in Cork",
  description:
    "Enquiries for damaged pipes, recurring defects and repair planning in Cork. Assessment first, always.",
  path: "/services/drain-repairs",
});

export default function Page() {
  const service = getService("drain-repairs")!;
  return <ServiceDetailLayout service={service} />;
}
