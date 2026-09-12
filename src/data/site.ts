/* ==========================================================================
   SINGLE SOURCE OF TRUTH
   --------------------------------------------------------------------------
   Every piece of company copy, contact detail, service, project and person
   on the site is read from this file. To rebrand or fill in real content,
   edit here — no component needs to change.

   Images currently point at Unsplash so the design reads properly out of the
   box. Drop real photography into /public/images/ and swap the strings for
   "/images/your-file.jpg". Every image sits on a dark frame, so a missing
   file degrades gracefully instead of showing a broken white box.
   ========================================================================== */

export const company = {
  /* The wordmark is rendered in two parts: strong line + tracked-out line */
  markPrimary: "RED LINE",
  markSecondary: "Properties Development",

  legalName: "Red Line Properties Development LLC",
  shortName: "Red Line",

  tagline: "Building the Line Between Vision and Value",
  established: "2010",

  /* Used for <title>, meta description and structured data */
  seoTitle: "Red Line Properties Development — Real Estate & Investment",
  seoDescription:
    "Red Line Properties Development delivers residential, commercial and mixed-use real estate across the UAE — from acquisition and development through leasing, asset and facility management.",
  siteUrl: "https://www.redlineproperties.ae",
};

export const contact = {
  phone: "+971 4 000 0000",
  phoneHref: "+97140000000",
  altPhone: "+971 50 000 0000",
  altPhoneHref: "+971500000000",
  email: "info@redlineproperties.ae",
  salesEmail: "sales@redlineproperties.ae",
  addressLines: ["Office 000, Tower Name", "Business Bay, Dubai", "United Arab Emirates"],
  mapQuery: "Business Bay, Dubai, United Arab Emirates",
  hours: [
    { days: "Monday – Friday", time: "09:00 — 18:00" },
    { days: "Saturday", time: "10:00 — 14:00" },
    { days: "Sunday", time: "Closed" },
  ],
  socials: [
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "X", href: "#", icon: "x" },
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

export const hero = {
  eyebrow: "Real Estate & Development · United Arab Emirates",
  /* Rendered as separate lines; the last line takes the crimson accent */
  headlineLines: ["Precision in", "Property"],
  headlineAccent: "Development",
  lede:
    "A UAE-based developer and asset manager delivering residential, commercial and mixed-use property — from land acquisition and design through to leasing and long-term management.",
  primaryCta: { label: "View Our Projects", href: "/projects" },
  secondaryCta: { label: "Speak to Our Team", href: "/contact" },
  image:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=80",
  imageAlt: "Modern high-rise towers at dusk",
};

export const heroStats = [
  { value: "15", suffix: "+", label: "Years Operating" },
  { value: "48", suffix: "", label: "Projects Delivered" },
  { value: "2.4", suffix: "M", label: "Sq Ft Developed" },
  { value: "1200", suffix: "+", label: "Units Handed Over" },
];

/* -------------------------------------------------------------------------- */
/* About                                                                      */
/* -------------------------------------------------------------------------- */

export const about = {
  eyebrow: "About the Company",
  title: "A developer built on discipline, not volume.",
  body: [
    "Red Line Properties Development is a UAE-headquartered real estate developer and investment manager. We acquire, design, build and operate assets across the residential, commercial and mixed-use segments — holding the majority of what we deliver rather than selling out of it.",
    "That ownership position sets our standard. Every specification decision is made as an owner-operator who will maintain the building for decades, which is why our handovers close on schedule and our assets hold occupancy through the cycle.",
  ],
  points: [
    "End-to-end delivery under one accountable team",
    "Institutional-grade reporting and governance",
    "Long-hold ownership on the majority of our portfolio",
  ],
  cta: { label: "More About Us", href: "/about" },
  image:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
  imageAlt: "Contemporary office building facade",
  imageSecondary:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
  imageSecondaryAlt: "Interior of a finished residential unit",
  badge: { value: "2010", label: "Established" },
};

/* -------------------------------------------------------------------------- */
/* Services                                                                   */
/* -------------------------------------------------------------------------- */

export type Service = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  points: string[];
  image: string;
};

export const services: Service[] = [
  {
    id: "development",
    title: "Property Development",
    summary:
      "Ground-up delivery of residential, commercial and mixed-use assets — from feasibility and land acquisition through design, construction and handover.",
    detail:
      "We run development as a single accountable process rather than a chain of hand-offs. Feasibility, design management, contractor procurement, cost control and handover all sit with one internal team, which is how programmes stay on date and budget.",
    points: ["Feasibility & land acquisition", "Design & contractor management", "Cost control and handover"],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "investment",
    title: "Investment Advisory",
    summary:
      "Screening, underwriting and structuring for investors entering or expanding in the UAE property market.",
    detail:
      "We underwrite on conservative assumptions and model the downside first. Comparable analysis, scenario modelling, capex planning and a defined exit are prepared before capital is committed, and the structure is matched to the investor's risk and holding horizon.",
    points: ["Underwriting & feasibility", "Scenario and exit modelling", "Structuring and capital planning"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "sales-leasing",
    title: "Sales & Leasing",
    summary:
      "Data-led pricing, qualified demand and a transaction process that closes — for both our own stock and third-party mandates.",
    detail:
      "Pricing is set from live comparables rather than aspiration. We qualify buyers and tenants before viewing, manage documentation end to end, and report on enquiry-to-close conversion so pricing can be corrected early instead of after a unit has aged.",
    points: ["Comparable-based pricing", "Qualified buyer and tenant pipelines", "Documentation and transfer"],
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "asset-management",
    title: "Asset & Property Management",
    summary:
      "Day-to-day operation of owned and managed assets — occupancy, collections, maintenance and owner reporting.",
    detail:
      "We operate buildings to protect net income, not just to keep them running. Renewals are worked months ahead of expiry, arrears are managed on a fixed escalation path, and owners receive the same reporting pack every month without having to ask for it.",
    points: ["Tenancy and renewals", "Collections and arrears control", "Monthly owner reporting"],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "facility-management",
    title: "Facility Management",
    summary:
      "Planned maintenance, statutory compliance and vendor oversight that keeps assets in specification through their life.",
    detail:
      "Planned maintenance is scheduled against manufacturer intervals rather than run to failure. Statutory inspections, vendor SLAs and reactive response times are tracked centrally, and deferred maintenance is reported as a cost, not hidden.",
    points: ["Planned preventive maintenance", "Statutory and HSE compliance", "Vendor SLA management"],
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "consultancy",
    title: "Project Consultancy",
    summary:
      "Independent advisory for owners and developers — technical due diligence, programme recovery and cost review.",
    detail:
      "Brought in on assets that are already moving, we establish the real position first: where the programme actually stands, what the cost to complete is, and which risks are recoverable. The output is a decision, not a report.",
    points: ["Technical due diligence", "Programme and cost recovery", "Owner-side representation"],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
];

/* -------------------------------------------------------------------------- */
/* Projects                                                                   */
/* -------------------------------------------------------------------------- */

export type Project = {
  id: string;
  name: string;
  location: string;
  category: "Residential" | "Commercial" | "Mixed-Use";
  status: "Completed" | "Under Construction" | "Upcoming";
  year: string;
  units: string;
  area: string;
  summary: string;
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "the-meridian",
    name: "The Meridian Residences",
    location: "Business Bay, Dubai",
    category: "Residential",
    status: "Completed",
    year: "2023",
    units: "184 Units",
    area: "310,000 sq ft",
    summary:
      "A 32-storey residential tower of one to three-bedroom apartments with full amenity podium, delivered and fully handed over.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
    featured: true,
  },
  {
    id: "axis-commercial",
    name: "Axis Commercial Tower",
    location: "Al Quoz, Dubai",
    category: "Commercial",
    status: "Completed",
    year: "2022",
    units: "72 Offices",
    area: "245,000 sq ft",
    summary:
      "Grade-A office building with flexible floor plates, structured parking and a ground-floor retail frontage.",
    image:
      "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&w=1400&q=80",
    featured: true,
  },
  {
    id: "harbour-walk",
    name: "Harbour Walk",
    location: "Abu Dhabi Corniche",
    category: "Mixed-Use",
    status: "Under Construction",
    year: "2026",
    units: "220 Units · 40 Retail",
    area: "520,000 sq ft",
    summary:
      "Waterfront mixed-use development combining serviced residences, a retail promenade and a boutique office component.",
    image:
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=1400&q=80",
    featured: true,
  },
  {
    id: "vantage-heights",
    name: "Vantage Heights",
    location: "Jumeirah Village Circle, Dubai",
    category: "Residential",
    status: "Under Construction",
    year: "2026",
    units: "96 Units",
    area: "142,000 sq ft",
    summary:
      "Mid-rise residential building of efficiently planned studios and one-bedroom apartments targeting the end-user market.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "foundry-district",
    name: "The Foundry District",
    location: "Mussafah, Abu Dhabi",
    category: "Commercial",
    status: "Upcoming",
    year: "2027",
    units: "18 Warehouse Units",
    area: "410,000 sq ft",
    summary:
      "Light-industrial and logistics park with high-clearance warehouse units, offices and dedicated container access.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "lumen-plaza",
    name: "Lumen Plaza",
    location: "Sharjah",
    category: "Mixed-Use",
    status: "Completed",
    year: "2021",
    units: "64 Units · 22 Retail",
    area: "198,000 sq ft",
    summary:
      "Neighbourhood mixed-use scheme pairing residential floors above an anchored retail and F&B ground plane.",
    image:
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1400&q=80",
  },
];

export const projectFilters = ["All", "Residential", "Commercial", "Mixed-Use"] as const;

/* -------------------------------------------------------------------------- */
/* Why us                                                                     */
/* -------------------------------------------------------------------------- */

export const whyUs = {
  eyebrow: "Why Red Line",
  title: "Four commitments we hold ourselves to.",
  lede:
    "Development is a promise made years before it is kept. These are the terms we accept when we take one on.",
  items: [
    {
      num: "01",
      title: "Delivered on Date",
      body:
        "Programme dates are set once, from a contractor-validated schedule, and reported against monthly. When a date is at risk we say so early enough for it to be recoverable.",
    },
    {
      num: "02",
      title: "Owner-Grade Specification",
      body:
        "We hold most of what we build, so specification is chosen for a twenty-year maintenance cost rather than a handover-day photograph.",
    },
    {
      num: "03",
      title: "Transparent Numbers",
      body:
        "Investors and owners receive the same reporting pack every month — occupancy, collections, capex and variance — whether the quarter was good or not.",
    },
    {
      num: "04",
      title: "One Accountable Team",
      body:
        "Feasibility through facility management sits with one internal team. There is no hand-off point where responsibility quietly changes hands.",
    },
  ],
  image:
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Architectural detail of a modern building",
};

/* -------------------------------------------------------------------------- */
/* Leadership                                                                 */
/* -------------------------------------------------------------------------- */

export const leadership = {
  eyebrow: "Leadership",
  title: "The people accountable for delivery.",
  lede: "A senior team with direct experience across the UAE development and investment market.",
  members: [
    {
      name: "Full Name",
      role: "Founder & Chairman",
      bio: "Placeholder biography — replace with a two-line summary of background and remit.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Full Name",
      role: "Chief Executive Officer",
      bio: "Placeholder biography — replace with a two-line summary of background and remit.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Full Name",
      role: "Director of Development",
      bio: "Placeholder biography — replace with a two-line summary of background and remit.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Full Name",
      role: "Head of Asset Management",
      bio: "Placeholder biography — replace with a two-line summary of background and remit.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Founder's message                                                          */
/* -------------------------------------------------------------------------- */

export const founderMessage = {
  eyebrow: "Founder's Message",
  quote:
    "We measure ourselves on what stands after the handover — the buildings still holding occupancy, still in specification, still earning a decade later. That is a harder standard than a launch, and it is the only one worth setting.",
  name: "Full Name",
  role: "Founder & Chairman",
  image:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
};

/* -------------------------------------------------------------------------- */
/* Credentials strip                                                          */
/* -------------------------------------------------------------------------- */

export const credentials = {
  eyebrow: "Accreditations & Partners",
  note: "Replace these with real licence numbers, accreditations and partner marks.",
  items: [
    "RERA Registered",
    "ISO 9001:2015",
    "ISO 45001",
    "Dubai Land Department",
    "Abu Dhabi DMT",
    "Estidama Accredited",
  ],
};

/* -------------------------------------------------------------------------- */
/* Contact form                                                               */
/* -------------------------------------------------------------------------- */

export const contactForm = {
  /* Point this at Formspree, Netlify Forms, your own API route, etc. */
  action: "",
  subjects: [
    "General Enquiry",
    "Property Purchase",
    "Leasing Enquiry",
    "Investment Opportunity",
    "Property Management",
    "Careers",
    "Other",
  ],
};

/* -------------------------------------------------------------------------- */
/* Closing CTA                                                                */
/* -------------------------------------------------------------------------- */

export const closingCta = {
  title: "Let's discuss your next property decision.",
  body: "Whether you are buying, leasing, investing or appointing a developer, our team will give you a direct read on the numbers.",
  primary: { label: "Contact Us", href: "/contact" },
  secondary: { label: "Explore Services", href: "/services" },
};
