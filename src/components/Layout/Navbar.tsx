"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { useTranslations } from "next-intl";
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const t = useTranslations();

  return (
    <div className="flex z-40 items-center justify-between py-4 border-b borderBox w-full">
      <div className="flex items-center gap-32 justify-between xl:px-48 px-4 w-full">
        {/* === LOGO === */}
        <div className="flex justify-between gap-40 ">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/belahbib.png"
                  width={32}
                  height={32}
                  alt="logo"
                  className="rounded-full"
                />
                <h1 className="xl:text-[24px] font-bold text-primary ">
                  Belahbib.dev
                </h1>
              </div>
            </Link>
          </div>

          {/* === NAV LINKS === */}
          <div className="hidden md:flex items-center space-x-10 text-foreground]">
            <a href="/" className="font-semibold hover:text-primary transition">
              {t("Home")}
            </a>
            <button
              onClick={() => {
                const section = document.getElementById("BioGraphy");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-semibold hover:text-primary transition"
            >
              {t("About")}
            </button>
            <button
              onClick={() => {
                const section = document.getElementById("project");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-semibold hover:text-primary transition"
            >
              {t("Projects")}
            </button>
            <button
              onClick={() => {
                const section = document.getElementById("contact");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-semibold hover:text-primary transition"
            >
              {t("Contact")}
            </button>
          </div>
        </div>

        {/* === Language Swither === */}

        {/* === DARK / LIGHT TOGGLE === */}

        <div className="md:flex gap-3.5 md:right-2  fixed right-16">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full border borderBox hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-black " />
            )}
          </button>
          <div className=" hidden md:block">
            {" "}
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
