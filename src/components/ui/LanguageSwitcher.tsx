"use client";

import { COOKIE_NAMES } from "@/constants/enum";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useLocale, useTranslations } from "next-intl";

import { setCookie } from "@/Helpers/cookies";
import FranceFlag from "../icons/franceFlag";
import UkFlag from "../icons/UkFlag";
import { usePathname, useRouter } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const translate = useTranslations();
  const lang = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const locale = {
    fr: {
      label: translate("Français"),
      icon: <FranceFlag />,
    },
    en: {
      label: translate("Anglais"),
      icon: <UkFlag />,
    },
  }[lang as string];

  const changeLanguage = async (lang: string) => {
    router.replace(pathname, { locale: lang });
    await setCookie(COOKIE_NAMES.NEXT_LOCALE, lang);
    // window.location.reload();
  };

  const switchLocale = async (newLocale: string) => {
    if (newLocale === lang) return;

    // 1. Update cookie
    await setCookie(COOKIE_NAMES.NEXT_LOCALE, newLocale);

    // 2. Refresh the page to re-render with new locale
    router.refresh();
  };

  // trigger piple

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex cursor-pointer items-center gap-2 border-0 outline-none"
        >
          {locale?.icon}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="z-50 mt-1 rounded-lg border bg-background"
      >
        <DropdownMenuItem>
          <button
            className="flex w-full items-center gap-2 border-0 p-1 font-semibold outline-none text-foreground"
            onClick={() => switchLocale("fr")}
          >
            <FranceFlag />
            {translate("Français")}
          </button>
          <hr className="w-full text-foreground" />
        </DropdownMenuItem>

        <DropdownMenuItem>
          <button
            className="flex items-center gap-2 border-0 p-1 font-semibold outline-none text-foreground"
            onClick={() => switchLocale("en")}
          >
            <UkFlag />
            {translate("Anglais")}{" "}
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
