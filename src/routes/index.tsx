import { createFileRoute, Link } from "@tanstack/react-router";
import { Smartphone, GraduationCap, RefreshCcwDot, Mail, Menu } from "lucide-react";
import { useState } from "react";
import logo from "../assets/VElogo.png";
import kpopIcon from "../assets/kpop-icon.png";
import pandaIcon from "../assets/panda-icon.png";
import readflexIcon from "../assets/readflex-icon.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VibeEdge Learning — Get the Edge. Own the Test." },
      {
        name: "description",
        content:
          "VibeEdge builds smart SAT, ACT, SSAT, and ISEE prep apps designed around how students actually learn.",
      },
      { property: "og:title", content: "VibeEdge Learning" },
      {
        property: "og:description",
        content: "Smart test prep apps that actually work with how students learn.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[color:var(--brand-dark)] text-white">
        <div className="container mx-auto flex items-center justify-between px-5 py-3">
          <a href="#header" className="flex items-center">
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
            <li><a href="#header" className="hover:text-primary">Home</a></li>
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#products" className="hover:text-primary">Products</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        {open && (
          <ul className="lg:hidden px-5 pb-4 space-y-3 text-sm font-medium">
            <li><a href="#header" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="#products" onClick={() => setOpen(false)}>Products</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        )}
      </nav>

      {/* Header */}
      <header id="header" className="bg-[color:var(--brand-dark)] text-white pt-28 pb-16">
        <div className="container mx-auto px-5">
          <div className="max-w-2xl mx-auto text-center py-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Get the Edge. Own the Test.
            </h1>
            <p className="text-lg text-white/80 mb-6 font-semibold">
              VibeEdge creates smart test prep apps that actually work with how students learn.
            </p>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="py-16 border-b border-border">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
          <div className="grid gap-10 lg:grid-cols-3">
            {[
              {
                icon: <Smartphone className="h-10 w-10" />,
                title: "What We Do",
                body: "We create test prep apps designed around how students actually learn—no gimmicks, no outdated methods. Our SAT, ACT, SSAT, and ISEE apps tap into what genuinely interests students, making vocabulary building and test preparation feel natural and engaging rather than like a chore they're forced to endure.",
              },
              {
                icon: <GraduationCap className="h-10 w-10" />,
                title: "Why We Do It",
                body: "It started with helping my daughter study for standardized tests. Traditional methods weren't working, so I created games that matched her interests and learning style. Seeing her retention and enthusiasm improve dramatically inspired me to build effective, affordable tools that give every student the same advantage.",
              },
              {
                icon: <RefreshCcwDot className="h-10 w-10" />,
                title: "How We Do It",
                body: "Using 'vibe coding' software development we build and iterate much faster and more cost-effectively than competitors. We can quickly adapt to student needs and testing changes. All our tools are developed in the United States by people who deeply understand the local standardized testing landscape.",
              },
            ].map((f) => (
              <div key={f.title}>
                <div className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground p-4 mb-4 bg-gradient-to-br from-primary to-primary/70">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 bg-[color:var(--brand-dark)] text-white">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-12">Some of Our Applications</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                to: "/games/kpop-word-warrior",
                icon: kpopIcon,
                title: "K-POP Word Warrior",
                body: "Master SSAT & ISEE vocabulary through engaging K-Pop themed games. Learn nearly 800 high-impact test words with flashcards, synonym matching, and fill-in-the-blank challenges.",
              },
              {
                to: "/games/pand-a-nalogies",
                icon: pandaIcon,
                title: "Pand-a-nalogies",
                body: "Build critical thinking skills with our adorable panda-themed analogy game. Features three difficulty levels, smart hints, and a built-in dictionary to help ace those analogy tests.",
              },
              {
                to: "/games/readflex",
                icon: readflexIcon,
                title: "ReadFlex",
                body: "Improve reading comprehension and speed with adaptive exercises designed for standardized tests. Track your progress as you master reading strategies and boost your test scores.",
              },
            ].map((g) => (
              <Link
                key={g.title}
                to={g.to}
                className="group flex flex-col items-center text-center rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 p-6 transition"
              >
                <img src={g.icon} alt={`${g.title} icon`} className="h-24 w-24 rounded-2xl mb-4 shadow-lg" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">{g.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{g.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-secondary py-16">
        <div className="container mx-auto px-5 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground p-4 mb-3 bg-gradient-to-br from-primary to-primary/70">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold">Get in touch</h3>
            <p className="text-muted-foreground">We'd love to hear from you</p>
          </div>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="space-y-4 bg-card p-6 rounded-xl border border-border"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
              <input id="name" name="name" required className="w-full rounded-md border border-input bg-background px-3 py-2" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
              <input id="email" name="email" type="email" required className="w-full rounded-md border border-input bg-background px-3 py-2" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message *</label>
              <textarea id="message" name="message" rows={5} required className="w-full rounded-md border border-input bg-background px-3 py-2" />
            </div>
            <div className="hidden">
              <input name="bot-field" />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:opacity-90 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-[color:var(--brand-dark)] text-white py-6">
        <div className="container mx-auto px-5 text-center text-sm">
          Copyright © VibeEdge Learning 2025
        </div>
      </footer>
    </div>
  );
}
