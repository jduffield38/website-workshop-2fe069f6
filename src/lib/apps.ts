import kpopIcon from "../assets/kpop-icon.png";
import pandaIcon from "../assets/panda-icon.png";
import readflexIcon from "../assets/readflex-icon.png";

export type AppInfo = {
  slug: string;
  to: "/games/kpop-word-warrior" | "/games/pand-a-nalogies" | "/games/readflex";
  icon: string;
  title: string;
  tagline: string;
  body: string;
  tests: string[];
  appStoreUrl?: string;
};

export const apps: AppInfo[] = [
  {
    slug: "kpop-word-warrior",
    to: "/games/kpop-word-warrior",
    icon: kpopIcon,
    title: "K-POP Word Warrior",
    tagline: "Master SSAT & ISEE vocabulary with K-Pop style.",
    body: "Nearly 800 high-impact test words taught through flashcards, synonym matching, fill-in-the-blank, and word-root games with a K-Pop aesthetic.",
    tests: ["SSAT", "ISEE"],
    appStoreUrl: "https://apps.apple.com/us/app/kpop-word-warrior/id6751727701",
  },
  {
    slug: "pand-a-nalogies",
    to: "/games/pand-a-nalogies",
    icon: pandaIcon,
    title: "Pand-a-nalogies",
    tagline: "Build analogy skills with an adorable panda twist.",
    body: "Three difficulty levels, smart hints, and a built-in dictionary help students ace analogy questions with a fun, panda-themed interface.",
    tests: ["SSAT", "ISEE"],
  },
  {
    slug: "readflex",
    to: "/games/readflex",
    icon: readflexIcon,
    title: "ReadFlex",
    tagline: "Adaptive reading comprehension for standardized tests.",
    body: "Boost reading comprehension and speed with adaptive exercises tailored to standardized test formats, with detailed progress tracking.",
    tests: ["SAT", "ACT", "SSAT", "ISEE"],
  },
];
