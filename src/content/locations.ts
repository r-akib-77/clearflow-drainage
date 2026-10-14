export interface DemoLocation {
  slug: string;
  name: string;
  short: string;
  blurb: string;
  detail: string[];
  isPrimary?: boolean;
  // All locations in this demo are examples awaiting owner confirmation.
  isExample: true;
}

export const locations: DemoLocation[] = [
  {
    slug: "cork",
    name: "Cork City & Suburbs",
    short: "Cork",
    blurb: "Example primary service area covering the city, suburbs and nearby towns.",
    detail: [
      "Cork is shown as the example primary area in this demo — covering the city centre, suburbs such as Bishopstown, Blackrock, Douglas and Wilton, and nearby towns where access allows.",
      "Customers would typically share their Eircode and property type so travel and access can be considered. Exact boundaries, call-out arrangements and scheduling would be confirmed by the business before launch.",
    ],
    isPrimary: true,
    isExample: true,
  },
  {
    slug: "ballincollig",
    name: "Ballincollig",
    short: "Ballincollig",
    blurb: "Example area west of the city — confirm coverage before launch.",
    detail: ["Listed as a configurable demo example."],
    isExample: true,
  },
  {
    slug: "carrigaline",
    name: "Carrigaline",
    short: "Carrigaline",
    blurb: "Example area south of the city — confirm coverage before launch.",
    detail: ["Listed as a configurable demo example."],
    isExample: true,
  },
  {
    slug: "cobh",
    name: "Cobh",
    short: "Cobh",
    blurb: "Example harbour town — confirm coverage before launch.",
    detail: ["Listed as a configurable demo example."],
    isExample: true,
  },
  {
    slug: "midleton",
    name: "Midleton",
    short: "Midleton",
    blurb: "Example East Cork town — confirm coverage before launch.",
    detail: ["Listed as a configurable demo example."],
    isExample: true,
  },
  {
    slug: "mallow",
    name: "Mallow",
    short: "Mallow",
    blurb: "Example North Cork town — confirm coverage before launch.",
    detail: ["Listed as a configurable demo example."],
    isExample: true,
  },
];

export function getLocation(slug: string): DemoLocation | undefined {
  return locations.find((l) => l.slug === slug);
}
