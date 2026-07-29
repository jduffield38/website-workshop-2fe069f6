import { createFileRoute } from "@tanstack/react-router";
import { Mail, AtSign, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

const CONTACT_EMAIL = "contactus@vibeedge.app";

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

type Status = "idle" | "sending" | "success" | "error";

function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          botField: data.get("bot-field") || "",
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

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
          <div className="mb-6 rounded-xl border border-border bg-secondary/50 p-4 flex items-center gap-3 text-sm">
            <AtSign className="h-5 w-5 text-primary shrink-0" />
            <p className="text-muted-foreground">
              Prefer email? Reach us directly at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary font-semibold hover:underline">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>

          {status === "success" ? (
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-primary mb-3" />
              <h2 className="text-2xl font-bold mb-2">Message sent!</h2>
              <p className="text-muted-foreground">
                Thanks for reaching out — we'll get back to you at the email address you provided.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-card p-6 rounded-xl border border-border"
            >
              <div className="hidden" aria-hidden="true">
                <label>
                  Don't fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
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
              {status === "error" && errorMsg ? (
                <p className="text-sm text-destructive">{errorMsg}</p>
              ) : null}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:opacity-90 transition disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
