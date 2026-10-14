import { images } from "@/config/images";

export type ServiceSlug =
  | "blocked-drains"
  | "cctv-drain-surveys"
  | "drain-repairs"
  | "high-pressure-jetting"
  | "septic-tank-services";

export interface ServiceContent {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longIntro: string[];
  image: string;
  imageAlt: string;
  icon: ServiceSlug;
  problems: { title: string; text: string }[];
  expectations: string[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  needsConfirmation?: string;
}

export const services: ServiceContent[] = [
  {
    slug: "blocked-drains",
    title: "Blocked Drains",
    shortTitle: "Blocked Drains",
    tagline: "Slow drains, blockages and unpleasant drainage issues — practical help to get things flowing.",
    description:
      "Help with slow-draining sinks, blocked toilets, gullies and outdoor drains for homes and businesses in Cork.",
    longIntro: [
      "A blocked drain can show up as a sink that drains slowly, water coming back up, gurgling sounds or unpleasant smells. In this demo, Blocked Drains covers the common situations customers ask about — from kitchen and bathroom blockages to outdoor gullies affected by leaves, grease or scale.",
      "Every blockage is different, so we describe a straightforward enquiry path: tell us what you are seeing, share the property type and location, and discuss sensible next steps such as an inspection or clearing visit where appropriate. No definitive diagnosis is made on the website — that needs someone to look at the actual drain.",
    ],
    image: images.blocked,
    imageAlt: "Drainage technician inspecting pipework under a sink",
    icon: "blocked-drains",
    problems: [
      { title: "Slow-draining sinks & basins", text: "Water that takes a long time to clear in kitchens or bathrooms." },
      { title: "Blocked toilets", text: "Toilets that flush poorly, fill high or need repeated flushing." },
      { title: "Outdoor gullies & grates", text: "Surface water that pools around yards, driveways or paths." },
      { title: "Smells & gurgling", text: "Unpleasant odours or noises that suggest restricted flow." },
      { title: "Recurring issues", text: "Problems that keep coming back and may need a camera inspection." },
    ],
    expectations: [
      "A clear conversation about what you are seeing and where",
      "Practical questions about property type, access and history",
      "An explanation of likely next steps, such as inspection or clearing",
      "Straightforward guidance on what information helps the visit",
      "No pressure — you decide how you want to proceed",
    ],
    process: [
      { title: "Describe the problem", text: "Use the quote form to outline symptoms, location and property type." },
      { title: "Share useful detail", text: "Add photos of gullies or affected areas if you can — optional." },
      { title: "Discuss next steps", text: "Talk through inspection or clearing options for your situation." },
      { title: "Arrange the visit", text: "Agree a suitable time and what access is needed on the day." },
    ],
    faqs: [
      { q: "What should I do first if a drain is blocked?", a: "Stop using the affected fixtures, avoid chemical cleaners that can cause harm, and note what you can see — which fittings are affected, any smells or water levels, and whether it is getting worse. Then send an enquiry with those details." },
      { q: "Can you clear every blockage in one visit?", a: "Many straightforward blockages can be addressed promptly, but some need inspection first — for example where there may be damage, roots or a deeper problem. The website does not promise a same-visit fix." },
      { q: "Should I request a CCTV survey as well?", a: "Not always. A survey is most useful for recurring problems or where damage is suspected. For a first-time straightforward blockage, an inspection or clearing visit is usually discussed first." },
    ],
  },
  {
    slug: "cctv-drain-surveys",
    title: "CCTV Drain Surveys",
    shortTitle: "CCTV Surveys",
    tagline: "Camera inspections that help investigate recurring problems and check drain condition.",
    description:
      "CCTV drain surveys to inspect drainage runs, investigate recurring issues and support repair decisions.",
    longIntro: [
      "A CCTV drain survey uses a camera to look inside accessible drainage runs. It is a practical way to investigate problems that keep coming back, check condition before building work, or gather information when buying or managing a property.",
      "Surveys are useful for homeowners dealing with repeated blockages and for commercial customers who need a clearer picture of their drainage — for example landlords, facilities managers or those arranging maintenance. Findings are explained in plain language with suggested next steps, not jargon.",
    ],
    image: images.cctv,
    imageAlt: "Engineer reviewing inspection readings on a tablet",
    icon: "cctv-drain-surveys",
    problems: [
      { title: "Recurring blockages", text: "Issues that return after clearing and need a closer look." },
      { title: "Suspected damage", text: "Possible cracks, displaced joints, root ingress or collapsed sections." },
      { title: "Pre-purchase checks", text: "Buyers who want information about drainage condition." },
      { title: "Extensions & building work", text: "Checks before or after work near drainage runs." },
      { title: "Commercial maintenance", text: "Property managers planning upkeep or investigating defects." },
    ],
    expectations: [
      "An outline of which runs can be accessed for the camera",
      "Plain-language explanation of what the footage shows",
      "Notes on locations or defects worth monitoring",
      "Practical options where further work may be relevant",
      "A written summary you can keep for your records",
    ],
    process: [
      { title: "Outline the reason", text: "Tell us why you are considering a survey — recurring issues, purchase, works, or maintenance." },
      { title: "Check access", text: "Confirm manhole and drain access so the visit can be planned." },
      { title: "Camera inspection", text: "Accessible runs are inspected and recorded." },
      { title: "Review findings", text: "Results are explained with practical suggested next steps." },
    ],
    faqs: [
      { q: "What is a CCTV drain survey?", a: "A camera is guided through accessible drains to record their internal condition. It helps locate restrictions, damage or features that cannot be seen from the surface." },
      { q: "How long does a survey take?", a: "It depends on the length and number of runs, access and condition. A straightforward domestic survey is often completed within a single visit; larger or commercial systems take longer." },
      { q: "Will I get a copy of the findings?", a: "In this demo we describe a plain-language summary with key observations and suggested next steps. Exact reporting formats would be confirmed by the business before launch." },
    ],
  },
  {
    slug: "drain-repairs",
    title: "Drain Repairs",
    shortTitle: "Drain Repairs",
    tagline: "Help with damaged pipes, persistent defects and drainage that needs more than clearing.",
    description:
      "Enquiries for damaged drainage pipes, recurring defects, leaks and repair planning in Cork.",
    longIntro: [
      "Some drainage problems point beyond a simple blockage — cracked or displaced pipes, persistent dips, root ingress or sections that have lost their shape. Drain repair enquiries start with understanding the symptoms and any previous investigations, such as a CCTV survey.",
      "Because repairs vary widely, this page focuses on helping customers describe what they are seeing and what has already been tried. Any repair approach would follow an on-site assessment — the website does not prescribe excavation, relining or any specific method.",
    ],
    image: images.repairs,
    imageAlt: "Service technician carrying out practical repair work",
    icon: "drain-repairs",
    problems: [
      { title: "Damaged pipework", text: "Cracks, fractures or displaced joints found during inspection." },
      { title: "Recurring blockages", text: "Repeat issues that suggest an underlying defect rather than debris alone." },
      { title: "Dips & standing water", text: "Sections where flow is restricted by shape or settlement." },
      { title: "Root ingress", text: "Roots entering through joints or defects and restricting flow." },
      { title: "Leaks & damp clues", text: "Unexplained damp, subsidence clues or unusually lush patches worth checking." },
    ],
    expectations: [
      "Questions about history, previous clearing and any survey footage",
      "Discussion of access, depths and surrounding surfaces",
      "Explanation of why an on-site assessment comes first",
      "Clear outline of information needed for a repair enquiry",
      "Honest note where further investigation is recommended",
    ],
    process: [
      { title: "Share the background", text: "Describe symptoms, history and any prior surveys or works." },
      { title: "Assessment", text: "The run is inspected so the defect and context are understood." },
      { title: "Discuss options", text: "Suitable approaches are talked through once the issue is seen." },
      { title: "Plan the work", text: "Access, timing and practicalities are agreed before anything proceeds." },
    ],
    faqs: [
      { q: "When might a drain repair be necessary?", a: "Typically when inspection points to physical damage or a defect that clearing alone will not resolve — for example cracked pipes, displaced joints or persistent dips. Confirmation always needs an on-site look." },
      { q: "Do all repairs need digging?", a: "Not necessarily. The right approach depends on the defect, depth, location and access. Options are only discussed after assessment — this site does not recommend a method." },
      { q: "Should I get a CCTV survey before asking about repairs?", a: "If you already have footage or a report, share it — it helps. If not, mention the symptoms and history; inspection can be arranged as a first step." },
    ],
  },
  {
    slug: "high-pressure-jetting",
    title: "High-Pressure Jetting",
    shortTitle: "Jetting",
    tagline: "Pressurised water cleaning for suitable blockages, grease and accumulated debris.",
    description:
      "High-pressure water jetting enquiries for suitable drainage blockages and debris build-up.",
    longIntro: [
      "High-pressure jetting uses controlled water pressure to clear suitable blockages and wash accumulated material — such as grease, silt or scale — from inside accessible drains. It is often discussed after a blockage or as part of planned upkeep for commercial systems.",
      "Jetting is not right for every drain. Fragile, damaged or unusual pipework needs assessment first, and some situations call for a camera inspection before or after cleaning. This page helps customers ask about jetting in a sensible way without assuming it is the answer.",
    ],
    image: images.jetting,
    imageAlt: "Industrial pipework similar to underground drainage runs",
    icon: "high-pressure-jetting",
    problems: [
      { title: "Grease build-up", text: "Kitchens and food premises where fats restrict flow." },
      { title: "Silt & debris", text: "Gullies and runs affected by leaves, grit or sediment." },
      { title: "Scale & deposits", text: "Internal build-up that narrows older runs." },
      { title: "Commercial upkeep", text: "Planned cleaning where heavy use causes accumulation." },
      { title: "Post-clearance clean", text: "Washing runs after a blockage to restore flow." },
    ],
    expectations: [
      "Questions about pipe material, age and known condition where available",
      "Check on access points and what is connected upstream",
      "Explanation where inspection is advised before jetting",
      "Clear outline of what jetting can and cannot address",
      "Practical aftercare notes for keeping drains flowing",
    ],
    process: [
      { title: "Describe the run", text: "Share location, use (domestic or commercial) and blockage history." },
      { title: "Suitability check", text: "Condition and access are considered before jetting is discussed." },
      { title: "Jetting visit", text: "Suitable runs are cleaned with controlled water pressure." },
      { title: "Review", text: "Flow is checked and further investigation suggested if needed." },
    ],
    faqs: [
      { q: "Is jetting safe for all drains?", a: "No. While suitable modern pipework usually handles jetting well, older, fragile or already-damaged drains need assessment first. A professional should decide on pressure and suitability on site." },
      { q: "Does jetting fix damaged pipes?", a: "No — jetting clears material and restores flow but does not repair cracks, displacements or collapses. Those need separate assessment and repair planning." },
      { q: "How often should commercial drains be jetted?", a: "It depends on use, grease management and history. Food businesses with heavy use often benefit from planned upkeep; others only need attention when symptoms appear." },
    ],
  },
  {
    slug: "septic-tank-services",
    title: "Septic Tank Services",
    shortTitle: "Septic Tanks",
    tagline: "Example septic tank inspection, maintenance and repair enquiries — to be confirmed.",
    description:
      "Example content for septic tank service enquiries in Cork. Scope must be confirmed by the business.",
    longIntro: [
      "This is example service content included for the sales demo. Many drainage companies in Cork are asked about septic tanks — inspections, general maintenance questions and repair enquiries for rural properties.",
      "Before launch, the business owner should confirm exactly which septic services are offered (for example, whether emptying is handled directly or via a partner, and which counties are covered). The enquiry form already supports septic enquiries so customers can describe what they need.",
    ],
    image: images.septic,
    imageAlt: "Green field typical of a rural septic tank setting",
    icon: "septic-tank-services",
    problems: [
      { title: "Slow drains in rural homes", text: "Example: properties on septic systems noticing sluggish flow." },
      { title: "Odours near tank or percolation area", text: "Example: smells that suggest the system needs attention." },
      { title: "Pooling or lush patches", text: "Example: surface clues sometimes linked to system issues." },
      { title: "Maintenance questions", text: "Example: owners asking about inspection intervals and care." },
      { title: "Pre-purchase queries", text: "Example: buyers seeking information on an existing system." },
    ],
    expectations: [
      "Clear note that this is example content awaiting confirmation",
      "Questions about system type, age and last attention where known",
      "Guidance on what details help (location, access, symptoms)",
      "Honest direction where a specialist assessment is needed",
      "No definitive diagnosis without an on-site look",
    ],
    process: [
      { title: "Describe the system", text: "Share what you know — tank type, age, last service, symptoms." },
      { title: "Confirm scope", text: "Check which septic services the business can actually provide." },
      { title: "Arrange assessment", text: "Agree access and timing for an on-site look where relevant." },
      { title: "Next steps", text: "Discuss findings and practical options in plain language." },
    ],
    faqs: [
      { q: "Is this a confirmed service?", a: "No. Septic tank content is included as an example for the demo. The real business must confirm which septic services — if any — will be offered before launch." },
      { q: "What should I include in a septic enquiry?", a: "Property location (including Eircode if handy), system type and age if known, when it was last attended to, and what you are noticing now." },
      { q: "Do you empty septic tanks?", a: "That depends on the operator. Some drainage firms empty tanks directly; others work with licensed partners or focus on inspections and repairs. Confirm scope before publishing." },
    ],
    needsConfirmation: "Example service — the business owner must confirm septic tank scope, coverage and any licensing notes before launch.",
  },
];

export function getService(slug: string): ServiceContent | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceNav = services.map((s) => ({
  slug: s.slug,
  title: s.title,
  href: `/services/${s.slug}`,
  description: s.description,
}));
