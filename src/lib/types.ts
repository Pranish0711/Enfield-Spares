export type CurrencyCode = "USD" | "INR" | "EUR" | "GBP" | "AED" | "JPY";

export type LanguageCode = "en" | "hi" | "ar" | "es" | "zh" | "ja" | "de" | "fr";

export type ProductCard = {
  id: string;
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  priceInr: number;
  stock: number;
  category: string;
  bikes: string[];
};
