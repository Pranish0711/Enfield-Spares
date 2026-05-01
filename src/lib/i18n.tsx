"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { LANGUAGES } from "./config";
import { LanguageCode } from "./types";

const DICT: Record<LanguageCode, Record<string, string>> = {
  en: { shopParts: "Shop Parts", browseBike: "Browse by Bike", hero: "Genuine Parts. Global Reach." },
  hi: { shopParts: "पार्ट्स खरीदें", browseBike: "बाइक के अनुसार देखें", hero: "असली पार्ट्स. वैश्विक पहुंच." },
  ar: { shopParts: "تسوق القطع", browseBike: "تصفح حسب الدراجة", hero: "قطع أصلية. وصول عالمي." },
  es: { shopParts: "Comprar Repuestos", browseBike: "Buscar por Moto", hero: "Repuestos genuinos. Alcance global." },
  zh: { shopParts: "购买零件", browseBike: "按车型浏览", hero: "正品零件，全球直达。" },
  ja: { shopParts: "パーツを探す", browseBike: "バイク別に探す", hero: "純正パーツを、世界へ。" },
  de: { shopParts: "Teile kaufen", browseBike: "Nach Motorrad suchen", hero: "Originalteile. Weltweite Reichweite." },
  fr: { shopParts: "Acheter des pièces", browseBike: "Par moto", hero: "Pièces d'origine. Portée mondiale." },
};

type I18nState = {
  lang: LanguageCode;
  setLang: (value: LanguageCode) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
};

const I18nContext = createContext<I18nState | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<LanguageCode>("en");

  useEffect(() => {
    const storedLang = window.localStorage.getItem("lang") as LanguageCode | null;
    if (!storedLang) return;
    if (LANGUAGES.some((item) => item.code === storedLang)) {
      setLang(storedLang);
    }
  }, []);

  useEffect(() => {
    const doc = document.documentElement;
    const current = LANGUAGES.find((item) => item.code === lang);
    doc.lang = lang;
    doc.dir = current?.dir ?? "ltr";
    window.localStorage.setItem("lang", lang);
  }, [lang]);
  const state = useMemo<I18nState>(() => {
    const dir = LANGUAGES.find((l) => l.code === lang)?.dir ?? "ltr";
    return {
      lang,
      setLang,
      dir,
      t: (key) => DICT[lang]?.[key] ?? DICT.en[key] ?? key,
    };
  }, [lang]);

  return <I18nContext.Provider value={state}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
