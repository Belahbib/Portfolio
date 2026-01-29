import { COOKIE_NAMES } from "@/constants/enum";
import { getCookie } from "@/Helpers/cookies";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  // Ensure cookie is a string
  let locale = await getCookie(COOKIE_NAMES.NEXT_LOCALE);
  if (!locale || typeof locale !== "string") {
    locale = "en";
  }

  // Import messages safely
  let messages = {};
  try {
    messages = (await import(`../locales/common/${locale}.json`)).default;
  } catch (err) {
    console.warn(`Locale "${locale}" not found, falling back to "en".`);
    messages = (await import(`../locales/common/en.json`)).default;
    locale = "en";
  }

  return {
    locale,
    messages,
  };
});
