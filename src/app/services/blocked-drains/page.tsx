import { baseMetadata } from "@/lib/seo/metadata";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { getService } from "@/content/services";

export const metadata = baseMetadata({
  title: "Blocked Drains in Cork",
  description:
    "Help with slow drains, blockages, smells and gurgling in Cork. Learn when to enquire and what information helps.",
  path: "/services/blocked-drains",
});

export default function Page() {
  const service = getService("blocked-drains")!;
  return <ServiceDetailLayout service={service} />;
}
