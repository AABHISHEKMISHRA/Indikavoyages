import { Container } from "@/components/Container";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <Container className="py-12 sm:py-16">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">
            About Indikavoyages
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            We’re a travel management team focused on operations in India. Our
            job is to make travel predictable: clear plans, vetted partners, and
            fast help when changes happen.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Operations-first",
              desc: "We optimize for real-world travel constraints: traffic, weather, access rules, and seasonal demand.",
            },
            {
              title: "Verified partners",
              desc: "We coordinate with curated hotels, drivers, and local teams for consistent quality.",
            },
            {
              title: "Support that scales",
              desc: "From small families to corporate groups, we provide the same clarity and escalation paths.",
            },
          ].map((x) => (
            <div
              key={x.title}
              className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6"
            >
              <div className="text-base font-semibold text-brand-navy">
                {x.title}
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{x.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-zinc-200 bg-white p-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="text-sm font-semibold text-zinc-950">
                What we believe
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                The best trips are the ones that run smoothly even when plans
                change. We focus on communication, contingencies, and a calm,
                practical approach to execution.
              </p>
            </div>
            <div className="lg:col-span-5">
              <dl className="grid gap-4 sm:grid-cols-2">
                {[
                  { k: "Clarity", v: "Budgets & options upfront" },
                  { k: "Reliability", v: "Confirmed bookings & handoffs" },
                  { k: "Care", v: "Traveler-first support" },
                  { k: "Control", v: "Itineraries that adapt" },
                ].map((m) => (
                  <div
                    key={m.k}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
                  >
                    <dt className="text-sm font-semibold text-brand-navy">
                      {m.k}
                    </dt>
                    <dd className="mt-1 text-sm text-zinc-600">{m.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

