import { COOKIE_NAMES } from "@/constants/enum";
import { getCookie } from "@/Helpers/cookies";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const { value: locale = "en" } =
    (await getCookie(COOKIE_NAMES.NEXT_LOCALE)) || {};

  // if (!locale || !routing.locales.includes(locale as any)) {
  //   locale = routing.defaultLocale;
  // }

  const messages = {
    ...(await import(`../locales/common/${locale}.json`)).default,
  };

  return {
    locale,
    messages,
  };
});
