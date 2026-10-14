export const navigation = {
  primary: [
    { label: "Services", href: "/services", hasDropdown: true },
    { label: "Service Areas", href: "/service-areas" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  servicesMenu: [
    { label: "All Services", href: "/services", desc: "Browse every drainage service" },
    { label: "Blocked Drains", href: "/services/blocked-drains", desc: "Slow drains and blockages" },
    { label: "CCTV Drain Surveys", href: "/services/cctv-drain-surveys", desc: "Camera inspections" },
    { label: "Drain Repairs", href: "/services/drain-repairs", desc: "Damaged pipes and defects" },
    { label: "High-Pressure Jetting", href: "/services/high-pressure-jetting", desc: "Clearing suitable blockages" },
    { label: "Septic Tank Services", href: "/services/septic-tank-services", desc: "Example content — to confirm" },
  ],
  footerServices: [
    { label: "Blocked Drains", href: "/services/blocked-drains" },
    { label: "CCTV Drain Surveys", href: "/services/cctv-drain-surveys" },
    { label: "Drain Repairs", href: "/services/drain-repairs" },
    { label: "High-Pressure Jetting", href: "/services/high-pressure-jetting" },
    { label: "Septic Tank Services", href: "/services/septic-tank-services" },
  ],
  footerCompany: [
    { label: "About", href: "/about" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Cork", href: "/service-areas/cork" },
    { label: "Contact", href: "/contact" },
    { label: "Request a Quote", href: "/request-a-quote" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
} as const;
