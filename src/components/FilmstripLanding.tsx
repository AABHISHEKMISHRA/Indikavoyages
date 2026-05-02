"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HERO_IMAGES } from "@/data/heroImages";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

const SLIDE_INTERVAL_MS = 8500;
const FADE_MS = 2800;

function CalmSlideshow() {
  const [index, setIndex] = useState(0);
  const [motionOk, setMotionOk] = useState(true);

  const count = HERO_IMAGES.length;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setMotionOk(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!motionOk) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % count),
      SLIDE_INTERVAL_MS,
    );
    return () => window.clearInterval(id);
  }, [motionOk, count]);

  return (
    <>
      {HERO_IMAGES.map((img, i) => (
        <div
          key={img.src}
          className={[
            "pointer-events-none absolute inset-0",
            i === index ? "z-[1]" : "z-0",
          ].join(" ")}
          style={{
            transitionProperty: "opacity",
            transitionDuration: `${FADE_MS}ms`,
            transitionTimingFunction: "cubic-bezier(0.45, 0, 0.2, 1)",
            opacity: i === index ? 1 : 0,
          }}
          aria-hidden={i === index ? undefined : true}
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              key={i === index ? `zoom-${index}-${i}` : `idle-${i}`}
              src={img.src}
              alt=""
              className={[
                "h-full w-full object-cover",
                i === index && motionOk ? "iv-slideshow-zoom" : "",
              ].join(" ")}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        </div>
      ))}
    </>
  );
}

export function FilmstripLanding() {
  return (
    <div className="bg-white">
      {/* —— Hero: full-bleed slideshow — long crossfades + slow zoom */}
      <section className="relative min-h-[min(100dvh,900px)] overflow-hidden bg-zinc-950">
        <div className="absolute inset-0">
          <CalmSlideshow />
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

          <Reveal>
            <figure className="group relative mb-10 aspect-[21/9] min-h-[200px] w-full overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-md sm:min-h-[260px]">
              <img
                src={HERO_IMAGES[3].src}
                alt={HERO_IMAGES[3].alt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  Jaipur
                </p>
                <p className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  Hawa Mahal &amp; the Pink City
                </p>
                <p className="mt-2 max-w-lg text-sm leading-6 text-white/85">
                  Facades, bazaars, and royal forts — paced for comfort, not crowds.
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HERO_IMAGES.filter((_, idx) => idx !== 3)
              .slice(0, 6)
              .map((img, i) => (
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
