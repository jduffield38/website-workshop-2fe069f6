import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome, GameHero, FeatureGrid, ScreenshotGrid, OtherAppsSection } from "../../components/SiteChrome";
import icon from "../../assets/readflex-icon.png";
import shot1 from "../../assets/readflex1.jpg";
import shot2 from "../../assets/readflex2.jpg";
import shot3 from "../../assets/readflex3.jpg";
import shot4 from "../../assets/readflex4.jpg";
import shot5 from "../../assets/readflex5.jpg";

export const Route = createFileRoute("/games/readflex")({
  head: () => ({
    meta: [
      { title: "ReadFlex — VibeEdge Learning" },
      { name: "description", content: "Improve reading comprehension and speed with adaptive exercises designed for the SAT, ACT, SSAT, and ISEE." },
      { property: "og:title", content: "ReadFlex" },
      { property: "og:description", content: "Adaptive reading comprehension training for standardized tests." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReadflexPage,
});

const features = [
  { title: "Diverse Passages", body: "Over 50 passages across literature, poetry, science, biography and history—mirroring actual test content." },
  { title: "Detailed Analytics", body: "Track progress, accuracy by question type, and improvement over time with comprehensive reports." },
  { title: "Instant Explanations", body: "Detailed explanations for every answer—understanding not just what's correct, but why and how." },
  { title: "Targeted Practice", body: "Focus on specific question types like main idea, inference, vocabulary in context, or author's purpose." },
  { title: "Light & Dark Mode", body: "Customize your reading experience to reduce eye strain during extended study sessions." },
  { title: "Highlighting & Side-by-Side", body: "Mark important text and view passages and questions side-by-side on tablets for an optimized experience." },
];

function ReadflexPage() {
  return (
    <SiteChrome>
      <GameHero
        icon={icon}
        title="ReadFlex"
        tagline="Master Reading Comprehension and Boost Your Test Scores"
        webUrl="https://readflex.vibeedge.app"
      />

      <section className="py-16">
        <div className="container mx-auto px-5 max-w-3xl space-y-4">
          <h2 className="text-3xl font-bold mb-4">Adaptive Reading Comprehension Training</h2>
          <p className="text-lg text-muted-foreground">
            ReadFlex is your intelligent companion for mastering reading comprehension on standardized tests. Using adaptive technology, the app adjusts to your skill level and provides targeted practice to improve both speed and understanding.
          </p>
          <p className="text-muted-foreground">
            Whether you're preparing for the SAT, ACT, SSAT, ISEE, or any other standardized test, ReadFlex helps you develop the critical reading strategies that top scorers use. Learn to quickly identify main ideas, understand author's purpose, make inferences, and analyze text structure.
          </p>
          <p className="text-muted-foreground">
            With ReadFlex, you'll build confidence in tackling even the most challenging reading passages and answering comprehension questions accurately under time pressure.
          </p>
        </div>
      </section>

      <FeatureGrid features={features} />

      <ScreenshotGrid
        shots={[
          { src: shot5, caption: "Main Screen — Dark Mode" },
          { src: shot1, caption: "Main Screen — Light Mode" },
          { src: shot4, caption: "Reading Tab" },
          { src: shot3, caption: "Question Tab" },
          { src: shot2, caption: "Progress Statistics" },
        ]}
      />

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-5 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Essential Reading Skills You'll Master</h2>
          <div className="grid gap-8 md:grid-cols-2 text-muted-foreground">
            <ul className="space-y-2 list-disc pl-6">
              <li><strong className="text-foreground">Main Idea Identification:</strong> Quickly determine the central theme of passages</li>
              <li><strong className="text-foreground">Detail Recognition:</strong> Locate and understand specific information</li>
              <li><strong className="text-foreground">Inference Making:</strong> Draw conclusions from implicit information</li>
              <li><strong className="text-foreground">Vocabulary in Context:</strong> Determine word meanings from surrounding text</li>
            </ul>
            <ul className="space-y-2 list-disc pl-6">
              <li><strong className="text-foreground">Author's Purpose:</strong> Understand why the author wrote the passage</li>
              <li><strong className="text-foreground">Tone &amp; Style:</strong> Analyze the author's attitude and writing approach</li>
              <li><strong className="text-foreground">Text Structure:</strong> Recognize organizational patterns</li>
              <li><strong className="text-foreground">Critical Analysis:</strong> Evaluate arguments and evidence</li>
            </ul>
          </div>
        </div>
      </section>

      <OtherAppsSection currentSlug="readflex" />
    </SiteChrome>
  );
}

