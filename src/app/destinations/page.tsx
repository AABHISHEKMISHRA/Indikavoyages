import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Destinations",
};

const regions = [
  {
    title: "Golden Triangle",
    desc: "Delhi, Agra, Jaipur — heritage, forts, and iconic landmarks.",
    tags: ["Heritage", "First-time India", "5–7 days"],
  },
  {
    title: "Kerala",
    desc: "Backwaters, tea hills, wellness, and relaxed pacing.",
    tags: ["Nature", "Wellness", "6–10 days"],
  },
  {
    title: "Himachal & Uttarakhand",
    desc: "Mountain stays, short treks, and scenic drives.",
    tags: ["Hills", "Summer escapes", "5–9 days"],
  },
  {
    title: "Rajasthan",
    desc: "Fort towns, deserts, and cultural experiences.",
    tags: ["Culture", "Luxury options", "6–12 days"],
  },
  {
    title: "Goa & Konkan",
    desc: "Beach time with optional inland heritage stops.",
    tags: ["Coast", "Food", "4–8 days"],
  },
  {
    title: "North-East (select circuits)",
    desc: "Curated routes based on season, access, and permits.",
    tags: ["Seasonal", "Permits", "7–12 days"],
  },
] as const;

export default function DestinationsPage() {
  return (
    <div className="bg-white">
      <Container className="py-12 sm:py-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Destinations across India
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            We plan and run travel operations across major circuits and select
            offbeat routes based on seasonality and access.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regions.map((r) => (
            <div
              key={r.title}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="text-base font-semibold text-zinc-950">
                {r.title}
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{r.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {r.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-zinc-950 p-8 text-white">
          <div className="grid items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="text-sm font-semibold">Not seeing your route?</div>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Share cities, dates, and travel style — we’ll propose an itinerary
                with multiple options.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100"
              >
                Request planning help
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

