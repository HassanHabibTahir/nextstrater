import "server-only";
import { i18n, type Locale } from "@/i18n.config";

const dictionaries: any = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  ch: () => import("@/dictionaries/ch.json").then((module) => module.default),
  ar: () => import("@/dictionaries/ar.json").then((module) => module.default),
};

export const getDictionary = async (locale: any) =>
  dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]();
