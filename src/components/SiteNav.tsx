import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "../assets/VElogo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/apps", label: "Apps" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[color:var(--brand-dark)] text-white">
      <div className="container mx-auto flex items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center" aria-label="VibeEdge Learning home">
          <img src={logo} alt="VibeEdge Learning" className="h-20 w-auto max-w-[360px]" />
        </Link>
        <button
          className="lg:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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
      {open && (
        <ul className="lg:hidden px-5 pb-4 space-y-3 text-sm font-medium border-t border-white/10 pt-3">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="block py-1 hover:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
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
