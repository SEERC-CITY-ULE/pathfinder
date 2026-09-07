/**
 * The four project objectives, transcribed from the DoA.
 * Used on /index.astro and /about.
 */

export type Objective = {
  number: number;
  title: string;
  body: string;
};

export const objectives: Objective[] = [
  {
    number: 1,
    title: "Open dialogue, online and offline",
    body: "Build platforms — physical and digital — where youth, educators, policymakers, and industry leaders can debate whether AI is a crisis or an opportunity for the future of work.",
  },
  {
    number: 2,
    title: "Connect youth with employment ecosystems",
    body: "Bring young people into the rooms where work is changing — through networking events, study visits, and knowledge-sharing with employers, HR professionals, and employability counsellors.",
  },
  {
    number: 3,
    title: "Build practical, hands-on AI skills",
    body: "Run targeted upskilling programmes covering job readiness, basic AI literacy, adaptability, creativity, and an understanding of the EU policy landscape around AI and work.",
  },
  {
    number: 4,
    title: "Put youth at the EU policy table",
    body: "Encourage and equip young people to participate in AI-related policy debates at the European level — and influence policymakers to prioritise youth-focused AI policies and education reforms.",
  },
];
