import { createFileRoute } from "@tanstack/react-router";
import { appJsonLd } from "../../lib/seo";
import { SiteChrome, GameHero, FeatureGrid, ScreenshotGrid, OtherAppsSection } from "../../components/SiteChrome";
import icon from "../../assets/panda-icon.png";
import shot1 from "../../assets/panda1.jpg";
import shot2 from "../../assets/panda2.jpg";
import shot3 from "../../assets/panda3.jpg";

export const Route = createFileRoute("/games/pand-a-nalogies")({
  head: () => ({
    meta: [
      { title: "Pand-a-nalogies — VibeEdge Learning" },
      { name: "description", content: "Master analogies with an adorable panda-themed learning game. Three difficulty levels, smart hints, and a built-in dictionary." },
      { property: "og:title", content: "Pand-a-nalogies" },
      { property: "og:description", content: "Master analogies with an adorable panda-themed learning game built for standardized test prep." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: appJsonLd("pand-a-nalogies"),
  }),
  component: PandaPage,
});

const features = [
  { title: "Three Difficulty Levels", body: "Progress from Easy to Medium to Hard as your skills develop, with each level introducing more complex relationships and vocabulary." },
  { title: "Smart Hint System", body: "Get helpful clues when stuck without giving away the answer—hints teach you to think through analogies systematically." },
  { title: "Built-in Dictionary", body: "Instant word definitions help expand vocabulary while you learn. Tap any word to see its meaning and usage." },
  { title: "Fresh Content", body: "Regularly updated analogy questions keep practice sessions engaging and challenging." },
  { title: "Achievement System", body: "Earn badges and rewards as you progress through difficulty levels and master different analogy types." },
  { title: "Friendly Interface", body: "Our adorable panda mascot provides encouragement and celebrates your successes, making learning feel like play." },
];

function PandaPage() {
  return (
    <SiteChrome>
      <GameHero
        icon={icon}
        title="Pand-a-nalogies"
        tagline="Master Analogies with Adorable Panda-Themed Learning!"
      />

      <section className="py-16">
        <div className="container mx-auto px-5 max-w-3xl space-y-4">
          <h2 className="text-3xl font-bold mb-4">Turn Analogy Practice Into Pandemonium of Fun!</h2>
          <p className="text-lg text-muted-foreground">
            Make analogy practice fun and effective with our adorable panda-themed learning game. Pand-a-nalogies helps students build critical thinking skills and ace analogy tests through engaging gameplay.
          </p>
          <p className="text-muted-foreground">
            Perfect for standardized test prep, classroom assignments, or building logical reasoning skills, Pand-a-nalogies transforms abstract thinking into concrete learning. Students develop pattern recognition, vocabulary, and analytical skills while enjoying our friendly panda mascot's encouragement.
          </p>
          <p className="text-muted-foreground">
            Whether you're just starting with simple analogies or tackling complex relationships, Pand-a-nalogies provides the perfect progression to master this essential skill.
          </p>
        </div>
      </section>

      <FeatureGrid features={features} />

      <ScreenshotGrid
        shots={[
          { src: shot1, caption: "Main Screen" },
          { src: shot2, caption: "Game Mode with Hints and Definitions" },
          { src: shot3, caption: "Statistics Tracking" },
        ]}
      />

      <section className="py-16">
        <div className="container mx-auto px-5 max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Why Analogies Matter</h2>
          <p className="text-muted-foreground mb-4">
            Analogies are a crucial component of many standardized tests including the SSAT, ISEE, SAT, and graduate school entrance exams. They test:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Vocabulary Knowledge:</strong> Understanding nuanced word meanings</li>
            <li><strong className="text-foreground">Logical Reasoning:</strong> Recognizing patterns and relationships</li>
            <li><strong className="text-foreground">Critical Thinking:</strong> Applying abstract concepts to new situations</li>
            <li><strong className="text-foreground">Problem-Solving:</strong> Systematic approach to complex questions</li>
          </ul>
        </div>
      </section>

      <OtherAppsSection currentSlug="pand-a-nalogies" />
    </SiteChrome>
  );
}

