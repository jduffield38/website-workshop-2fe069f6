import { createFileRoute } from "@tanstack/react-router";
import {
  SiteChrome,
  GameHero,
  FeatureGrid,
  OtherAppsSection,
} from "../../components/SiteChrome";
import icon from "../../assets/vocabflex-icon.png";

export const Route = createFileRoute("/games/vocabflex")({
  head: () => ({
    meta: [
      { title: "VocabFlex — VibeEdge Learning" },
      {
        name: "description",
        content:
          "VocabFlex is a browser-based SSAT vocabulary trainer with flashcards, quizzes, matching games, Greek and Latin word roots, and analogy practice.",
      },
      { property: "og:title", content: "VocabFlex" },
      {
        property: "og:description",
        content:
          "Interactive SSAT vocabulary practice with flashcards, quizzes, roots, and analogies — right in your browser.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VocabflexPage,
});

const features = [
  {
    title: "Flashcards",
    body: "Flip through curated SSAT vocabulary with definitions, synonyms, and example sentences. Mark words as known to focus on what you still need to learn.",
  },
  {
    title: "Audio Flashcards",
    body: "Hear each word pronounced with built-in text-to-speech so you learn how it sounds, not just how it looks.",
  },
  {
    title: "Definition Quiz",
    body: "Multiple-choice rounds ask you to pick the right definition for each word. Earn Flex Points for first-try correct answers.",
  },
  {
    title: "Sentence Completion",
    body: "Read a sentence with a missing word and choose the vocabulary term that fits — practice for exactly the kind of question SSAT asks.",
  },
  {
    title: "Word Matching",
    body: "Match words to their synonyms in fast-paced rounds that build recognition and recall.",
  },
  {
    title: "Word Roots",
    body: "Learn Greek and Latin roots so you can decode unfamiliar words on test day, with flashcards and a meaning quiz.",
  },
  {
    title: "Analogy Practice",
    body: "Develop critical thinking with SSAT-style analogy questions that train word-relationship reasoning.",
  },
  {
    title: "Words of the Day",
    body: "Get a fresh set of words each day to keep vocabulary study consistent without feeling overwhelming.",
  },
  {
    title: "Flex Points & Progress",
    body: "Earn Flex Points for correct answers and perfect runs, and track your progress across every word and study mode.",
  },
];

function VocabflexPage() {
  return (
    <SiteChrome>
      <GameHero
        icon={icon}
        title="VocabFlex"
        tagline="Interactive SSAT vocabulary practice, right in your browser."
        webUrl="https://vocabflex.vibeedge.app"
      />

      <section className="py-16">
        <div className="container mx-auto px-5 max-w-3xl space-y-4">
          <h2 className="text-3xl font-bold mb-4">Build SSAT Vocabulary Your Way</h2>
          <p className="text-lg text-muted-foreground">
            VocabFlex is a browser-based study app built to make SSAT vocabulary
            preparation engaging and effective. Choose from three focused
            categories — vocabulary study, word roots, and analogy practice —
            and pick the game mode that fits how you learn best.
          </p>
          <p className="text-muted-foreground">
            Every mode tracks your progress, rewards first-try correct answers
            with Flex Points, and lets you mark words as known so you always
            spend time on the vocabulary that matters most.
          </p>
          <p className="text-muted-foreground">
            No downloads, no accounts to set up — just open the app in your
            browser and start studying.
          </p>
        </div>
      </section>

      <FeatureGrid features={features} />

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-5 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Try VocabFlex now</h2>
          <p className="text-muted-foreground mb-8">
            Open the app in your browser and start earning Flex Points on your
            first round.
          </p>
          <a
            href="https://vocabflex.vibeedge.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:opacity-90 transition"
          >
            Launch VocabFlex
          </a>
        </div>
      </section>

      <OtherAppsSection currentSlug="vocabflex" />
    </SiteChrome>
  );
}
