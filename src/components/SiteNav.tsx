import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ExternalLink } from "lucide-react";
import logo from "../assets/VElogo.png";

type NavLink =
  | { to: "/" | "/apps" | "/about" | "/contact"; label: string; external?: false }
  | { href: string; label: string; external: true };

const links: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/apps", label: "Apps" },
  { href: "https://vocabflex.vibeedge.app", label: "VocabFlex", external: true },
  { href: "https://readflex.vibeedge.app", label: "ReadFlex", external: true },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 inset-x-0 z-50 bg-[color:var(--brand-dark)] text-white"
    >
      <div className="container mx-auto flex items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center" aria-label="VibeEdge Learning home">
          <img src={logo} alt="VibeEdge Learning" className="h-20 w-auto max-w-[360px]" />
        </Link>

        <div className="relative lg:hidden">
          <button
            className="p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div
            id="mobile-menu"
            className={`
              absolute right-0 top-full mt-2
              w-auto min-w-[12rem]
              rounded-xl border border-white/10 bg-[color:var(--brand-dark)] shadow-2xl
              overflow-hidden
              transition-all duration-200 ease-out
              origin-top-right
              ${open ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}
            `}
          >
            <ul className="py-2 text-sm font-medium">
              {links.map((l) => (
                <li key={l.external ? l.href : l.to}>
                  {l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between gap-2 px-5 py-3 hover:text-primary hover:bg-white/5 transition-colors"
                    >
                      <span>{l.label}</span>
                      <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                    </a>
                  ) : (
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      activeOptions={{ exact: l.to === "/" }}
                      activeProps={{ className: "text-primary bg-white/5" }}
                      className="block px-5 py-3 hover:text-primary hover:bg-white/5 transition-colors"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[color:var(--brand-dark)] text-white py-10 border-t border-white/10">
      <div className="container mx-auto px-5 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <img src={logo} alt="VibeEdge Learning" className="h-14 w-auto mb-2" />
          <p className="text-white/60">
            Smart test prep apps that actually work with how students learn.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white/90">Explore</h4>
          <ul className="space-y-2 text-white/70">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white/90">Get in touch</h4>
          <p className="text-white/70">
            Questions or feedback?{" "}
            <Link to="/contact" className="text-primary hover:underline">
              Send us a message
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="container mx-auto px-5 mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/50">
        Copyright © VibeEdge Learning {new Date().getFullYear()}
      </div>
    </footer>
  );
}
