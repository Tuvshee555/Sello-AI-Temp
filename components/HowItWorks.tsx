"use client";

import { useLang } from "./LanguageProvider";
import { SectionHeading } from "./Features";
import { CheckIcon } from "./Icons";

export default function HowItWorks() {
  const { t } = useLang();

  return (
    <section className="bg-ink-50 py-20 sm:py-24">
      <div className="container-px">
        <SectionHeading heading={t.how.heading} sub={t.how.sub} />

        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent md:block" />

          {t.how.steps.map((s) => (
            <div key={s.num} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-xl font-bold text-white shadow-glow ring-8 ring-ink-50">
                {s.num}
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-[15px] leading-relaxed text-ink-600">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-xl items-center justify-center gap-3 rounded-2xl border border-brand-100 bg-white px-6 py-4 text-center shadow-card">
          <CheckIcon className="h-5 w-5 shrink-0 text-brand-600" />
          <p className="text-[15px] font-medium text-ink-700">{t.how.note}</p>
        </div>
      </div>
    </section>
  );
}
