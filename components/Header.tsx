"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LanguageProvider";
import { siteConfig } from "@/lib/siteConfig";

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#features", label: t.nav.features },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-100 bg-white/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-px flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-base font-bold text-white shadow-glow">
            S
          </span>
          <span className="text-lg font-bold tracking-tight text-ink-900">
            Sello <span className="text-brand-600">AI</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-600 transition-colors hover:text-ink-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Lang toggle */}
          <div className="flex items-center rounded-full border border-ink-200 bg-white p-0.5 text-xs font-semibold">
            {(["mn", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  lang === l
                    ? "bg-ink-900 text-white"
                    : "text-ink-500 hover:text-ink-900"
                }`}
                aria-pressed={lang === l}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden btn-primary !px-5 !py-2.5 text-sm sm:inline-flex"
          >
            {t.nav.cta}
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 text-ink-700 md:hidden"
            aria-label="Menu"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-ink-100 bg-white md:hidden">
          <nav className="container-px flex flex-col py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-ink-700 hover:bg-ink-50"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              {t.nav.cta}
            </a>
            <a
              href={siteConfig.contact.messenger}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center text-sm text-ink-400"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
