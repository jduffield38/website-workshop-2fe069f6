import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { SiteChrome, GameHero, FeatureGrid, ScreenshotGrid, OtherAppsSection } from "../../components/SiteChrome";
import icon from "../../assets/kpop-icon.png";
import shot1 from "../../assets/kpop1.jpg";
import shot2 from "../../assets/kpop2.jpg";
import shot3 from "../../assets/kpop3.jpg";
import shot4 from "../../assets/kpop4.jpg";
import shot5 from "../../assets/kpop5.jpg";

export const Route = createFileRoute("/games/kpop-word-warrior")({
  head: () => ({
    meta: [
      { title: "K-POP Word Warrior — VibeEdge Learning" },
      { name: "description", content: "Master SSAT and ISEE vocabulary with a K-Pop themed app featuring flashcards, synonym matching, fill-in-the-blank, and word roots." },
      { property: "og:title", content: "K-POP Word Warrior" },
      { property: "og:description", content: "Master SSAT and ISEE vocabulary with a K-Pop themed app for standardized test prep." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KpopPage,
});

const features = [
  { title: "Words of the Day", body: "Focus daily on five carefully selected new words and master them before moving on—building consistency and depth." },
  { title: "Flashcards Mode", body: "Quick vocabulary building with idol-inspired designs that make memorization fun and effective." },
  { title: "Synonym Matching", body: "Fast-paced word connection games that help you understand word relationships and build deeper knowledge." },
  { title: "Fill in the Blank", body: "Context-based sentence completion challenges that mirror actual test questions." },
  { title: "Learn Word Roots", body: "Study Greek and Latin roots to unlock the meaning of unfamiliar words and expand your vocabulary exponentially." },
  { title: "K-Pop Aesthetic", body: "Stunning visuals, achievement badges, and customizable themes that make studying feel like entertainment." },
  { title: "Progress Tracking", body: "Detailed statistics show which words you've mastered and which need more practice." },
  { title: "Test-Focused Content", body: "Every word has been selected based on frequency in actual SSAT and ISEE exams." },
];

function KpopPage() {
  return (
    <SiteChrome>
      <GameHero
        icon={icon}
        title="K-POP Word Warrior"
        tagline="Master SSAT & ISEE Vocabulary with K-Pop Style!"
        appStoreUrl="https://apps.apple.com/us/app/kpop-word-warrior/id6751727701"
        webUrl="https://kpopww.vibeedge.app"
      />

      <section className="py-16">
        <div className="container mx-auto px-5 max-w-3xl space-y-4">
          <h2 className="text-3xl font-bold mb-4">Transform Test Prep Into an Engaging Experience</h2>
          <p className="text-lg text-muted-foreground">
            K-POP Word Warrior is your ultimate companion for mastering SSAT and ISEE vocabulary. With nearly 800 high-impact words that frequently appear on standardized tests, this app combines effective learning with the vibrant aesthetic of K-Pop culture.
          </p>
          <p className="text-muted-foreground">
            Walk into test day with confidence, knowing you'll recognize more words and boost your verbal scores. Whether you're studying during lunch breaks or late-night sessions, this app keeps you motivated while focusing on what matters most for test success.
          </p>
        </div>
      </section>

      <FeatureGrid features={features} />

      <ScreenshotGrid
        shots={[
          { src: shot1, caption: "Home Screen" },
          { src: shot2, caption: "Flashcards Mode" },
          { src: shot3, caption: "Game Mode" },
          { src: shot5, caption: "Learn Word Roots" },
          { src: shot4, caption: "Track Your Progress" },
        ]}
      />

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-5 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Vocabulary?</h2>
          <p className="mb-6">Play K-POP Word Warrior right in your browser, or download the iOS app — turn test prep into an exciting journey.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://kpopww.vibeedge.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[color:var(--brand-dark)] px-6 py-3 text-base font-semibold text-white hover:opacity-90 transition"
            >
              Launch web app <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="https://apps.apple.com/us/app/kpop-word-warrior/id6751727701"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
            >
              Download on the App Store
            </a>
          </div>
        </div>
      </section>

      <OtherAppsSection currentSlug="kpop-word-warrior" />
    </SiteChrome>
  );
}

