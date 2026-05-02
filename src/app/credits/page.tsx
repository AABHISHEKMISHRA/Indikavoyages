import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Credits",
};

const ASSETS = [
  {
    file: "01-taj-mahal.webp",
    note: "Architecture & gardens (Agra, India).",
  },
  {
    file: "02-kerala-backwaters.webp",
    note: "Backwaters & palms (Kerala, India).",
  },
  {
    file: "03-himalaya.webp",
    note: "Mountain landscapes (Himalayas).",
  },
  {
    file: "04-jaipur-hawa-mahal.webp",
    note: "Hawa Mahal facade (Jaipur, India).",
  },
  {
    file: "05-varanasi-ganga.webp",
    note: "River ghats & skyline (Varanasi, India).",
  },
  {
    file: "06-amer-fort-distance.webp",
    note: "Fort & lake vista (Amer/Jaipur, India).",
  },
  {
    file: "07-amer-fort-reflection.webp",
    note: "Reflection detail (Amer/Jaipur, India).",
  },
  {
    file: "08-spice-jars.webp",
    note: "Spice market display (India).",
  },
  {
    file: "09-spice-spoons.webp",
    note: "Spices on spoons (India).",
  },
] as const;

export default function CreditsPage() {
  return (
    <div className="bg-white">
      <Container className="py-12 sm:py-16">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold text-brand-navy">Credits</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">
            Imagery & licensing
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            The photography used on this site is a curated set of{" "}
            <span className="font-medium text-zinc-950">stock placeholders</span>{" "}
            intended to communicate mood and destination variety while we replace
            them with your own licensed assets.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            Placeholder photos are sourced from{" "}
            <a
              className="font-semibold text-brand-navy underline decoration-brand-saffron/40 underline-offset-4 hover:decoration-brand-saffron"
              href="https://unsplash.com"
              target="_blank"
              rel="noreferrer"
            >
              Unsplash
            </a>{" "}
            contributors and are used under the{" "}
            <a
              className="font-semibold text-brand-navy underline decoration-brand-saffron/40 underline-offset-4 hover:decoration-brand-saffron"
              href="https://unsplash.com/license"
              target="_blank"
              rel="noreferrer"
            >
              Unsplash License
            </a>
            .
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
          <div className="text-sm font-semibold text-brand-navy">
            Bundled assets (local files)
          </div>
          <ul className="mt-4 divide-y divide-zinc-200/80 rounded-2xl border border-zinc-200 bg-white">
            {ASSETS.map((a) => (
              <li
                key={a.file}
                className="flex flex-col gap-1 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="font-mono text-xs text-zinc-900">{a.file}</div>
                <div className="text-sm text-zinc-600">{a.note}</div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-6 text-zinc-600">
            If you want per-photo photographer attribution on the page (not just
            bundled credits), tell me and I’ll add names + profile links — we’ll
            store the exact Unsplash photo page URLs alongside each file.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="text-sm font-semibold text-brand-navy hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </Container>
    </div>
  );
}
