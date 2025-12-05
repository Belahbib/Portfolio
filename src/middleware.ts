import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

import { routing } from "./i18n/routing";
import { COOKIE_NAMES } from "./constants/enum";
import { getCookie, setCookie } from "./Helpers/cookies";

const handleI18nRouting = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  const cookieLocale =
    (await getCookie(COOKIE_NAMES.NEXT_LOCALE)) || routing.defaultLocale;

  // Get the locale from the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameLocale = routing.locales.find((locale) =>
    pathname.startsWith(`/${locale}`)
  );

  // console.log({ cookieLocale, pathnameLocale });

  const response = handleI18nRouting(request);

  if (pathnameLocale && pathnameLocale !== cookieLocale) {
    await setCookie(COOKIE_NAMES.NEXT_LOCALE, cookieLocale);
  }

  return;
}

export const config = {
  matcher: ["/", "/(fr|en)/:path*"],
};
