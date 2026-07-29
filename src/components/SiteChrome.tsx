import { useState, type ReactNode } from "react";
import { Menu } from "lucide-react";
import logo from "../assets/VElogo.png";

export function SiteChrome({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <nav className="fixed top-0 inset-x-0 z-50 bg-[color:var(--brand-dark)] text-white">
        <div className="container mx-auto flex items-center justify-between px-5 py-3">
          <a href="/" className="flex items-center">
            <img src={logo} alt="VibeEdge Learning" className="h-20 w-auto max-w-[360px]" />
          </a>
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <Menu className="h-6 w-6" />
          </button>
          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <li><a href="/#header" className="hover:text-primary">Home</a></li>
            <li><a href="/#about" className="hover:text-primary">About</a></li>
            <li><a href="/#products" className="hover:text-primary">Products</a></li>
            <li><a href="/#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        {open && (
          <ul className="lg:hidden px-5 pb-4 space-y-3 text-sm font-medium">
            <li><a href="/#header" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="/#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="/#products" onClick={() => setOpen(false)}>Products</a></li>
            <li><a href="/#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        )}
      </nav>
      <main className="flex-1">{children}</main>
      <footer className="bg-[color:var(--brand-dark)] text-white py-6">
        <div className="container mx-auto px-5 text-center text-sm">
          Copyright © VibeEdge Learning 2025
        </div>
      </footer>
    </div>
  );
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
    <section className="bg-[color:var(--brand-dark)] text-white pt-28 pb-16">
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
              />
              <figcaption className="mt-3 font-semibold">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
