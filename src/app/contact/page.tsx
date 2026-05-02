import { Container } from "@/components/Container";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h1 className="text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">
              Contact us
            </h1>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              Share trip details and we’ll respond with itinerary and budget
              options. For corporate travel, include traveler count and policy
              constraints.
            </p>

            <div className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
              <div className="text-sm font-semibold text-brand-navy">
                Quick details
              </div>
              <dl className="mt-4 space-y-3 text-sm text-zinc-700">
                <div className="flex justify-between gap-6">
                  <dt className="text-zinc-500">Email</dt>
                  <dd className="font-medium text-brand-navy">
                    hello@indikavoyages.com
                  </dd>
                </div>
                <div className="flex justify-between gap-6">
                  <dt className="text-zinc-500">Phone</dt>
                  <dd className="font-medium text-brand-navy">+91 00000 00000</dd>
                </div>
                <div className="flex justify-between gap-6">
                  <dt className="text-zinc-500">Hours</dt>
                  <dd className="font-medium text-brand-navy">
                    Mon–Sat, 10:00–19:00 IST
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-brand-navy">
                Request form (static)
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                This is a front-end placeholder. You can wire it to email/API
                later.
              </p>

              <form className="mt-6 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm">
                    <span className="font-medium text-brand-navy">Name</span>
                    <input
                      className="h-11 rounded-2xl border border-zinc-200 bg-white px-4 text-zinc-950 outline-none focus:border-brand-saffron focus:ring-2 focus:ring-brand-saffron/25"
                      placeholder="Your name"
                      name="name"
                    />
                  </label>
                  <label className="grid gap-2 text-sm">
                    <span className="font-medium text-brand-navy">Email</span>
                    <input
                      className="h-11 rounded-2xl border border-zinc-200 bg-white px-4 text-zinc-950 outline-none focus:border-brand-saffron focus:ring-2 focus:ring-brand-saffron/25"
                      placeholder="name@company.com"
                      name="email"
                      type="email"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm">
                    <span className="font-medium text-brand-navy">Travel dates</span>
                    <input
                      className="h-11 rounded-2xl border border-zinc-200 bg-white px-4 text-zinc-950 outline-none focus:border-brand-saffron focus:ring-2 focus:ring-brand-saffron/25"
                      placeholder="e.g., 12–18 June"
                      name="dates"
                    />
                  </label>
                  <label className="grid gap-2 text-sm">
                    <span className="font-medium text-brand-navy">Travelers</span>
                    <input
                      className="h-11 rounded-2xl border border-zinc-200 bg-white px-4 text-zinc-950 outline-none focus:border-brand-saffron focus:ring-2 focus:ring-brand-saffron/25"
                      placeholder="e.g., 2 adults"
                      name="travelers"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm">
                  <span className="font-medium text-brand-navy">
                    Cities / route
                  </span>
                  <input
                    className="h-11 rounded-2xl border border-zinc-200 bg-white px-4 text-zinc-950 outline-none focus:border-brand-saffron focus:ring-2 focus:ring-brand-saffron/25"
                    placeholder="e.g., Delhi, Agra, Jaipur"
                    name="route"
                  />
                </label>

                <label className="grid gap-2 text-sm">
                  <span className="font-medium text-brand-navy">
                    Notes / preferences
                  </span>
                  <textarea
                    className="min-h-28 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-950 outline-none focus:border-brand-saffron focus:ring-2 focus:ring-brand-saffron/25"
                    placeholder="Comfort level, hotel category, interests, corporate constraints…"
                    name="notes"
                  />
                </label>

                <button
                  type="button"
                  className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-brand-saffron px-6 text-sm font-semibold text-white transition hover:bg-brand-saffron/90"
                >
                  Submit request
                </button>

                <p className="text-xs leading-5 text-zinc-500">
                  By submitting, you agree to be contacted about your travel
                  request. No spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

