// Central image references. All remote images use images.unsplash.com
// with Next.js remotePatterns configured in next.config.ts.
// These are widely-used stable Unsplash photo IDs with drainage-trade relevance
// (technicians, inspection equipment, pipework). Cropping is handled per usage.
function u(id: string, w = 1600): string {
  return `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;
}

export const images = {
  hero: u("photo-1585704032915-c3400ca199e7", 1400),
  heroAlt: "Drainage technician inspecting pipework under a sink",
  technician: u("photo-1621905251189-08b45d6a269e", 1200),
  technicianAlt: "Service technician carrying out practical repair work",
  engineerTablet: u("photo-1581092160562-40aa08e78837", 1200),
  engineerTabletAlt: "Engineer reviewing inspection readings on a tablet",
  engineerLaptop: u("photo-1581094794329-c8112a89af12", 1200),
  engineerLaptopAlt: "Drainage specialist reviewing survey information on site",
  pipes: u("photo-1504328345606-18bbc8c9d7d1", 1200),
  pipesAlt: "Industrial pipework similar to underground drainage runs",
  tools: u("photo-1607472586893-edb57bdc0e39", 1200),
  toolsAlt: "Professional hand tools used for plumbing and drainage work",
  cctv: u("photo-1581092160562-40aa08e78837", 1400),
  jetting: u("photo-1504328345606-18bbc8c9d7d1", 1400),
  repairs: u("photo-1621905251189-08b45d6a269e", 1400),
  blocked: u("photo-1585704032915-c3400ca199e7", 1400),
  septic: u("photo-1500382017468-9049fed747ef", 1400),
  septicAlt: "Green field typical of a rural septic tank setting",
  cork: u("photo-1467269204594-9661b134dd2b", 1400),
  corkAlt: "European streetscape representative of Cork city and suburbs",
  about: u("photo-1581094794329-c8112a89af12", 1400),
  contact: u("photo-1621905251189-08b45d6a269e", 1200),
} as const;

// Featured work gallery — DEMO ONLY. Replace with real client projects.
// Do not present these as completed ClearFlow jobs.
export const featuredWork = [
  {
    src: u("photo-1585704032915-c3400ca199e7", 900),
    alt: "Example: close inspection of domestic pipework (demo image)",
    title: "Domestic inspection — example",
    tag: "Demo example",
  },
  {
    src: u("photo-1621905251189-08b45d6a269e", 900),
    alt: "Example: technician at work on site (demo image)",
    title: "On-site attendance — example",
    tag: "Demo example",
  },
  {
    src: u("photo-1504328345606-18bbc8c9d7d1", 900),
    alt: "Example: pipe runs typical of commercial drainage (demo image)",
    title: "Pipework review — example",
    tag: "Demo example",
  },
  {
    src: u("photo-1581092160562-40aa08e78837", 900),
    alt: "Example: camera survey review workflow (demo image)",
    title: "Survey review — example",
    tag: "Demo example",
  },
  {
    src: u("photo-1607472586893-edb57bdc0e39", 900),
    alt: "Example: hand tools laid out for a repair visit (demo image)",
    title: "Repair preparation — example",
    tag: "Demo example",
  },
  {
    src: u("photo-1581094794329-c8112a89af12", 900),
    alt: "Example: reporting and next steps discussion (demo image)",
    title: "Reporting — example",
    tag: "Demo example",
  },
] as const;
