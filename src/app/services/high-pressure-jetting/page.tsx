import { baseMetadata } from "@/lib/seo/metadata";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { getService } from "@/content/services";

export const metadata = baseMetadata({
  title: "High-Pressure Jetting in Cork",
  description:
    "High-pressure water jetting for suitable blockages, grease and debris in Cork. Suitability checked first.",
  path: "/services/high-pressure-jetting",
});

export default function Page() {
  const service = getService("high-pressure-jetting")!;
  return <ServiceDetailLayout service={service} />;
}
