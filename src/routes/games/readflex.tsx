import { createFileRoute, Link } from "@tanstack/react-router";
import icon from "../../assets/readflex-icon.png";

export const Route = createFileRoute("/games/readflex")({
  head: () => ({
    meta: [
      { title: "ReadFlex — VibeEdge Learning" },
      { name: "description", content: "Improve reading comprehension and speed with adaptive exercises." },
      { property: "og:title", content: "ReadFlex" },
      { property: "og:description", content: "Improve reading comprehension and speed with adaptive exercises." },
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
          <img src={icon} alt="ReadFlex" className="h-32 w-32 rounded-2xl shadow-lg" />
          <div>
            <h1 className="text-4xl font-extrabold mb-3">ReadFlex</h1>
            <p className="text-lg text-muted-foreground">
              Improve reading comprehension and speed with adaptive exercises designed for standardized tests. Track your progress as you master reading strategies and boost your test scores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
