"use client";

import React from "react";
import Link from "next/link";
import { Instagram } from "../icons/instagram";
import { Linkden } from "../icons/linkden";
import { Discord } from "../icons/discord";
import { Github } from "../icons/github";

const Sidebar = () => {
  const SocialMedia = [
    {
      name: "Github",
      link: "https://github.com/Belahbib",
      icon: Github,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/achraf-belahbib/",
      icon: Linkden,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/8ird_blh/",
      icon: Instagram,
    },
    {
      name: "Discord",
      link: "https://www.instagram.com/achrafbelahbib/",
      icon: Discord,
    },
  ];

  return (
    <aside className="fixed left-8 bottom-0 flex flex-col items-center gap-6 z-50">
      <div className="flex flex-col items-center md:gap-5 gap-3 md:mb-6 mb-2">
        {SocialMedia.map((social) => {
          const Icon = social.icon;
          return (
            <Link
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <Icon />
            </Link>
          );
        })}
      </div>
      <div className="w-[1px] md:h-24 h-8 bg-gray-400/50" />
    </aside>
  );
};

export default Sidebar;
