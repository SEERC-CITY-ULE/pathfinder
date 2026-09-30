/**
 * Site-wide metadata. Coordinators can edit any of these fields directly;
 * the changes propagate to every page on the next deploy.
 */

export const site = {
  name: "PATHFINDER",
  longName:
    "Unlocking the PotentiAl of YouTH on AI Learning For actIve transItion to employmeNt through DEmocratic paRticipation",
  tagline: "Youth voices shaping an AI-ready Europe",
  description:
    "PATHFINDER is an EU-funded CERV project (2026 to 2028) helping young people in Europe to build their AI skills, connections and voice they need to enter a changing labour market, with a particular focus on those facing the greatest barriers.",

  grant: {
    id: "101253819",
    programme: "CERV — Citizens, Equality, Rights and Values",
    call: "CERV-2025-CITIZENS-CIV",
    type: "Large Scale (CERV-LS)",
  },

  duration: {
    months: 24,
    start: "1 April 2026",
    end: "31 March 2028",
  },

  countries: [
    { code: "SK", name: "Slovakia", flag: "🇸🇰" },
    { code: "EL", name: "Greece", flag: "🇬🇷" },
    { code: "BA", name: "Bosnia & Herzegovina", flag: "🇧🇦" },
    { code: "BG", name: "Bulgaria", flag: "🇧🇬" },
    { code: "RS", name: "Serbia", flag: "🇷🇸" },
  ],

  coordinator: {
    name: "European Dialogue",
    country: "Slovakia",
    contactName: "Denisa Karabová",
    contactRole: "Project Coordinator",
    email: "info@the-pathfinder-project.eu",
  },

  social: {
    instagram: "",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/consortium", label: "Consortium" },
  { href: "/news-events", label: "News & events" },
  { href: "/outputs", label: "Outputs" },
] as const;
