"use client";

import React from "react";
import Link from "next/link";
import { Instagram } from "../icons/instagram";
import { Twitter } from "../icons/twitter";
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
    // {
    //   name: "Twitter",
    //   link: "https://twitter.com/achrafbelahbib",
    //   icon: Twitter,
    // },
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
    <aside className="fixed left-8 bottom-0 flex flex-col items-center gap-6 z-30">
      <div className="flex flex-col items-center gap-5 mb-6">
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

      {/* Vertical line */}
      <div className="w-[1px] h-24 bg-gray-400/50" />
    </aside>
  );
};

export default Sidebar;
