import { CURRENCY_RATES } from "./config";
import { CurrencyCode } from "./types";

export function convertFromInr(amountInr: number, currency: CurrencyCode) {
  return Math.round(amountInr * CURRENCY_RATES[currency]);
}

export function formatCurrency(amount: number, currency: CurrencyCode) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
}
