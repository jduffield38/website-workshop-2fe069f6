import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { apps, type AppInfo } from "../lib/apps";

export function SiteChrome({ children }: { children: ReactNode }) {
  // Nav + footer now live in __root.tsx. This wrapper only handles top padding
  // so content clears the fixed nav.
  return <div className="pt-24">{children}</div>;
}

export function GameHero({
  icon,
  title,
  tagline,
  appStoreUrl,
}: {
  icon: string;
  title: string;
  tagline: string;
  appStoreUrl?: string;
}) {
  return (
    <section className="bg-[color:var(--brand-dark)] text-white pt-8 pb-16">
      <div className="container mx-auto px-5 text-center">
        <img
          src={icon}
          alt={`${title} icon`}
          className="mx-auto h-36 w-36 rounded-3xl shadow-2xl mb-6"
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">{title}</h1>
        <p className="text-lg text-white/80 mb-6">{tagline}</p>
        {appStoreUrl && (
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:opacity-90 transition"
          >
            Download on the App Store
          </a>
        )}
      </div>
    </section>
  );
}

export function FeatureGrid({ features }: { features: { title: string; body: string }[] }) {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-5 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-bold mb-2 text-primary">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ScreenshotGrid({ shots }: { shots: { src: string; caption: string }[] }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-5 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">App Screenshots</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((s) => (
            <figure key={s.caption} className="text-center">
              <img
                src={s.src}
                alt={s.caption}
                className="rounded-2xl shadow-lg mx-auto max-h-[520px] w-auto"
                loading="lazy"
              />
              <figcaption className="mt-3 font-semibold">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OtherAppsSection({ currentSlug }: { currentSlug: string }) {
  const others: AppInfo[] = apps.filter((a) => a.slug !== currentSlug);
  if (others.length === 0) return null;
  return (
    <section className="py-16 bg-secondary border-t border-border">
      <div className="container mx-auto px-5 max-w-5xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Explore our other apps
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {others.map((a) => (
            <Link
              key={a.slug}
              to={a.to}
              className="group flex items-center gap-4 rounded-2xl bg-card border border-border p-5 hover:border-primary transition"
            >
              <img src={a.icon} alt={`${a.title} icon`} className="h-16 w-16 rounded-xl shadow" />
              <div className="text-left">
                <h3 className="font-bold group-hover:text-primary transition">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
