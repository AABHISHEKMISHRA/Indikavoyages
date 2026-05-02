"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/Container";
import { LogoMark } from "@/components/Logo";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/destinations", label: "Destinations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

function NavLink({
  href,
  label,
}: {
  href: (typeof nav)[number]["href"];
  label: string;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={[
        "rounded-full px-3 py-2 text-sm font-medium transition-colors",
        active
          ? "bg-zinc-100 text-brand-navy"
          : "text-zinc-600 hover:bg-zinc-50 hover:text-brand-navy",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/85 shadow-[0_1px_0_rgba(24,24,27,0.04)] backdrop-blur-md supports-[backdrop-filter]:bg-white/70">
      <Container className="grid grid-cols-[1fr_auto] grid-rows-[auto_auto] items-center gap-x-3 gap-y-3 py-3 md:h-16 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:grid-rows-1 md:gap-y-0 md:py-0">
        <Link
          href="/"
          className="col-start-1 row-start-1 flex min-w-0 items-center gap-2 justify-self-start"
        >
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-navy to-brand-sea text-white shadow-sm ring-1 ring-black/5">
            <LogoMark className="h-5 w-5" />
          </span>
          <span className="min-w-0 text-sm font-semibold tracking-tight text-brand-navy">
            Indika<span className="text-brand-saffron">voyages</span>
          </span>
          <span className="hidden truncate text-sm text-zinc-500 xl:inline">
            India travel operations
          </span>
        </Link>

        <nav className="col-span-2 row-start-2 flex max-w-full items-center justify-center gap-0.5 overflow-x-auto whitespace-nowrap rounded-2xl border border-zinc-200/80 bg-zinc-50/80 px-1 py-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-1 md:col-span-1 md:col-start-2 md:row-start-1 md:border-0 md:bg-transparent md:px-0 md:py-0 [&::-webkit-scrollbar]:hidden">
          {nav.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <div className="col-start-2 row-start-1 flex items-center justify-self-end md:col-start-3">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-brand-saffron px-4 text-sm font-semibold text-white shadow-sm shadow-brand-saffron/20 transition hover:bg-brand-saffron/90 sm:px-5"
          >
            Get a quote
          </Link>
        </div>
      </Container>
    </header>
  );
}

