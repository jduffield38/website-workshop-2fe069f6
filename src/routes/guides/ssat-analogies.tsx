import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SITE_URL, jsonLdScript, breadcrumbLd } from "../../lib/seo";

const PAGE_PATH = "/guides/ssat-analogies";
const TITLE = "SSAT Analogies: Complete Guide with Practice Questions";
const DESCRIPTION =
  "How SSAT analogy questions work, the 12 relationship types that show up most, a bridge-sentence method that works, and practice questions with explanations.";

const faqs = [
  {
    q: "How many analogy questions are on the SSAT?",
    a: "The Verbal section of the Middle and Upper Level SSAT has 60 questions total, split into 30 synonyms and 30 analogies. Elementary Level uses 30 verbal questions with a similar split. Analogies are roughly a quarter of your whole verbal score.",
  },
  {
    q: "What is a bridge sentence?",
    a: "A bridge sentence is a short, precise sentence that states the relationship between the two stem words — for example, \"a THIMBLE protects a FINGER.\" You then read the same sentence with each answer pair and keep the one that still makes sense.",
  },
  {
    q: "Should I guess on SSAT analogy questions?",
    a: "The SSAT deducts a quarter point for a wrong answer and zero for a blank. If you can eliminate at least one answer choice, guessing is statistically in your favor. If a word is completely unfamiliar and no elimination is possible, leaving it blank is reasonable.",
  },
  {
    q: "How do I study analogies if I don't know the vocabulary?",
    a: "Analogies test relationships, but you cannot see a relationship between words you don't know. Pair daily vocabulary work — roots, prefixes, and high-frequency SSAT word lists — with analogy drills. Word roots are especially efficient because one root unlocks many words.",
  },
];

const relationships = [
  { name: "Synonym", example: "ARID : DRY", note: "The words mean nearly the same thing." },
  { name: "Antonym", example: "FRUGAL : WASTEFUL", note: "The words mean the opposite." },
  { name: "Degree / intensity", example: "WARM : SCALDING", note: "Same idea, different strength." },
  { name: "Part to whole", example: "PETAL : FLOWER", note: "One is a component of the other." },
  { name: "Type / category", example: "SONNET : POEM", note: "One is a kind of the other." },
  { name: "Function / purpose", example: "SCISSORS : CUT", note: "The tool and what it does." },
  { name: "Worker to tool", example: "CHEF : WHISK", note: "Who uses what." },
  { name: "Worker to product", example: "AUTHOR : NOVEL", note: "Who makes what." },
  { name: "Object to characteristic", example: "GLASS : BRITTLE", note: "A defining trait." },
  { name: "Cause and effect", example: "DROUGHT : FAMINE", note: "One leads to the other." },
  { name: "Lack", example: "PAUPER : MONEY", note: "One is defined by absence of the other." },
  { name: "Place / location", example: "JUDGE : COURTROOM", note: "Who or what belongs where." },
];

const practice = [
  {
    stem: "PARCHED : THIRST",
    choices: ["famished : hunger", "weary : sleep", "elated : joy", "hostile : anger"],
    answer: "famished : hunger",
    bridge: "Someone PARCHED feels extreme THIRST.",
    why: "Both pairs describe an extreme state of a basic need. \"Weary : sleep\" is close but weary is not the extreme of needing sleep; famished is the exact intensity match for parched.",
  },
  {
    stem: "CACOPHONY : SOUND",
    choices: ["aroma : scent", "stench : odor", "melody : song", "glare : shadow"],
    answer: "stench : odor",
    bridge: "A CACOPHONY is an unpleasant SOUND.",
    why: "Only \"stench : odor\" keeps the negative charge of the bridge. \"Aroma : scent\" is neutral or positive, so the sentence stops making sense.",
  },
  {
    stem: "PLACATE : ANGER",
    choices: ["kindle : fire", "assuage : grief", "provoke : fight", "endure : pain"],
    answer: "assuage : grief",
    bridge: "To PLACATE is to reduce ANGER.",
    why: "To assuage is to reduce grief — same verb-lessens-emotion structure. \"Kindle : fire\" and \"provoke : fight\" increase rather than reduce.",
  },
  {
    stem: "COBBLER : SHOE",
    choices: ["farmer : tractor", "mason : wall", "pilot : airplane", "surgeon : scalpel"],
    answer: "mason : wall",
    bridge: "A COBBLER makes or repairs a SHOE.",
    why: "This is worker-to-product. Farmer, pilot, and surgeon pairs are worker-to-tool — a common trap the SSAT uses on this relationship.",
  },
  {
    stem: "INDELIBLE : ERASED",
    choices: ["invincible : defeated", "invisible : painted", "immature : grown", "inaudible : written"],
    answer: "invincible : defeated",
    bridge: "Something INDELIBLE cannot be ERASED.",
    why: "\"Cannot be X-ed\" is the bridge. Only invincible : defeated fits it exactly. Watch for the in-/im- prefix meaning \"not.\"",
  },
];

export const Route = createFileRoute("/guides/ssat-analogies")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "SSAT Analogies: Complete Guide" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}${PAGE_PATH}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}${PAGE_PATH}` }],
    scripts: [
      jsonLdScript({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: TITLE,
        description: DESCRIPTION,
        mainEntityOfPage: `${SITE_URL}${PAGE_PATH}`,
        author: { "@type": "Organization", name: "VibeEdge Learning", url: SITE_URL },
        publisher: { "@type": "Organization", name: "VibeEdge Learning", url: SITE_URL },
      }),
      jsonLdScript({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides/ssat-analogies" },
        { name: "SSAT Analogies", path: PAGE_PATH },
      ]),
    ],
  }),
  component: GuidePage,
});

function GuidePage() {
  return (
    <div>
      <header className="bg-[color:var(--brand-dark)] text-white pt-32 pb-16">
        <div className="container mx-auto px-5 text-center max-w-3xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-3">
            Study guide
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">SSAT Analogies</h1>
          <p className="text-lg text-white/80">
            How the questions work, the relationships that repeat, and a method you can use on
            every single one.
          </p>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-5 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            Analogies are half of the SSAT Verbal section — 30 of the 60 verbal questions on the
            Middle and Upper Level tests. They look intimidating because they are written in
            shorthand, but every question is asking the same thing: <strong className="text-foreground">
            what is the relationship between these two words, and which answer pair has the same
            relationship?</strong>
          </p>
          <p>
            The format is <code className="text-foreground">WORD : WORD :: word : word</code>, read
            aloud as "word is to word as word is to word." Your job is to match the relationship,
            not the topic. If the stem is about birds, the correct answer usually has nothing to do
            with birds.
          </p>
        </div>
      </section>

      <section className="py-16 bg-secondary border-y border-border">
        <div className="container mx-auto px-5 max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">The bridge sentence method</h2>
          <p className="text-muted-foreground mb-6">
            Nearly every analogy falls apart under one technique: build a short, specific sentence
            linking the two stem words, then test each answer choice against it.
          </p>
          <ol className="space-y-4 text-muted-foreground">
            {[
              ["Build the bridge.", "Write a sentence using both stem words that states their relationship as precisely as you can. \"A THIMBLE protects a FINGER\" beats \"a thimble goes with a finger.\""],
              ["Run every choice through it.", "Swap each answer pair into the same sentence. \"A helmet protects a head\" — still true. \"A glove protects a hand\" — also true. Keep both for now."],
              ["Tighten the bridge.", "When two or more choices survive, add detail until only one fits. \"A THIMBLE is a small item worn on a FINGER to protect it while sewing\" narrows it fast."],
              ["Check the order.", "Relationships have direction. If the stem is worker-to-product, the answer must be worker-to-product — not product-to-worker."],
              ["Eliminate, then guess.", "The SSAT subtracts a quarter point for wrong answers and nothing for blanks. Cross out one choice and guessing becomes worth it."],
            ].map(([title, body], i) => (
              <li key={title} className="flex gap-4">
                <span className="flex-none inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {i + 1}
                </span>
                <span>
                  <strong className="text-foreground">{title}</strong> {body}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-5 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4 text-center">12 relationship types that repeat</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            SSAT analogies recycle a small set of relationships. Once you can name the type, the
            bridge sentence writes itself.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relationships.map((r) => (
              <div key={r.name} className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-bold mb-1">{r.name}</h3>
                <p className="text-sm font-mono text-primary mb-2">{r.example}</p>
                <p className="text-sm text-muted-foreground">{r.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary border-y border-border">
        <div className="container mx-auto px-5 max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Practice questions with explanations</h2>
          <p className="text-muted-foreground mb-8">
            Try each one before opening the answer. Write your bridge sentence out loud — it is
            slower for the first week and much faster after that.
          </p>
          <div className="space-y-4">
            {practice.map((p, i) => (
              <details key={p.stem} className="group rounded-xl border border-border bg-card p-5">
                <summary className="cursor-pointer list-none">
                  <span className="text-xs font-semibold text-muted-foreground">
                    Question {i + 1}
                  </span>
                  <p className="text-lg font-bold font-mono mt-1">{p.stem} ::</p>
                  <ul className="mt-3 space-y-1 text-muted-foreground text-sm font-mono">
                    {p.choices.map((c, ci) => (
                      <li key={c}>
                        ({String.fromCharCode(65 + ci)}) {c}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-3 inline-block text-sm font-semibold text-primary group-open:hidden">
                    Show answer
                  </span>
                </summary>
                <div className="mt-4 border-t border-border pt-4 space-y-2 text-sm">
                  <p>
                    <strong className="text-foreground">Answer:</strong>{" "}
                    <span className="font-mono text-primary">{p.answer}</span>
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Bridge:</strong> {p.bridge}
                  </p>
                  <p className="text-muted-foreground">{p.why}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-5 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Common traps</h2>
          <ul className="space-y-3 text-muted-foreground list-disc pl-6">
            <li>
              <strong className="text-foreground">Topic matching.</strong> An answer that shares
              subject matter with the stem is usually bait. Match the relationship, not the theme.
            </li>
            <li>
              <strong className="text-foreground">A bridge that is too loose.</strong> "Goes with"
              and "is related to" will leave three choices standing. Force yourself to be specific.
            </li>
            <li>
              <strong className="text-foreground">Reversed order.</strong> WORKER : TOOL and
              TOOL : WORKER are different questions.
            </li>
            <li>
              <strong className="text-foreground">Ignoring intensity.</strong> Warm and scalding are
              not the same distance apart as cool and cold.
            </li>
            <li>
              <strong className="text-foreground">Unknown words.</strong> Attack them with prefixes,
              roots, and suffixes before giving up — <em>in-</em>, <em>bene-</em>, and{" "}
              <em>-ous</em> carry real information.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-secondary border-y border-border">
        <div className="container mx-auto px-5 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">A four-week study plan</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Week 1", "Learn the 12 relationship types. Practice naming the type only — don't answer yet. 10 minutes a day."],
              ["Week 2", "Add bridge sentences. Write them out for 10 questions a day, even the easy ones."],
              ["Week 3", "Layer in vocabulary. 15 new words a day plus Greek and Latin roots, drilled with flashcards."],
              ["Week 4", "Timed sets of 15 analogies in under 8 minutes. Review every miss and label which trap caught you."],
            ].map(([w, body]) => (
              <div key={w} className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-bold mb-1">{w}</h3>
                <p className="text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-5 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-bold mb-1">{f.q}</h3>
                <p className="text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[color:var(--brand-dark)] text-white">
        <div className="container mx-auto px-5 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Now go practice</h2>
          <p className="text-white/80 mb-6">
            Pand-a-nalogies drills analogy relationships with hints and a built-in dictionary, and
            VocabFlex builds the vocabulary that makes the bridges obvious.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/games/pand-a-nalogies"
              className="inline-flex items-center justify-center gap-1 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              Explore Pand-a-nalogies <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://vocabflex.vibeedge.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-md border border-white/30 px-6 py-3 text-base font-semibold hover:bg-white/10 transition"
            >
              Practice in VocabFlex <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
