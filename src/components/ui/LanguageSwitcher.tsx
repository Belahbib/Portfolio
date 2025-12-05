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

export default function LanguageSwitcher() {
  const translate = useTranslations();
  const lang = useLocale();

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
    await setCookie(COOKIE_NAMES.NEXT_LOCALE, lang);
    window.location.reload();
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
            onClick={() => changeLanguage("fr")}
          >
            <FranceFlag />
            {translate("Français")}
          </button>
          <hr className="w-full text-foreground" />
        </DropdownMenuItem>

        <DropdownMenuItem>
          <button
            className="flex items-center gap-2 border-0 p-1 font-semibold outline-none text-foreground"
            onClick={() => changeLanguage("en")}
          >
            <UkFlag />
            {translate("Anglais")}{" "}
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
