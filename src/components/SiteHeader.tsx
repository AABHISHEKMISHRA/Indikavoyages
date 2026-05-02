"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);
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

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (open) {
      root.dataset.navOpen = "true";
      document.body.style.overflow = "hidden";
    } else {
      delete root.dataset.navOpen;
      document.body.style.overflow = "";
    }
    return () => {
      delete root.dataset.navOpen;
      document.body.style.overflow = "";
    };
  }, [open]);

  const overlay =
    mounted &&
    createPortal(
      <>
        <div
          className={[
            "fixed inset-0 z-[90] bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ease-out",
            open ? "opacity-100" : "pointer-events-none opacity-0",
          ].join(" ")}
          aria-hidden={!open}
          onClick={() => setOpen(false)}
        />

        <nav
          id={menuId}
          className={[
            "fixed left-0 top-16 bottom-0 z-[95] flex w-[min(92vw,400px)] flex-col border-r border-zinc-200/80 bg-white shadow-2xl transition-transform duration-300 ease-out",
            open
              ? "translate-x-0"
              : "pointer-events-none -translate-x-full",
          ].join(" ")}
          aria-hidden={!open}
          aria-label="Primary navigation"
        >
          <div className="border-b border-zinc-100 px-6 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Menu
            </p>
          </div>
          <ul className="flex-1 overflow-y-auto px-3 py-4">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={[
                      "block rounded-xl px-4 py-3.5 text-sm font-medium transition-colors",
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
        </nav>
      </>,
      document.body,
    );

  return (
    <>
      <header className="sticky top-0 z-[100] border-b border-zinc-200/60 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/85">
        <Container className="flex h-16 items-center justify-between gap-4">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <button
              type="button"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white text-brand-navy shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50"
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

            <Link href="/" className="min-w-0 text-left">
              <span className="block text-sm font-semibold tracking-tight text-brand-navy">
                Indika<span className="text-brand-saffron">voyages</span>
              </span>
              <span className="mt-0.5 block truncate text-xs text-zinc-500 sm:text-sm">
                India travel operations
              </span>
            </Link>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-full bg-brand-saffron px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-saffron/90 sm:px-5"
            >
              Get a quote
            </Link>
          </div>
        </Container>
      </header>

      {overlay}
    </>
  );
}
