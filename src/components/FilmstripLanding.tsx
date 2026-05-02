"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { HERO_IMAGES } from "@/data/heroImages";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

function MarqueeRow({
  reverse,
  durationSec,
}: {
  reverse?: boolean;
  durationSec: number;
}) {
  const strip = [...HERO_IMAGES, ...HERO_IMAGES];
  return (
    <div className="relative h-[min(200px,22vh)] w-full overflow-hidden sm:h-[min(240px,26vh)]">
      <div
        className={[
          "iv-marquee flex w-max gap-3 will-change-transform",
          reverse ? "iv-marquee--reverse" : "",
        ].join(" ")}
        style={
          {
            ["--iv-marquee-duration" as string]: `${durationSec}s`,
          } as CSSProperties
        }
      >
        {strip.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="relative h-[min(200px,22vh)] w-[min(72vw,320px)] shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/10 sm:h-[min(240px,26vh)] sm:w-[280px]"
          >
            <img
              src={img.src}
              alt=""
              className="h-full w-full object-cover"
              loading={i < 4 ? "eager" : "lazy"}
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function FilmstripLanding() {
  return (
    <div className="bg-white">
      {/* —— Hero: flowing filmstrips + minimal copy (no zoom / no crossfade blink) */}
      <section className="relative min-h-[min(100dvh,900px)] overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 flex flex-col justify-center gap-4 py-24 opacity-[0.92]">
          <MarqueeRow durationSec={85} />
          <MarqueeRow reverse durationSec={110} />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/75 via-black/45 to-black/80"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] opacity-[0.1] mix-blend-overlay iv-grain"
        />

        <Container className="relative z-[2] flex min-h-[min(100dvh,900px)] flex-col justify-center py-20 sm:py-24">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/70">
              Indikavoyages
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.08]">
              India travel, quietly orchestrated.
            </h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/80">
              Premium itineraries and calm on-ground support.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-brand-saffron px-7 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-brand-saffron/90"
              >
                Request a quote
              </Link>
              <Link
                href="/services"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Explore services
              </Link>
            </div>
            <p className="mt-8 text-[11px] text-white/50">
              Placeholder photography —{" "}
              <Link
                className="underline decoration-white/30 underline-offset-4 hover:text-white"
                href="/credits"
              >
                credits
              </Link>
            </p>
          </div>

          <div className="mt-16 flex items-center gap-2 text-xs font-medium text-white/55">
            <span className="inline-block h-px w-10 bg-white/30" aria-hidden />
            Scroll to explore
          </div>
        </Container>
      </section>

      {/* —— Signature (light, airy) */}
      <section className="border-t border-zinc-200/80 bg-zinc-50/80">
        <Container className="py-20 sm:py-28">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-sea">
                Signature
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-brand-navy sm:text-3xl">
                Built for clarity, not clutter.
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base">
                One operating rhythm across India: transparent options, dependable
                partners, and fast help when itineraries shift.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              {
                t: "Itinerary design",
                d: "Routes paced for real India constraints — not brochure fantasy.",
              },
              {
                t: "Bookings & handoffs",
                d: "Hotels, drivers, and experiences coordinated with clean confirmations.",
              },
              {
                t: "On-trip support",
                d: "A single escalation path when delays, weather, or plans change.",
              },
            ].map((item, i) => (
              <Reveal key={item.t} delayMs={i * 80}>
                <div className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-sea/30 hover:shadow-lg">
                  <div className="text-sm font-semibold text-brand-navy group-hover:text-brand-sea">
                    {item.t}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* —— Moments: interactive hover tiles */}
      <section className="border-t border-zinc-200/80 bg-white">
        <Container className="py-20 sm:py-28">
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-saffron">
                  Moments
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-brand-navy sm:text-3xl">
                  A feel for the terrain.
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  Hover each tile — we keep imagery human-scale (no face-forward
                  staging).
                </p>
              </div>
              <Link
                href="/destinations"
                className="text-sm font-semibold text-brand-navy underline decoration-brand-saffron/40 underline-offset-4 transition hover:decoration-brand-saffron"
              >
                View destinations →
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HERO_IMAGES.slice(0, 6).map((img, i) => (
              <Reveal key={img.src} delayMs={(i % 3) * 70}>
                <figure className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent p-4 text-sm text-white transition duration-500 group-hover:translate-y-0">
                    <span className="line-clamp-2">{img.alt}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* —— How it works */}
      <section className="border-t border-zinc-200/80 bg-zinc-50/80">
        <Container className="py-20 sm:py-28">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-sea">
                Process
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-brand-navy sm:text-3xl">
                Simple on the surface. Serious underneath.
              </h2>
            </div>
          </Reveal>

          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Share brief",
                body: "Dates, cities, traveler count, comfort level, and constraints.",
              },
              {
                step: "02",
                title: "Choose direction",
                body: "We return 2–3 itinerary paths with clear trade-offs and budgets.",
              },
              {
                step: "03",
                title: "Travel with backup",
                body: "Confirmations + a calm escalation line while you’re on the road.",
              },
            ].map((s, i) => (
              <Reveal key={s.step} delayMs={i * 90}>
                <li className="group relative rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-navy/20 hover:shadow-lg">
                  <div className="text-xs font-semibold tabular-nums text-brand-saffron">
                    {s.step}
                  </div>
                  <div className="mt-3 text-lg font-semibold text-brand-navy">
                    {s.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* —— Closing CTA */}
      <section className="border-t border-zinc-200/80 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-sea">
        <Container className="py-20 sm:py-28">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Ready for a calmer India itinerary?
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  Tell us your window — we’ll reply with options, not noise.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-brand-saffron px-8 text-sm font-semibold text-white shadow-lg shadow-black/25 transition hover:bg-brand-saffron/90"
              >
                Start a request
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
