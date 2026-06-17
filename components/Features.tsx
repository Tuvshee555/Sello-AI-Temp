"use client";

import { useLang } from "./LanguageProvider";
import { featureIconMap } from "./Icons";

export default function Features() {
  const { t } = useLang();

  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="container-px">
        <SectionHeading heading={t.features.heading} sub={t.features.sub} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((f, i) => {
            const Icon = featureIconMap[f.icon];
            return (
              <div
                key={i}
                className="card group hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  {Icon ? <Icon className="h-6 w-6" /> : null}
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink-900">{f.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  heading,
  sub,
  center = true,
}: {
  heading: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <h2 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
        {heading}
      </h2>
      {sub && <p className="mt-4 text-lg text-ink-600">{sub}</p>}
    </div>
  );
}
