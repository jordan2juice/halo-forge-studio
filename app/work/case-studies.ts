// app/work/case-studies.ts

type CaseStudyImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  subtitle: string;
  role: string;
  challenge: string;
  solution: string;
  outcome: string;
  tags: string[];
  images?: CaseStudyImage[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "st-gabriel-parish",
    client: "St. Gabriel Catholic Parish",
    title: "A clearer digital front door for a growing parish",
    subtitle:
      "Redesigned the parish website so families, newcomers, and long‑time parishioners can quickly find Mass times, sacraments, events, and ways to get involved.",
    role: "UX, visual design, front-end development",
    challenge:
      "St. Gabriel’s old website had grown confusing over time, with scattered Mass times, outdated ministry pages, and important information buried in long menus and PDFs. Parish staff were fielding the same basic questions every week because people could not easily find answers online.",
    solution:
      "Halo Forge Studio restructured the site around the core tasks parishioners actually come to the site for: Mass and confession times, sacraments, events, and giving. A simplified navigation, clear calls to action, and a calmer visual system made it easier to scan on mobile and desktop. Key sections like Mass times and directions moved to the homepage, while sacraments and ministries received dedicated, scannable pages.",
    outcome:
      "The new website gives St. Gabriel a welcoming, mission‑aligned online presence that feels consistent with the parish’s liturgical life. Parishioners can now find Mass times, sacraments, and contact information within a couple of clicks, reducing repeat questions to the office and making it easier for newcomers to take their next step into parish life.",
    tags: ["Website redesign", "UX & UI", "Catholic parish"],
    images: [
      {
        src: "/images/case-studies/st-gabriel/stg-desktop.png",
        alt: "St. Gabriel parish website homepage mockup on desktop",
        caption:
          "Redesigned homepage highlighting Mass times, sacraments, and events.",
      },
      {
        src: "/images/case-studies/st-gabriel/stg-mobile.png",
        alt: "Mobile view of Mass times section",
        caption: "Mobile Mass times layout for quick access on Sundays.",
      },
    ],
  },
  {
    slug: "little-crown-rosaries",
    client: "Little Crown Rosaries",
    title: "A handcrafted Catholic brand for a handcrafted rosary shop",
    subtitle:
      "Developed a reverent, handcrafted visual identity and ecommerce site so customers can confidently find, compare, and purchase the right rosary for their prayer life.",
    role: "Brand identity, UX, visual design, front-end development",
    challenge:
      "Little Crown Rosaries sold beautiful handmade sacramentals, but the brand felt generic and the shop lived inside a cluttered ecommerce theme. Visitors struggled to see what made these rosaries distinct, compare designs, or feel confident ordering a sacramental online.",
    solution:
      "Starting with brand foundations, a new logo, color palette, and type system were created to reflect the shop’s Marian devotion and handcrafted quality. The ecommerce site was then rebuilt around those visuals, reorganizing the catalog into clear categories like everyday rosaries, sacrament gifts, and custom commissions with filters for material, color, and price, plus trust‑building content such as a rosary buying guide, care instructions, and craftsmanship details.",
    outcome:
      "The refreshed brand and website now present Little Crown Rosaries as a focused, trustworthy Catholic maker rather than just another generic shop. Visitors can quickly narrow in on the right rosary, understand the story and durability behind each piece, and move from browsing to purchase with less friction, supporting stronger online sales and fewer pre‑purchase questions.",
    tags: ["Brand identity", "E‑commerce", "UX & UI", "Catholic retail"],
    images: [
      {
        src: "/images/case-studies/little-crown/lcr-brand.png",
        alt: "Little Crown Rosaries brand board with logo, colors, and type",
        caption: "Brand system balancing Marian blues with warm neutrals.",
      },
      {
        src: "/images/case-studies/little-crown/lcr-shop.png",
        alt: "Product grid of rosaries on the website",
        caption: "Reorganized product grid with filters by material and use.",
      },
    ],
  },
  {
    slug: "emmaus-outreach-ministry",
    client: "Emmaus Outreach Ministry",
    title: "Clarifying the path into a growing Catholic ministry",
    subtitle:
      "Restructured a ministry website so parishes, donors, and seekers understand the mission quickly and can take a clear next step.",
    role: "Information architecture, UX writing, front-end development",
    challenge:
      "Emmaus Outreach offered retreats, small groups, and resources, but its website was text‑heavy, hard to navigate, and did not clearly communicate who the ministry served or how to get involved. Different audiences—parish leaders, donors, and individuals—were landing on the same confusing pages.",
    solution:
      "The homepage was reframed around a simple “Who we serve, What we offer, How to join” structure with clearer language and calls to action. Navigation was simplified into a few main paths for parishes, individuals, and supporters, and new content blocks highlighted signature retreats, testimonies, and ways to partner with the ministry.",
    outcome:
      "The redesigned site gives seekers and parish partners a much clearer path into the ministry, with improved visibility for events and programs and content that better reflects Emmaus Outreach’s Catholic identity and mission‑driven work.",
    tags: ["Nonprofit", "Catholic ministry", "Website redesign"],
    images: [
      {
        src: "/images/case-studies/emmaus-outreach/eom-homepage.png",
        alt: "Emmaus Outreach Ministry homepage mockup",
        caption:
          "Mission-focused homepage clarifying who the ministry serves and how to get involved.",
      },
      {
        src: "/images/case-studies/emmaus-outreach/eom-pathway.png",
        alt: "Three primary paths for parishes, individuals, and supporters",
        caption:
          "Simple three-path layout guiding parishes, individuals, and supporters to the right content.",
      },
      {
        src: "/images/case-studies/emmaus-outreach/eom-mobile.png",
        alt: "Mobile view of upcoming retreats and events",
        caption:
          "Mobile events list with clear titles, dates, and calls to register or learn more.",
      },
    ],
  },
  {
    slug: "hope-harbor-counseling",
    client: "Hope & Harbor Counseling",
    title:
      "A welcoming digital front door for a faith-informed counseling practice",
    subtitle:
      "Built a grounded, reassuring website for a Christian counseling practice that speaks to both faith-based and secular clients.",
    role: "UX strategy, content structure, front-end development",
    challenge:
      "Hope & Harbor needed to communicate professional counseling services that are quietly grounded in Christian faith without alienating secular clients or those unsure about religion. The existing site buried services, had weak SEO, and lacked a clear path from learning about the practice to requesting an appointment.",
    solution:
      "A calm, uncluttered layout was designed that leads with client concerns and outcomes first, with gentle, opt‑in language about how faith can be integrated into therapy. Service pages and specialties were clarified, location‑specific SEO content was added, and a simple intake flow was created that guides visitors toward a single, focused contact form.",
    outcome:
      "Prospective clients now understand who the practice serves, what issues it specializes in, and how faith can be incorporated if desired, resulting in more qualified inquiries and a site that feels both clinically credible and quietly rooted in Christian hope.",
    tags: ["Professional services", "Counseling", "Faith-informed"],
    images: [
      {
        src: "/images/case-studies/hope-harbor/hh-homepage.png",
        alt: "Hope & Harbor Counseling homepage mockup",
        caption:
          "Homepage leading with client concerns and outcomes, with gentle faith-informed messaging.",
      },
      {
        src: "/images/case-studies/hope-harbor/hh-services.png",
        alt: "Service list and specialties layout",
        caption:
          "Service and specialties layout that makes it easy to see who the practice serves and how.",
      },
      {
        src: "/images/case-studies/hope-harbor/hh-mobile.png",
        alt: "Mobile intake and contact form for new clients",
        caption:
          "Streamlined intake form on mobile guiding visitors toward a single clear next step.",
      },
    ],
  },
  {
    slug: "cedar-and-cross-shops",
    client: "Cedar & Cross Shops",
    title: "A unified Catholic gifting brand with a modern storefront",
    subtitle:
      "Crafted a warm, wood‑and‑gold identity and streamlined ecommerce site so Catholic shoppers can quickly discover meaningful gifts and sacramentals.",
    role: "Brand identity, UX, visual design, front-end development",
    challenge:
      "Cedar & Cross brought together multiple Catholic makers under one shop, but the brand felt pieced together and the website made it hard to browse by occasion or devotion. Visitors often landed on product pages from social media without understanding the bigger story of the shop, and the cluttered navigation made it difficult to find gifts for specific sacraments or seasons.",
    solution:
      "A coherent visual identity was developed around the imagery of carved wood and the cross, pairing a refined wordmark with a warm, restrained color palette and simple typographic system. The ecommerce experience was rebuilt to highlight curated collections such as sacrament gifts, home altars, and seasonal devotionals, with filters for price, recipient, and feast, plus storytelling blocks that explain the mission and feature Catholic makers.",
    outcome:
      "The new Cedar & Cross brand and website present the shop as a focused, mission‑driven destination for Catholic gifts rather than a generic marketplace. Shoppers can browse by occasion, devotion, or collection, understand the spiritual meaning behind products, and complete purchases more easily on mobile and desktop, supporting stronger repeat business and collaboration with featured makers.",
    tags: ["Brand identity", "E‑commerce", "UX & UI", "Catholic retail"],
    images: [
      {
        src: "/images/case-studies/cedar-cross/cc-homepage.png",
        alt: "Cedar & Cross Shops ecommerce homepage mockup on desktop",
        caption:
          "Homepage featuring curated collections for sacrament gifts, home altars, and seasonal devotionals.",
      },
      {
        src: "/images/case-studies/cedar-cross/cc-shop.png",
        alt: "Product collection grid for Catholic gifts",
        caption:
          "Collection grid organized by occasion and devotion so shoppers can quickly find the right gift.",
      },
      {
        src: "/images/case-studies/cedar-cross/cc-mobile.png",
        alt: "Mobile product detail page for a Catholic gift",
        caption:
          "Mobile product page with clear materials, meaning, and related items to encourage browsing.",
      },
    ],
  },
  {
    slug: "holy-mountain-retreat",
    client: "Holy Mountain Retreat Center",
    title: "A calm, clear website for a Catholic retreat center",
    subtitle:
      "Designed a peaceful, practical site so retreatants, parishes, and directors can quickly find dates, lodging details, and how to book time away.",
    role: "UX architecture, visual design, front-end development",
    challenge:
      "Holy Mountain served parishes and individuals with retreats year-round, but its old site buried schedules, pricing, and lodging details across multiple PDF downloads. Retreatants struggled to understand what was offered, who each retreat was for, and how to actually reserve dates.",
    solution:
      "The site was reorganized around three primary paths—individual retreats, parish/group retreats, and clergy days—each with clear descriptions, pricing, and FAQs. A calm, image-light layout using your Halo Forge dusk, gold, and linen palette makes key information easy to scan, while an availability calendar and simple inquiry form reduce back-and-forth emails.",
    outcome:
      "Retreatants can now discern the right offering at a glance, parishes can quickly get answers about group logistics, and the staff spends less time answering basic questions. The center presents a welcoming, trustworthy digital front door that matches the quiet, prayerful experience on the grounds.",
    tags: ["Retreat center", "UX & UI", "Catholic nonprofit"],
    images: [
      {
        src: "/images/case-studies/holy-mountain/hm-homepage.png",
        alt: "Holy Mountain Retreat Center homepage mockup on desktop",
        caption:
          "Homepage featuring clear retreat paths for individuals, parishes, and clergy, set in your dusk and gold palette.",
      },
      {
        src: "/images/case-studies/holy-mountain/hm-calendar.png",
        alt: "Retreat availability calendar interface",
        caption:
          "Simple availability view so visitors can quickly see open dates without downloading PDFs.",
      },
      {
        src: "/images/case-studies/holy-mountain/hm-mobile.png",
        alt: "Mobile view of the retreat inquiry form",
        caption:
          "Streamlined mobile inquiry form with only the fields staff actually need to respond.",
      },
    ],
  },
];
