import Link from "next/link";
import { Container } from "@/components/Container";
import { HeroMosaic } from "@/components/HeroMosaic";

export default function Home() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,88,12,0.10),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(15,118,110,0.10),transparent_55%)]"
        />
        <Container className="relative py-14 sm:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="order-2 lg:order-1 lg:col-span-5 lg:pt-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-sea" />
                Luxury operations • India-wide • Concierge support
              </div>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
                India travel, orchestrated with calm precision.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
                Curated itineraries, vetted partners, and on-ground coordination —
                built for travelers who want premium comfort without chaos.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-brand-saffron px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-saffron/90"
                >
                  Request a quote
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white px-6 text-sm font-semibold text-brand-navy transition hover:bg-zinc-50"
                >
                  Explore services
                </Link>
              </div>

              <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-2">
                {[
                  { k: "White-glove", v: "Itinerary + vendor orchestration" },
                  { k: "Transparent", v: "Options, upgrades, and budgets" },
                  { k: "Responsive", v: "Fast help when plans change" },
                  { k: "GST-ready", v: "Invoices on request" },
                ].map((item) => (
                  <div
                    key={item.k}
                    className="rounded-2xl border border-zinc-200 bg-white/80 p-4 shadow-sm backdrop-blur"
                  >
                    <dt className="text-sm font-semibold text-brand-navy">
                      {item.k}
                    </dt>
                    <dd className="mt-1 text-sm text-zinc-600">{item.v}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-6 text-xs leading-5 text-zinc-500">
                Imagery shown is a curated stock set for launch — see{" "}
                <Link className="font-semibold text-brand-navy underline decoration-brand-saffron/40 underline-offset-4 hover:decoration-brand-saffron" href="/credits">
                  credits
                </Link>
                .
              </p>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-7">
              <HeroMosaic />

              <div className="mt-6 rounded-3xl border border-zinc-200 bg-gradient-to-b from-zinc-50 to-white p-6 shadow-sm">
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="text-sm font-semibold text-brand-navy">
                    Sample itinerary
                  </div>
                  <p className="mt-1 text-sm text-zinc-600">
                    6 days • Delhi → Agra → Jaipur
                  </p>
                  <div className="mt-5 space-y-3">
                    {[
                      "Airport pickup + hotel check-in",
                      "Private car with experienced driver",
                      "Monument tickets & timed entry guidance",
                      "Local support for changes & delays",
                    ].map((t) => (
                      <div
                        key={t}
                        className="flex items-start gap-3 rounded-xl border border-zinc-200 px-4 py-3"
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-brand-saffron" />
                        <span className="text-sm text-zinc-700">{t}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-sea px-5 py-4 text-white">
                    <div className="text-sm font-semibold">Need a custom plan?</div>
                    <div className="mt-1 text-sm text-white/80">
                      Tell us dates, cities, and preferences.
                    </div>
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex h-10 items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-brand-navy"
                    >
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-zinc-200/70 bg-zinc-50">
        <Container className="py-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-brand-navy">
                Built for travel operations
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
                Transparent planning, dependable vendors, and support when plans
                change — optimized for India travel.
              </p>
            </div>
            <Link
              href="/services"
              className="hidden text-sm font-semibold text-brand-navy hover:underline sm:inline"
            >
              View all services
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Corporate travel",
                desc: "Centralized bookings, itineraries, and GST-ready invoices.",
              },
              {
                title: "Leisure & group tours",
                desc: "Curated routes, pacing, and reliable on-ground coordination.",
              },
              {
                title: "Transport & logistics",
                desc: "Airport transfers, intercity moves, and vetted drivers.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <div className="text-base font-semibold text-brand-navy">
                  {c.title}
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-zinc-200/70 bg-white">
        <Container className="py-14">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold tracking-tight text-brand-navy">
                Popular India regions we handle
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
                From heritage circuits to hill stations and coastal stays — we
                coordinate travel across states with dependable local partners.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Golden Triangle (Delhi–Agra–Jaipur)",
                  "Himalayas (Himachal, Uttarakhand)",
                  "Kerala backwaters & hills",
                  "Goa & Konkan coast",
                  "Rajasthan deserts & forts",
                  "North-East (select circuits)",
                ].map((d) => (
                  <div
                    key={d}
                    className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700"
                  >
                    {d}
                  </div>
                ))}
              </div>
              <div className="mt-7">
                <Link
                  href="/destinations"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-5 text-sm font-semibold text-brand-navy transition hover:bg-zinc-50"
                >
                  Explore destinations
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
                <div className="text-sm font-semibold text-brand-navy">
                  What you’ll get
                </div>
                <ul className="mt-4 space-y-3 text-sm text-zinc-700">
                  {[
                    "A single point of contact for the full trip",
                    "Document checklist & reminders",
                    "On-ground escalation for delays or changes",
                    "Clear budgets with options & upgrades",
                  ].map((x) => (
                    <li key={x} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-saffron" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-2xl bg-white p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    Typical response time
                  </div>
                  <div className="mt-2 text-2xl font-semibold tracking-tight text-brand-navy">
                    Same day
                  </div>
                  <div className="mt-1 text-sm text-zinc-600">
                    for most quote requests.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-zinc-200/70 bg-brand-navy">
        <Container className="py-14">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Ready to plan travel in India with fewer surprises?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/75">
                Share your dates, cities, and traveler count. We’ll come back
                with an itinerary + budget options.
              </p>
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
        </Container>
      </section>
    </div>
  );
}
