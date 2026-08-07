import { createFileRoute, Link } from "@tanstack/react-router";
import { Smartphone, GraduationCap, RefreshCcwDot, Sparkles, MapPin, HeartHandshake } from "lucide-react";
import { SITE_URL, jsonLdScript, breadcrumbLd } from "../lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — VibeEdge Learning" },
      {
        name: "description",
        content:
          "How VibeEdge builds smart, affordable test prep apps using vibe coding — and the founder story that started it all.",
      },
      { property: "og:title", content: "About VibeEdge Learning" },
      {
        property: "og:description",
        content: "The mission, story, and build philosophy behind VibeEdge Learning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      jsonLdScript({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "VibeEdge Learning",
        url: SITE_URL,
        logo: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/e43643fc-9d07-4a5b-beda-da3736bd0e56",
        email: "contactus@vibeedge.app",
      }),
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "What We Do",
    body: "We build test prep apps for the SSAT, ISEE, SAT, and ACT — grounded in the words and skills that actually show up on exams, wrapped in interfaces students want to open.",
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Why We Do It",
    body: "VibeEdge started with one parent helping one student. Traditional prep wasn't clicking, so we built something that did. It worked — and every family deserves the same edge.",
  },
  {
    icon: <RefreshCcwDot className="h-8 w-8" />,
    title: "How We Do It",
    body: "We use \"vibe coding\" to build and iterate faster than the big publishers. That means we ship updates when students need them, not on a yearly textbook cycle.",
  },
];

const values = [
  { icon: <Sparkles className="h-6 w-6" />, title: "Engagement first", body: "If it isn't fun to open, it won't get opened." },
  { icon: <HeartHandshake className="h-6 w-6" />, title: "Affordable access", body: "Great prep shouldn't require a private tutor's budget." },
  { icon: <MapPin className="h-6 w-6" />, title: "Made in the USA", body: "Built by people who understand the local standardized testing landscape." },
];

function AboutPage() {
  return (
    <div>
      <header className="bg-[color:var(--brand-dark)] text-white pt-32 pb-16">
        <div className="container mx-auto px-5 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Our Story</h1>
          <p className="text-lg text-white/80">
            Smart, affordable test prep — built the way students actually learn.
          </p>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-5 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            VibeEdge began at a kitchen table. One student, one big test, and a shelf full of prep books
            that weren't landing. So we built something different: a small app, tuned to what she was into,
            that turned vocabulary drills into something worth opening every day.
          </p>
          <p>
            Her retention jumped. So did her scores. And the pattern was hard to ignore — the same
            students who "hate studying" light up when the tool respects how they actually learn.
          </p>
          <p className="text-foreground font-medium">
            That's the whole company. Build tools that work the way students think, and get them into
            as many hands as possible.
          </p>
        </div>
      </section>

      <section className="py-16 bg-secondary border-y border-border">
        <div className="container mx-auto px-5 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our approach</h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="bg-card rounded-xl p-6 border border-border">
                <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground p-3 mb-4">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-5 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">What "vibe coding" means for you</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            It's a modern, AI-assisted build process that lets a small team ship real product fast.
            The practical result:
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 text-primary p-3 mb-3">
                  {v.icon}
                </div>
                <h3 className="font-bold mb-1">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[color:var(--brand-dark)] text-white">
        <div className="container mx-auto px-5 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">See what we've built</h2>
          <p className="text-white/80 mb-6">
            Explore the apps we've shipped for SAT, ACT, SSAT, and ISEE prep.
          </p>
          <Link
            to="/apps"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:opacity-90 transition"
          >
            Browse our apps
          </Link>
        </div>
      </section>
    </div>
  );
}
