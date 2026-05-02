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
        "text-sm font-medium transition-colors",
        active ? "text-brand-navy" : "text-zinc-600 hover:text-brand-navy",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-navy to-brand-sea text-white">
            <LogoMark className="h-5 w-5" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-brand-navy">
            Indika<span className="text-brand-saffron">voyages</span>
          </span>
          <span className="hidden text-sm text-zinc-500 sm:inline">
            India travel operations
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-brand-saffron px-5 text-sm font-semibold text-white transition hover:bg-brand-saffron/90"
          >
            Get a quote
          </Link>
        </div>
      </Container>
    </header>
  );
}

