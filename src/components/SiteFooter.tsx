import Link from "next/link";
import { Container } from "@/components/Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200/70 bg-white">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-sm font-semibold text-zinc-950">
              Saffron Trails
            </div>
            <p className="mt-3 max-w-prose text-sm leading-6 text-zinc-600">
              End-to-end travel management and ground operations across India —
              from planning and bookings to on-trip support.
            </p>
            <p className="mt-4 text-xs text-zinc-500">
              © {new Date().getFullYear()} Saffron Trails. All rights reserved.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Company
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="text-zinc-600 hover:text-zinc-950" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-zinc-600 hover:text-zinc-950"
                  href="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-zinc-600 hover:text-zinc-950"
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
                <span className="font-medium text-zinc-950">Email:</span>{" "}
                hello@saffrontrails.in
              </li>
              <li>
                <span className="font-medium text-zinc-950">Phone:</span> +91
                00000 00000
              </li>
              <li>
                <Link className="text-zinc-600 hover:text-zinc-950" href="/contact">
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

