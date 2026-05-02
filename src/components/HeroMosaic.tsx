const TILES = [
  {
    src: "/images/hero/01-taj-mahal.webp",
    alt: "Ivory marble architecture reflected in garden waterways (India).",
    className:
      "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2 lg:col-span-6 lg:row-span-4",
  },
  {
    src: "/images/hero/02-kerala-backwaters.webp",
    alt: "Calm backwaters lined with palm trees (Kerala, India).",
    className: "col-span-1 row-span-1 lg:col-span-3 lg:row-span-2",
  },
  {
    src: "/images/hero/03-himalaya.webp",
    alt: "Snow-capped mountain peaks above clouds (Himalayas).",
    className: "col-span-1 row-span-1 lg:col-span-3 lg:row-span-2",
  },
  {
    src: "/images/hero/04-jaipur-hawa-mahal.webp",
    alt: "Historic sandstone facade with intricate windows (Jaipur, India).",
    className: "col-span-1 row-span-1 lg:col-span-3 lg:row-span-2",
  },
  {
    src: "/images/hero/05-varanasi-ganga.webp",
    alt: "River ghats and temple skyline along the Ganges (Varanasi, India).",
    className: "col-span-1 row-span-1 lg:col-span-3 lg:row-span-2",
  },
  {
    src: "/images/hero/06-amer-fort-distance.webp",
    alt: "Hilltop fort overlooking a lake at soft daylight (Amer, India).",
    className: "col-span-2 row-span-1 sm:col-span-2 sm:row-span-1 lg:col-span-6 lg:row-span-2",
  },
  {
    src: "/images/hero/07-amer-fort-reflection.webp",
    alt: "Fort architecture mirrored in still water (Amer, India).",
    className: "col-span-1 row-span-1 lg:col-span-2 lg:row-span-1",
  },
  {
    src: "/images/hero/08-spice-jars.webp",
    alt: "Colorful spice jars lined up in a market display (India).",
    className: "col-span-1 row-span-1 lg:col-span-2 lg:row-span-1",
  },
  {
    src: "/images/hero/09-spice-spoons.webp",
    alt: "Spices arranged on spoons on a dark surface (India).",
    className: "col-span-1 row-span-1 lg:col-span-2 lg:row-span-1",
  },
] as const;

export function HeroMosaic() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-zinc-950 shadow-[0_30px_80px_-40px_rgba(11,27,47,0.55)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(234,88,12,0.22),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(15,118,110,0.18),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay iv-grain"
      />

      <div className="relative min-h-[460px] grid grid-cols-3 grid-rows-[repeat(4,minmax(0,1fr))] gap-2 p-2 sm:min-h-[520px] sm:gap-3 sm:p-3 lg:h-[560px] lg:min-h-0 lg:grid-cols-12 lg:grid-rows-6">
        {TILES.map((t, idx) => (
          <figure
            key={t.src}
            className={[
              "relative overflow-hidden rounded-2xl ring-1 ring-white/10",
              t.className,
            ].join(" ")}
          >
            <img
              src={t.src}
              alt={t.alt}
              className="iv-kenburns h-full w-full object-cover"
              loading={idx === 0 ? "eager" : "lazy"}
              decoding="async"
              style={{
                animationDelay: `${idx * 1.1}s`,
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
          </figure>
        ))}
      </div>
    </div>
  );
}
