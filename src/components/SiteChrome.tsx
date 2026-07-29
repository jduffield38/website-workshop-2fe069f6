import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { apps, type AppInfo } from "../lib/apps";
import { AppStoreBadge } from "./AppStoreBadge";

export function SiteChrome({ children }: { children: ReactNode }) {
  return <div className="pt-24">{children}</div>;
}

export function GameHero({
  icon,
  title,
  tagline,
  appStoreUrl,
  webUrl,
}: {
  icon: string;
  title: string;
  tagline: string;
  appStoreUrl?: string;
  webUrl?: string;
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
        <div className="flex flex-wrap justify-center gap-3">
          {webUrl && (
            <a
              href={webUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              Launch web app <ExternalLink className="h-4 w-4" />
            </a>
          )}
          {appStoreUrl && <AppStoreBadge href={appStoreUrl} />}
          {!webUrl && !appStoreUrl && (
            <span className="inline-block rounded-full border border-white/30 px-4 py-1.5 text-sm text-white/70">
              Coming soon to the App Store
            </span>
          )}
        </div>
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i === null ? null : (i + 1) % shots.length));
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i === null ? null : (i - 1 + shots.length) % shots.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, shots.length]);

  const active = activeIndex === null ? null : shots[activeIndex];

  return (
    <section className="py-16">
      <div className="container mx-auto px-5 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-4">App Screenshots</h2>
        <p className="text-center text-sm text-muted-foreground mb-12">
          Click any screenshot to enlarge
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((s, i) => (
            <figure key={s.caption} className="text-center">
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="block w-full rounded-2xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary transition hover:scale-[1.02]"
                aria-label={`Enlarge ${s.caption}`}
              >
                <img
                  src={s.src}
                  alt={s.caption}
                  className="rounded-2xl shadow-lg mx-auto max-h-[520px] w-auto"
                  loading="lazy"
                />
              </button>
              <figcaption className="mt-3 font-semibold">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {active && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setActiveIndex(null); }}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setActiveIndex((i) => (i === null ? null : (i - 1 + shots.length) % shots.length)); }}
            className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex flex-col items-center max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={active.src}
              alt={active.caption}
              className="max-h-[85vh] w-auto rounded-xl shadow-2xl"
            />
            <p className="mt-4 text-white font-medium">{active.caption}</p>
          </div>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setActiveIndex((i) => (i === null ? null : (i + 1) % shots.length)); }}
            className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
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
