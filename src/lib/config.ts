import { CurrencyCode, LanguageCode } from "./types";

export const BIKE_MODELS = [
  "Hunter 350",
  "Classic 350",
  "Meteor 350",
  "Himalayan 411",
  "Himalayan 450",
  "Interceptor 650",
  "Continental GT 650",
];

export const CATEGORIES = [
  "Filters",
  "Engine Parts",
  "Brake System",
  "Electricals",
  "Chains & Sprockets",
];

export const CURRENCY_RATES: Record<CurrencyCode, number> = {
  INR: 1,
  USD: 0.012,
  EUR: 0.011,
  GBP: 0.0094,
  AED: 0.044,
  JPY: 1.88,
};

export const LANGUAGES: { code: LanguageCode; label: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "hi", label: "Hindi", dir: "ltr" },
  { code: "ar", label: "Arabic", dir: "rtl" },
  { code: "es", label: "Spanish", dir: "ltr" },
  { code: "zh", label: "Chinese", dir: "ltr" },
  { code: "ja", label: "Japanese", dir: "ltr" },
  { code: "de", label: "Deutsch", dir: "ltr" },
  { code: "fr", label: "French", dir: "ltr" },
];
