"use client";

import { motion } from "framer-motion";
import { ReactElement } from "react";

import { Tooltip } from "react-tooltip";
import { ReactIcon } from "../icons/react";
import { NextJsIcon } from "../icons/nextJs";
import { TailwindcssIcon } from "../icons/tailwind";
import { TypescriptIcon } from "../icons/typescript";
import { NodeJsIcon } from "../icons/nodeJs";
import { PostgresIcon } from "../icons/postgres";
import { JavascriptIcon } from "../icons/javascript";
import { NestJsIcon } from "../icons/nestJs";
import { ExpressJsIcon } from "../icons/expressJs";
import { GitIcon } from "../icons/git";
import { GitLabIcon } from "../icons/gitlab";
import { I18nextIcon } from "../icons/i18next";
import { PlaywrightIcon } from "../icons/playwright";
import { FramerMotionIcon } from "../icons/framerMotion";
import { ReduxIcon } from "../icons/redux";
import { ReactQueryIcon } from "../icons/reactQuery";
import { MongoDbIcon } from "../icons/mongo";

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
