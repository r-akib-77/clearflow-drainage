export const business = {
  name: "ClearFlow Drainage",
  shortName: "ClearFlow",
  tagline: "Drainage solutions for homes and businesses in Cork",
  description:
    "ClearFlow Drainage is a demonstration website for residential and commercial drainage services in Cork, Ireland — including blocked drains, CCTV drain surveys, drain repairs, high-pressure jetting and septic tank service enquiries.",
  // Demo contact details — clearly labelled as placeholders in the UI config.
  // Replace with real details before launch.
  phoneDisplay: "(021) 496 0000",
  phoneHref: "tel:+353214960000",
  phoneNote: "Demo phone number — replace with the real business number before launch.",
  emailDisplay: "hello@clearflow-drainage.ie",
  emailHref: "mailto:hello@clearflow-drainage.ie",
  emailNote: "Demo email address — replace before launch.",
  areaServedGeneral: "Cork and surrounding areas",
  // No real office address is claimed. This is intentionally general.
  addressNote: "Service-area business (Cork). No office address listed in this demo.",
  baseUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://clearflow-drainage.ie",
  hoursNote: "Enquiries welcome during normal business hours.",
  isDemo: true,
} as const;

export type BusinessConfig = typeof business;
