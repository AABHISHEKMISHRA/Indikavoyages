import Link from "next/link";
import { Container } from "@/components/Container";

export function SiteFooter() {
  return (
    <footer className="site-footer border-t border-zinc-200/70 bg-white">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-sm font-semibold text-brand-navy">
              Indika<span className="text-brand-saffron">voyages</span>
            </div>
            <p className="mt-3 max-w-prose text-sm leading-6 text-zinc-600">
              End-to-end travel management and ground operations across India —
              from planning and bookings to on-trip support.
            </p>
            <p className="mt-4 text-xs text-zinc-500">
              © {new Date().getFullYear()} Indikavoyages. All rights reserved.
            </p>
            <p className="mt-3 text-xs leading-5 text-zinc-500">
              Imagery: stock placeholders (licensed).{" "}
              <Link className="underline decoration-brand-saffron/40 underline-offset-4 hover:text-brand-navy" href="/credits">
                Credits
              </Link>
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Company
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="text-zinc-600 hover:text-brand-navy" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-zinc-600 hover:text-brand-navy"
                  href="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-zinc-600 hover:text-brand-navy"
                  href="/destinations"
                >
                  Destinations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Contact
            </div>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>
                <span className="font-medium text-brand-navy">Email:</span>{" "}
                indikavoyages@gmail.com
              </li>
              <li>
                <Link className="text-zinc-600 hover:text-brand-navy" href="/contact">
                  Request a callback
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

