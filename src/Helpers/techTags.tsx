"use client";

import { ExpressJsIcon } from "@/components/icons/expressJs";
import { FramerMotionIcon } from "@/components/icons/framerMotion";
import { GitIcon } from "@/components/icons/git";
import { GitLabIcon } from "@/components/icons/gitlab";
import { I18nextIcon } from "@/components/icons/i18next";
import { JavascriptIcon } from "@/components/icons/javascript";
import { MongoDbIcon } from "@/components/icons/mongo";
import { NestJsIcon } from "@/components/icons/nestJs";
import { NextJsIcon } from "@/components/icons/nextJs";
import { NodeJsIcon } from "@/components/icons/nodeJs";
import { PlaywrightIcon } from "@/components/icons/playwright";
import { PostgresIcon } from "@/components/icons/postgres";
import { ReactIcon } from "@/components/icons/react";
import { ReactQueryIcon } from "@/components/icons/reactQuery";
import { ReduxIcon } from "@/components/icons/redux";
import { TailwindcssIcon } from "@/components/icons/tailwind";
import { TypescriptIcon } from "@/components/icons/typescript";
import { motion } from "framer-motion";
import { ReactElement } from "react";

import { Tooltip } from "react-tooltip";

interface TechTagProps {
  name: string;
  size?: number;
}

export function TechTag({ name, size = 28 }: TechTagProps) {
  const techIcons: Record<string, ReactElement> = {
    react: <ReactIcon className="" width={size} height={size} />,
    "next.js": <NextJsIcon width={size} height={size} />,
    tailwindcss: <TailwindcssIcon width={size} height={size} />,
    typescript: (
      <TypescriptIcon width={size} height={size} className="rounded-full" />
    ),
    "node.js": <NodeJsIcon width={size} height={size} />,
    postgresql: <PostgresIcon width={size} height={size} />,
    javascript: (
      <JavascriptIcon width={size} height={size} className="rounded-full" />
    ),
    "nest.js": <NestJsIcon width={size} height={size} />,
    i18next: <I18nextIcon width={size} height={size} />,
    git: <GitIcon width={size} height={size} />,
    gitlab: <GitLabIcon width={size} height={size} />,
    playwright: <PlaywrightIcon width={size} height={size} />,
    "express.js": (
      <ExpressJsIcon width={size} height={size} className="rounded-full" />
    ),
    "framer-motion": <FramerMotionIcon width={size} height={size} />,
    redux: <ReduxIcon width={size} height={size} />,
    "react-query": <ReactQueryIcon width={size} height={size} />,
    "mongo.db": <MongoDbIcon width={size} height={size} />,
  };
  const key = name.toLowerCase();
  const icon = techIcons[key];

  if (!icon) return null;

  return (
    <motion.div
      whileHover={{ scale: 1.7, y: -3 }}
      transition={{ type: "spring", stiffness: 550, damping: 45 }}
      data-tooltip-id={`tooltip-${key}`}
      data-tooltip-content={name}
      className="flex items-center justify-center border borderBox bg-white/5 p-1 rounded-full hover:bg-white/10 transition-all duration-300 cursor-default"
    >
      <div style={{ fontSize: size }}>{icon}</div>
      <Tooltip
        id={`tooltip-${key}`}
        className="bg-black! text-white!  rounded-md!  capitalize"
      />
    </motion.div>
  );
}
