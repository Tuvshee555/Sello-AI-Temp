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
    phoneDisplay: "+976 8000-0000",
    phoneHref: "tel:+97680000000",

    // Email address
    email: "hello@selloai.mn",

    // Facebook page URL
    facebook: "https://facebook.com/SelloAI",
  },

  // ── SEO / metadata ───────────────────────────────────────────
  url: "https://selloai.mn",

  // Annual discount note (percent)
  annualDiscountPercent: 20,
} as const;

export type SiteConfig = typeof siteConfig;
