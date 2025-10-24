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

// Tech icon map
const techIcons: Record<string, ReactElement> = {
  react: <ReactIcon className="" width={28} height={28} />,
  "next.js": <NextJsIcon width={28} height={28} />,
  tailwindcss: <TailwindcssIcon width={28} height={28} />,
  typescript: (
    <TypescriptIcon width={28} height={28} className="rounded-full" />
  ),
  "node.js": <NodeJsIcon width={28} height={28} />,
  postgresql: <PostgresIcon width={28} height={28} />,
  javascript: <JavascriptIcon width={28} height={28} />,
  "nest.js": <NestJsIcon width={28} height={28} />,
};

interface TechTagProps {
  name: string;
  size?: number;
}

export function TechTag({ name, size = 28 }: TechTagProps) {
  const key = name.toLowerCase();
  const icon = techIcons[key];

  if (!icon) return null;

  return (
    <motion.div
      whileHover={{ scale: 1.7, y: -3 }}
      transition={{ type: "spring", stiffness: 250, damping: 15 }}
      data-tooltip-id={`tooltip-${key}`}
      data-tooltip-content={name}
      className="flex items-center justify-center border border-white/10 bg-white/5 p-1 rounded-full hover:bg-white/10 transition-all duration-300 cursor-default"
    >
      <div style={{ fontSize: size }}>{icon}</div>
      <Tooltip
        id={`tooltip-${key}`}
        className="!bg-black !text-white !px-3 !py-1 !rounded-md !text-sm capitalize"
      />
    </motion.div>
  );
}
