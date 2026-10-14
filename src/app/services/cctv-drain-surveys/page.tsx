import { baseMetadata } from "@/lib/seo/metadata";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { getService } from "@/content/services";

export const metadata = baseMetadata({
  title: "CCTV Drain Surveys in Cork",
  description:
    "Camera inspections for recurring blockages, suspected damage and property checks in Cork.",
  path: "/services/cctv-drain-surveys",
});

export default function Page() {
  const service = getService("cctv-drain-surveys")!;
  return <ServiceDetailLayout service={service} />;
}
