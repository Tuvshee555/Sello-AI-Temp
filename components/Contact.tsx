"use client";

import { useState } from "react";
import { useLang } from "./LanguageProvider";
import { siteConfig } from "@/lib/siteConfig";
import {
  MessengerIcon,
  PhoneIcon,
  MailIcon,
  FacebookIcon,
} from "./Icons";

export default function Contact() {
  const { t } = useLang();
  const cc = siteConfig.contact;

  const channels = [
    {
      label: t.contact.messenger,
      sub: "Messenger",
      href: cc.messenger,
      Icon: MessengerIcon,
      external: true,
      accent: "bg-[#0084ff]",
    },
    {
      label: t.contact.phone,
      sub: cc.phoneDisplay,
      href: cc.phoneHref,
      Icon: PhoneIcon,
      external: false,
      accent: "bg-brand-500",
    },
    {
      label: t.contact.email,
      sub: cc.email,
      href: `mailto:${cc.email}`,
      Icon: MailIcon,
      external: false,
      accent: "bg-ink-800",
    },
    {
      label: t.contact.facebook,
      sub: "Facebook",
      href: cc.facebook,
      Icon: FacebookIcon,
      external: true,
      accent: "bg-[#1877f2]",
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-900 py-20 text-white sm:py-24">
      <div className="absolute -top-32 left-1/2 -z-0 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />

      <div className="container-px relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.contact.heading}
          </h2>
          <p className="mt-4 text-lg text-ink-300">{t.contact.sub}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Direct channels */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {channels.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                {...(ch.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${ch.accent} text-white`}
                >
                  <ch.Icon className="h-6 w-6" />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold">{ch.label}</span>
                  <span className="block truncate text-sm text-ink-400">
                    {ch.sub}
                  </span>
                </span>
              </a>
            ))}

            <p className="mt-1 text-center text-sm text-brand-300 lg:text-left">
              {t.contact.realPerson}
            </p>
          </div>

          {/* Contact form (no backend — composes an email) */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const { t } = useLang();
  const f = t.contact.fields;
  const [data, setData] = useState({
    name: "",
    phone: "",
    shop: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Sello AI — ${data.shop || data.name || "Lead"}`);
    const body = encodeURIComponent(
      `${f.name}: ${data.name}\n${f.phone}: ${data.phone}\n${f.shop}: ${data.shop}\n\n${data.message}`
    );
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-ink-400 outline-none transition focus:border-brand-400 focus:bg-white/10";

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
      <h3 className="text-lg font-bold">{t.contact.formTitle}</h3>
      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            className={field}
            placeholder={f.name}
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            required
          />
          <input
            className={field}
            placeholder={f.phone}
            inputMode="tel"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            required
          />
        </div>
        <input
          className={field}
          placeholder={f.shop}
          value={data.shop}
          onChange={(e) => setData({ ...data, shop: e.target.value })}
        />
        <textarea
          className={`${field} min-h-[110px] resize-y`}
          placeholder={f.message}
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
        />
        <button type="submit" className="btn-primary w-full">
          {t.contact.submit}
        </button>
      </form>
    </div>
  );
}
