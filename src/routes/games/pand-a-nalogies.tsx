import { createFileRoute, Link } from "@tanstack/react-router";
import icon from "../../assets/panda-icon.png";

export const Route = createFileRoute("/games/pand-a-nalogies")({
  head: () => ({
    meta: [
      { title: "Pand-a-nalogies — VibeEdge Learning" },
      { name: "description", content: "Build critical thinking with our adorable panda-themed analogy game." },
      { property: "og:title", content: "Pand-a-nalogies" },
      { property: "og:description", content: "Build critical thinking with our adorable panda-themed analogy game." },
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
          <img src={icon} alt="Pand-a-nalogies" className="h-32 w-32 rounded-2xl shadow-lg" />
          <div>
            <h1 className="text-4xl font-extrabold mb-3">Pand-a-nalogies</h1>
            <p className="text-lg text-muted-foreground">
              Build critical thinking skills with our adorable panda-themed analogy game. Features three difficulty levels, smart hints, and a built-in dictionary to help ace those analogy tests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
