// ─────────────────────────────────────────────────────────────────────────────
// One of One Cleaning Solutions — single source of truth for all landing pages.
// Everything below is pulled straight from the client's flyers / logo / business
// card. Edit here and all three landing layouts update.
// ─────────────────────────────────────────────────────────────────────────────

export const business = {
  name: "One of One Cleaning Solutions",
  legalName: "One of One Cleaning Solutions LLC",
  shortName: "1OF1",
  tagline: "Houses · Restaurants · Cars · Trucks · Motorcycles and more!",
  phone: "518-331-2442",
  phoneHref: "tel:+15183312442",
  location: "Broadalbin, New York",
  email: "", // add when the client provides one
  estimate: "Free Estimates",
  // Real brand art lives in /public. Both logo JPGs are white-on-solid-black,
  // so they blend on dark surfaces and want a black tile on light ones.
  logoSquareSrc: "/logo_square.jpg", // 2048×2048 — the 1OF1 mark
  logoRectSrc: "/logo_rectangle.jpg", // 1640×924 — mark + name + phone + services
  ownerSrc: "/owner.jpg",
  owner: {
    name: "Owner & Operator", // replace with the owner's name
    blurb:
      "Locally owned and operated out of Broadalbin, NY. One of One was built on a simple promise: treat every job — from a single car to a full restaurant — like it's one of one. No shortcuts, no franchises, just detail-obsessed work and free, honest estimates.",
  },
  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
  },
} as const;

export type Service = {
  id: string;
  title: string;
  accent: string; // the "and Detailing" style sub-line from the flyer
  blurb: string;
  features: string[];
  icon: "restaurant" | "pressure" | "car";
};

export const services: Service[] = [
  {
    id: "restaurant",
    title: "Restaurant Cleaning",
    accent: "and Detailing",
    blurb:
      "Many different cleaning solutions from the front of the restaurant to the kitchen equipment — and anything in between.",
    features: [
      "Front of house cleaning",
      "Kitchen deep cleaning",
      "Restroom sanitation",
      "Kitchen hood / exhaust cleaning (coming soon)",
    ],
    icon: "restaurant",
  },
  {
    id: "pressure-washing",
    title: "Pressure Washing",
    accent: "and Detailing",
    blurb:
      "An in-depth clean for your house, driveway, patio and more — from the front of the house to the back.",
    features: [
      "Whole house soft wash",
      "Driveway / sidewalk",
      "Garage floors",
      "Windows and more!",
    ],
    icon: "pressure",
  },
  {
    id: "car-wash",
    title: "Car Wash",
    accent: "and Detailing",
    blurb:
      "A thorough detailing service with an in-depth interior detail, exterior wash, and wheels / tire shine.",
    features: [
      "Standard car wash",
      "Interior cleaning",
      "Exterior wash",
      "Wheels and tire shine",
    ],
    icon: "car",
  },
];

export const valueProps = [
  { title: "Free Estimates", body: "Every quote is free and no-pressure. Call and we'll come take a look." },
  { title: "Locally Owned", body: "Based right here in Broadalbin, NY and serving the surrounding area." },
  { title: "One of One Care", body: "Restaurants, homes, cars, trucks, motorcycles — each job done like it's the only one." },
];
