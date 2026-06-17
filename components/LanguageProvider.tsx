"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { content, type Content, type Lang } from "@/lib/content";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Content;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("mn");

  // Restore preference on mount
  useEffect(() => {
    const saved = window.localStorage.getItem("sello-lang");
    if (saved === "mn" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("sello-lang", l);
    document.documentElement.lang = l;
  };

  const toggle = () => setLang(lang === "mn" ? "en" : "mn");

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
