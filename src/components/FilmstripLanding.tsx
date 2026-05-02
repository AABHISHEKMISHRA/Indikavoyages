"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { HERO_IMAGES } from "@/data/heroImages";

const INTERVAL_MS = 6000;

export function FilmstripLanding() {
  const [index, setIndex] = useState(0);
  const [motionOk, setMotionOk] = useState(true);

  const count = HERO_IMAGES.length;

  const next = useMemo(
    () => () => setIndex((i) => (i + 1) % count),
    [count],
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotionOk(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!motionOk) return;
    const id = window.setInterval(next, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [motionOk, next]);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
    };
  }, []);

  return (
    <section className="relative h-[calc(100dvh-4rem)] w-full overflow-hidden bg-zinc-950">
      {HERO_IMAGES.map((img, i) => (
        <div
          key={img.src}
          className={[
            "absolute inset-0 transition-opacity duration-[1200ms] ease-out",
            i === index ? "z-[1] opacity-100" : "z-0 opacity-0",
          ].join(" ")}
          aria-hidden={i === index ? undefined : true}
        >
          <img
            src={img.src}
            alt=""
            className={[
              "h-full w-full object-cover",
              i === index && motionOk ? "iv-kenburns" : "",
            ].join(" ")}
            style={
              i === index && motionOk
                ? { animationDelay: `${(i % 3) * 2}s` }
                : undefined
            }
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        </div>
      ))}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-black/55 via-black/25 to-black/65"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.12] mix-blend-overlay iv-grain"
      />

      <div className="relative z-[3] flex h-full flex-col px-5 pb-6 pt-8 sm:px-8 sm:pt-12">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/70">
            Indikavoyages
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.05]">
            India travel, quietly orchestrated.
          </h1>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
            Premium itineraries and on-ground support — minimal friction, maximum
            clarity.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand-saffron px-6 text-sm font-semibold text-white transition hover:bg-brand-saffron/90"
            >
              Request a quote
            </Link>
            <Link
              href="/services"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Services
            </Link>
          </div>
          <p className="mt-6 text-[11px] leading-5 text-white/55">
            Stock imagery for launch —{" "}
            <Link className="underline decoration-white/30 underline-offset-4 hover:text-white" href="/credits">
              credits
            </Link>
          </p>
        </div>

        <div className="mt-auto pt-10">
          <div className="relative rounded-2xl border border-white/15 bg-black/25 p-2 backdrop-blur-md">
            <div
              className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              role="tablist"
              aria-label="Slide thumbnails"
            >
              {HERO_IMAGES.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  className={[
                    "relative h-14 w-24 shrink-0 overflow-hidden rounded-lg ring-2 transition",
                    i === index
                      ? "ring-brand-saffron"
                      : "ring-transparent opacity-70 hover:opacity-100",
                  ].join(" ")}
                  onClick={() => setIndex(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-1 -bottom-1 h-3 rounded-b-2xl bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.14)_0px,rgba(255,255,255,0.14)_10px,transparent_10px,transparent_18px)] opacity-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
