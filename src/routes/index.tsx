import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Smartphone, GraduationCap, RefreshCcwDot } from "lucide-react";
import { apps } from "../lib/apps";
import { SITE_URL, jsonLdScript } from "../lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VibeEdge Learning — Get the Edge. Own the Test." },
      {
        name: "description",
        content:
          "VibeEdge builds smart SAT, ACT, SSAT, and ISEE prep apps designed around how students actually learn.",
      },
      { property: "og:title", content: "VibeEdge Learning — Get the Edge. Own the Test." },
      {
        property: "og:description",
        content: "VibeEdge builds smart SAT, ACT, SSAT, and ISEE prep apps designed around how students actually learn.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const testTags = ["SAT", "ACT", "SSAT", "ISEE"];

const aboutPoints = [
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "What We Do",
    body: "Test prep apps built around how students actually learn — engaging, effective, and focused on the words and skills that show up on the real exams.",
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Why We Do It",
    body: "Founded to help one student who wasn't clicking with traditional prep — now built for every student who deserves the same edge, at an affordable price.",
  },
  {
    icon: <RefreshCcwDot className="h-8 w-8" />,
    title: "How We Do It",
    body: "\"Vibe coding\" lets us build and iterate faster than the big publishers, adapting quickly to student needs and test changes.",
  },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <header className="bg-[color:var(--brand-dark)] text-white pt-32 pb-20">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {testTags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-white/10 border border-white/20"
                >
                  {t}
                </span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-5">
              Get the Edge. Own the Test.
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8">
              VibeEdge creates smart test prep apps that actually work with how students learn.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/apps"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:opacity-90 transition"
              >
                See our apps <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
              >
                Our story
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Featured apps */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">Our apps</h2>
              <p className="text-muted-foreground mt-2">
                Purpose-built tools for standardized test prep.
              </p>
            </div>
            <Link
              to="/apps"
              className="inline-flex items-center gap-1 text-primary font-semibold hover:underline"
            >
              View all apps <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {apps.map((g) => (
              <Link
                key={g.slug}
                to={g.to}
                className="group flex flex-col rounded-2xl bg-card border border-border p-6 hover:border-primary hover:shadow-lg transition"
              >
                <img
                  src={g.icon}
                  alt={`${g.title} icon`}
                  className="h-20 w-20 rounded-2xl mb-4 shadow"
                />
                <div className="flex flex-wrap gap-1 mb-2">
                  {g.tests.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">
                  {g.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {g.body}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  View app <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-16 bg-secondary border-y border-border">
        <div className="container mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Built by learners, for learners</h2>
            <p className="text-muted-foreground">
              VibeEdge started with one parent trying to help one student. It grew into a
              mission to give every family access to smart, affordable prep.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
            {aboutPoints.map((f) => (
              <div key={f.title} className="bg-card rounded-xl p-6 border border-border">
                <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground p-3 mb-4">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/about"
              className="inline-flex items-center gap-1 text-primary font-semibold hover:underline"
            >
              Read our full story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[color:var(--brand-dark)] text-white">
        <div className="container mx-auto px-5 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Have a question or idea?</h2>
          <p className="text-white/80 mb-6">
            We love hearing from students, parents, and teachers. Tell us what would help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:opacity-90 transition"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
