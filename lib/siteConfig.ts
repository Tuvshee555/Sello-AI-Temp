/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT EVERYTHING HERE — all contact info lives in this file.
 *  Replace the placeholder values below with your real details.
 * ─────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  brand: "Sello AI",
  legalEntity: "Nexon Digital Nova",

  // ── Contact details (REPLACE THESE) ──────────────────────────
  contact: {
    // Messenger deep link, e.g. "https://m.me/SelloAI"
    messenger: "https://m.me/SelloAI",

    // Phone number shown to users + used in the tel: link
    phoneDisplay: "+976 8618 5769",
    phoneHref: "tel:+97686185769",

    // Email address
    email: "nexondigitalnova@gmail.com",

    // Facebook page URL
    facebook: "https://www.facebook.com/SelloAI",
  },

  // ── SEO / metadata ───────────────────────────────────────────
  url: "https://selloai.mn",

  // Annual discount note (percent)
  annualDiscountPercent: 20,
} as const;

export type SiteConfig = typeof siteConfig;
