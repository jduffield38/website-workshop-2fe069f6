import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbLd } from "../lib/seo";
import { ArrowRight, Apple, ExternalLink } from "lucide-react";
import { apps } from "../lib/apps";

export const Route = createFileRoute("/apps")({
  head: () => ({
    meta: [
      { title: "Our Apps — VibeEdge Learning" },
      {
        name: "description",
        content:
          "Browse VibeEdge's test prep apps for SAT, ACT, SSAT, and ISEE — vocabulary, analogies, and reading comprehension.",
      },
      { property: "og:title", content: "VibeEdge Apps" },
      {
        property: "og:description",
        content: "Test prep apps for SAT, ACT, SSAT, and ISEE from VibeEdge Learning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [breadcrumbLd([{ name: "Home", path: "/" }, { name: "Apps", path: "/apps" }])],
  }),
  component: AppsPage,
});

function AppsPage() {
  return (
    <div>
      <header className="bg-[color:var(--brand-dark)] text-white pt-32 pb-16">
        <div className="container mx-auto px-5 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Our Apps</h1>
          <p className="text-lg text-white/80">
            Purpose-built test prep tools that make studying feel less like a chore.
          </p>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-5 max-w-5xl space-y-8">
          {apps.map((a) => (
            <article
              key={a.slug}
              className="grid gap-6 md:grid-cols-[auto_1fr_auto] items-center rounded-2xl bg-card border border-border p-6 md:p-8 hover:border-primary transition"
            >
              <img
                src={a.icon}
                alt={`${a.title} icon`}
                className="h-28 w-28 rounded-2xl shadow-lg mx-auto md:mx-0"
              />
              <div>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {a.tests.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold mb-1">{a.title}</h2>
                <p className="text-sm text-primary font-medium mb-2">{a.tagline}</p>
                <p className="text-muted-foreground leading-relaxed">{a.body}</p>
              </div>
              <div className="flex flex-col gap-2 md:min-w-[180px]">
                <Link
                  to={a.to}
                  className="inline-flex items-center justify-center gap-1 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
                >
                  View details <ArrowRight className="h-4 w-4" />
                </Link>
                {a.appStoreUrl && (
                  <a
                    href={a.appStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border px-5 py-2.5 text-sm font-semibold hover:bg-secondary transition"
                  >
                    <Apple className="h-4 w-4" /> App Store
                  </a>
                )}
                {a.webUrl && (
                  <a
                    href={a.webUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-md bg-primary/10 text-primary border border-primary/30 px-5 py-2.5 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition"
                  >
                    Launch web app <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {!a.appStoreUrl && !a.webUrl && (
                  <span className="inline-flex items-center justify-center rounded-md border border-dashed border-border px-5 py-2.5 text-xs font-medium text-muted-foreground">
                    Coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
