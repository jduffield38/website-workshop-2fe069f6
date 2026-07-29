import { createFileRoute, Link } from "@tanstack/react-router";
import icon from "../../assets/kpop-icon.png";

export const Route = createFileRoute("/games/kpop-word-warrior")({
  head: () => ({
    meta: [
      { title: "K-POP Word Warrior — VibeEdge Learning" },
      { name: "description", content: "Master SSAT & ISEE vocabulary through engaging K-Pop themed games." },
      { property: "og:title", content: "K-POP Word Warrior" },
      { property: "og:description", content: "Master SSAT & ISEE vocabulary through engaging K-Pop themed games." },
    ],
  }),
  component: GamePage,
});

function GamePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-5 py-16 max-w-3xl">
        <Link to="/" className="text-primary hover:underline text-sm">← Back to VibeEdge</Link>
        <div className="mt-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          <img src={icon} alt="K-POP Word Warrior" className="h-32 w-32 rounded-2xl shadow-lg" />
          <div>
            <h1 className="text-4xl font-extrabold mb-3">K-POP Word Warrior</h1>
            <p className="text-lg text-muted-foreground">
              Master SSAT &amp; ISEE vocabulary through engaging K-Pop themed games. Learn nearly 800 high-impact test words with flashcards, synonym matching, and fill-in-the-blank challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
