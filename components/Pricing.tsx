"use client";

import { useLang } from "./LanguageProvider";
import { SectionHeading } from "./Features";
import { CheckIcon } from "./Icons";

export default function Pricing() {
  const { t } = useLang();

  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="container-px">
        <SectionHeading heading={t.pricing.heading} sub={t.pricing.sub} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.pricing.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 ${
                tier.popular
                  ? "border-brand-500 bg-ink-900 text-white shadow-soft lg:scale-[1.03]"
                  : "border-ink-100 bg-white text-ink-800 shadow-card hover:-translate-y-1 hover:shadow-soft"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white shadow-glow">
                  {t.pricing.popularBadge}
                </span>
              )}

              <h3
                className={`text-base font-bold ${
                  tier.popular ? "text-brand-200" : "text-ink-900"
                }`}
              >
                {tier.name}
              </h3>

              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold tracking-tight">
                  {tier.price}
                </span>
                <span
                  className={`text-sm ${
                    tier.popular ? "text-ink-300" : "text-ink-500"
                  }`}
                >
                  {tier.period}
                </span>
              </div>

              <p
                className={`mt-2 text-sm font-medium ${
                  tier.popular ? "text-brand-200" : "text-brand-600"
                }`}
              >
                {tier.limit}
              </p>

              <ul className="mt-5 flex-1 space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckIcon
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        tier.popular ? "text-brand-400" : "text-brand-500"
                      }`}
                    />
                    <span className={tier.popular ? "text-ink-200" : "text-ink-600"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-6 ${
                  tier.popular
                    ? "btn-primary w-full"
                    : "btn-secondary w-full"
                }`}
              >
                {t.pricing.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="mt-10 flex flex-col items-center gap-2 text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
            💡 {t.pricing.annualNote}
          </p>
          <p className="text-sm text-ink-500">{t.pricing.customNote}</p>
        </div>
      </div>
    </section>
  );
}
