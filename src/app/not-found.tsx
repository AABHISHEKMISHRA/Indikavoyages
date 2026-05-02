import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <div className="bg-white">
      <Container className="py-16">
        <div className="max-w-xl">
          <div className="text-sm font-semibold text-zinc-500">404</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-brand-navy">
            Page not found
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            The page you’re looking for doesn’t exist or has moved.
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand-saffron px-5 text-sm font-semibold text-white transition hover:bg-brand-saffron/90"
            >
              Go home
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-5 text-sm font-semibold text-brand-navy transition hover:bg-zinc-50"
            >
              Contact us
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

