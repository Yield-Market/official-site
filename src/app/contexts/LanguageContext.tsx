"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "zh" | "en";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<Ctx | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("zh");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("ym_lang") as Lang | null) : null;
    if (saved === "zh" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("ym_lang", l);
      // Optionally set <html lang>
      document?.documentElement?.setAttribute("lang", l === "zh" ? "zh-CN" : "en");
    } catch {}
  };

  const toggle = () => setLang(lang === "zh" ? "en" : "zh");

  const value = useMemo(() => ({ lang, setLang, toggle }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
