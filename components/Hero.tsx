"use client";

import { useLang } from "./LanguageProvider";
import { ArrowRightIcon } from "./Icons";

export default function Hero() {
  const { t } = useLang();
  const c = t.hero.chat;

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      {/* Background */}
      <div className="hero-grid absolute inset-0 -z-10" />
      <div className="absolute -top-24 left-1/2 -z-10 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-brand-100/50 blur-3xl" />

      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Copy */}
        <div className="animate-fade-up text-center lg:text-left">
          <span className="eyebrow">{t.hero.badge}</span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.4rem]">
            {t.hero.title}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-600 lg:mx-0">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              {t.hero.primaryCta}
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a href="#features" className="btn-secondary w-full sm:w-auto">
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="animate-fade-up flex justify-center [animation-delay:120ms] lg:justify-end">
          <PhoneMock c={c} />
        </div>
      </div>
    </section>
  );
}

function PhoneMock({
  c,
}: {
  c: {
    customer1: string;
    bot1: string;
    customer2: string;
    bot2: string;
    typing: string;
  };
}) {
  return (
    <div className="relative w-full max-w-[320px]">
      <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-b from-brand-200/40 to-transparent blur-2xl" />
      <div className="animate-float rounded-[2.5rem] border-[10px] border-ink-900 bg-ink-900 shadow-soft">
        <div className="overflow-hidden rounded-[1.7rem] bg-ink-50">
          {/* Chat header */}
          <div className="flex items-center gap-3 bg-ink-900 px-4 py-3 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-sm font-bold">
              S
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Sello AI</p>
              <p className="flex items-center gap-1 text-[11px] text-brand-200">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                Online
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-2.5 px-3 py-4">
            <Bubble side="left">{c.customer1}</Bubble>
            <Bubble side="right">{c.bot1}</Bubble>
            <Bubble side="left">{c.customer2}</Bubble>
            <Bubble side="right">{c.bot2}</Bubble>

            {/* Typing indicator */}
            <div className="flex items-center gap-2 pl-1 pt-1">
              <span className="flex gap-1 rounded-full bg-white px-3 py-2 shadow-sm">
                <Dot /> <Dot delay="0.2s" /> <Dot delay="0.4s" />
              </span>
              <span className="text-[10px] text-ink-400">{c.typing}</span>
            </div>
          </div>

          {/* Input bar */}
          <div className="flex items-center gap-2 border-t border-ink-100 bg-white px-3 py-2.5">
            <div className="h-8 flex-1 rounded-full bg-ink-100" />
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-white">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({
  side,
  children,
}: {
  side: "left" | "right";
  children: React.ReactNode;
}) {
  const right = side === "right";
  return (
    <div className={`flex ${right ? "justify-end" : "justify-start"}`}>
      <p
        className={`max-w-[82%] rounded-2xl px-3.5 py-2 text-[13px] leading-snug shadow-sm ${
          right
            ? "rounded-br-md bg-brand-500 text-white"
            : "rounded-bl-md bg-white text-ink-700"
        }`}
      >
        {children}
      </p>
    </div>
  );
}

function Dot({ delay = "0s" }: { delay?: string }) {
  return (
    <span
      className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-ink-400"
      style={{ animationDelay: delay }}
    />
  );
}
