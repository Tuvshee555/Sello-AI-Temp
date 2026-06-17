"use client";

import { useLang } from "./LanguageProvider";
import { SectionHeading } from "./Features";
import { CheckIcon } from "./Icons";

export default function WhySello() {
  const { t } = useLang();

  return (
    <section className="bg-ink-50 py-20 sm:py-24">
      <div className="container-px">
        <SectionHeading heading={t.why.heading} sub={t.why.sub} />

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
          {t.why.points.map((p) => (
            <div
              key={p.title}
              className="flex gap-4 rounded-2xl border border-ink-100 bg-white p-6 shadow-card"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <CheckIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-bold text-ink-900">{p.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-600">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial placeholder — clearly marked, not fake */}
        <div className="mx-auto mt-6 max-w-4xl rounded-2xl border border-dashed border-ink-300 bg-white/60 p-8 text-center">
          <p className="text-sm italic text-ink-400">
            {t.why.testimonialPlaceholder}
          </p>
        </div>
      </div>
    </section>
  );
}
