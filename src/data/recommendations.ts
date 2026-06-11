export interface Recommendation {
  initial: string;
  bg: string;
  color: string;
  name: string;
  role: string;
  badge: string;
  text: string;
}

export const recommendationsCopy = {
  seoTitle: "Recommendations",
  pageTitle: "What colleagues and leaders say about me",
};

export const recommendations: Recommendation[] = [
  {
    initial: "SM",
    bg: "#dcfce7",
    color: "var(--green-dim)",
    name: "Santhosh Maruthi",
    role: "JavaScript | React | NodeJs | MongoDB",
    badge: "Same Team · Walmart",
    text: "I highly recommend Prasantakumar. We worked closely for nearly 4 years at Walmart on a number of key business initiatives, and he consistently stood out as a vital asset to our team. Prasantakumar pairs deep technical knowledge with a rare approachability, making it seamless to collaborate with him on complex problems. He is an incredibly quick learner who adapts instantly to changing project demands and translates technical complexities into solid business solutions. His dedication, technical execution, and collaborative nature make him an invaluable addition to any engineering organization.",
  },
  {
    initial: "SK",
    bg: "#dbeafe",
    color: "var(--blue)",
    name: "Srinu Katari",
    role: "MERN Stack Developer | React | TypeScript",
    badge: "Same Team · Walmart Global Tech",
    text: "I had the pleasure of working with Prasanta on the Walmart Global Tech project, and I can say with confidence that he is one of the strongest engineers I've collaborated with. Despite coming from different organizations, we worked closely as part of the same project team, and Prasanta brought remarkable consistency and ownership to everything he did. He never needed close supervision — he took responsibility and delivered. What impressed me most was that he didn't just focus on his own work — he made the people around him better.",
  },
  {
    initial: "GS",
    bg: "#ede9fe",
    color: "var(--purple)",
    name: "Gaurang Sinha",
    role: "Associate Staff Engineer | Ex-Walmart",
    badge: "Different Companies",
    text: "Prasanta is a good problem solver. He always came up with solutions and unblocked fellow colleagues. His PRs used to very accurate with the right practices. He is a very good frontend engineer and a team player.",
  },
];
