import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Services",
};

const services = [
  {
    title: "End-to-end trip planning",
    desc: "Route design, day-wise pacing, budgets, and alternatives that fit your time and comfort.",
  },
  {
    title: "Bookings & confirmations",
    desc: "Hotels, transport, guided experiences, and activity coordination with clear confirmations.",
  },
  {
    title: "Corporate travel support",
    desc: "Itineraries, policy-aligned options, and GST-ready invoices (where applicable).",
  },
  {
    title: "Airport & city transfers",
    desc: "Reliable pickup/drop, intercity moves, and driver coordination for smooth handoffs.",
  },
  {
    title: "Permits & advisories",
    desc: "Guidance for route constraints, seasonal advisories, and paperwork on select circuits.",
  },
  {
    title: "On-trip assistance",
    desc: "Help with changes, delays, and local coordination so your plan stays on track.",
  },
] as const;

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <Container className="py-12 sm:py-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">
            Services built for India travel operations
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            We handle the logistics so travelers can focus on the experience.
            Choose fully managed trips or specific services.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand-saffron px-5 text-sm font-semibold text-white transition hover:bg-brand-saffron/90"
            >
              Request a quote
            </Link>
            <Link
              href="/destinations"
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-5 text-sm font-semibold text-brand-navy transition hover:bg-zinc-50"
            >
              Explore destinations
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="text-base font-semibold text-brand-navy">
                {s.title}
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="text-sm font-semibold text-brand-navy">
                How we work
              </div>
              <ol className="mt-4 grid gap-4 md:grid-cols-3">
                {[
                  { t: "Share details", d: "Cities, dates, budget, and preferences." },
                  { t: "Review options", d: "We propose itinerary + vendor choices." },
                  { t: "Travel smoothly", d: "Confirmations + on-trip support." },
                ].map((x, idx) => (
                  <li
                    key={x.t}
                    className="rounded-2xl border border-zinc-200 bg-white p-5"
                  >
                    <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      Step {idx + 1}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-brand-navy">
                      {x.t}
                    </div>
                    <div className="mt-1 text-sm text-zinc-600">{x.d}</div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand-saffron px-6 text-sm font-semibold text-white transition hover:bg-brand-saffron/90"
              >
                Start a request
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

