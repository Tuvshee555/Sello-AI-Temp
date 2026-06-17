"use client";

import { useLang } from "./LanguageProvider";
import { siteConfig } from "@/lib/siteConfig";
import { FacebookIcon } from "./Icons";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const links = [
    { href: "#features", label: t.nav.features },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="container-px py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-base font-bold text-white">
                S
              </span>
              <span className="text-lg font-bold tracking-tight text-ink-900">
                Sello <span className="text-brand-600">AI</span>
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <nav className="flex flex-col gap-2.5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-ink-600 hover:text-ink-900"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-2.5 text-sm text-ink-600">
              <a
                href={siteConfig.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-ink-900"
              >
                <FacebookIcon className="h-4 w-4" />
                Facebook
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-ink-900"
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={siteConfig.contact.phoneHref}
                className="hover:text-ink-900"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-ink-100 pt-6 text-center text-xs text-ink-400 sm:flex-row sm:text-left">
          <p>
            © {year} {siteConfig.brand}. {t.footer.rights}
          </p>
          <p>{siteConfig.legalEntity}</p>
        </div>
      </div>
    </footer>
  );
}
