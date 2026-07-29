import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — VibeEdge Learning" },
      {
        name: "description",
        content: "Get in touch with the VibeEdge Learning team. We'd love to hear from you.",
      },
      { property: "og:title", content: "Contact VibeEdge Learning" },
      { property: "og:description", content: "Send us a message — questions, ideas, feedback welcome." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <header className="bg-[color:var(--brand-dark)] text-white pt-32 pb-16">
        <div className="container mx-auto px-5 text-center max-w-2xl">
          <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground p-4 mb-4">
            <Mail className="h-8 w-8" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">Get in touch</h1>
          <p className="text-lg text-white/80">
            Questions, feedback, or ideas for a new app? We'd love to hear from you.
          </p>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-5 max-w-2xl">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="space-y-4 bg-card p-6 rounded-xl border border-border"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
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
    </div>
  );
}
