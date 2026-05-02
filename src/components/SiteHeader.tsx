"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Container } from "@/components/Container";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/destinations", label: "Destinations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="min-w-0 shrink text-left">
          <span className="block text-sm font-semibold tracking-tight text-brand-navy">
            Indika<span className="text-brand-saffron">voyages</span>
          </span>
          <span className="mt-0.5 block truncate text-xs text-zinc-500 sm:text-sm">
            India travel operations
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-brand-navy shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-5 w-6" aria-hidden>
              <span
                className={[
                  "absolute left-0 top-1 block h-0.5 w-6 rounded-full bg-current transition duration-300 ease-out",
                  open ? "top-2.5 rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-2.5 block h-0.5 w-6 rounded-full bg-current transition duration-300 ease-out",
                  open ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-4 block h-0.5 w-6 rounded-full bg-current transition duration-300 ease-out",
                  open ? "top-2.5 -rotate-45" : "",
                ].join(" ")}
              />
            </span>
          </button>

          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-brand-saffron px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-saffron/90 sm:px-5"
          >
            Get a quote
          </Link>
        </div>
      </Container>

      {open ? (
        <div
          id={menuId}
          className="border-b border-zinc-200/80 bg-white shadow-[0_12px_30px_-18px_rgba(0,0,0,0.25)]"
          role="navigation"
          aria-label="Primary"
        >
          <Container className="py-4">
            <ul className="grid gap-1 sm:max-w-xs sm:ml-auto">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={[
                        "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                        active
                          ? "bg-zinc-100 text-brand-navy"
                          : "text-zinc-700 hover:bg-zinc-50 hover:text-brand-navy",
                      ].join(" ")}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
