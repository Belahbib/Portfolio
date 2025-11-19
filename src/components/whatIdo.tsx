import { motion, useInView } from "framer-motion";
import React, { useEffect, useState } from "react";
import { SkillsIcon } from "./icons/skills";
import { useTailwindBreakpoints } from "./hooks/breakPoint";

export default function WhatIdo() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { sm, md, lg, xl, xxl } = useTailwindBreakpoints();
  const margin = sm ? "-100px" : md ? "-300px" : lg ? "-300px" : "-300px";
  const isInView = useInView(ref!, { margin: margin });

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1280;

  return (
    <div
      ref={ref}
      className="w-screen xl:h-screen flex items-center justify-center py-16 px-4 "
    >
      <div className="max-w-6xl xl:px-8  m-auto">
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          ref={ref}
        >
          <div className="flex items-center  justify-center xl:justify-start  mb-12 xl:gap-16 gap-2">
            <SkillsIcon
              width={isDesktop ? 160 : 100}
              height={isDesktop ? 160 : 100}
            />
            <h2 className="xl:text-6xl text-2xl font-bold  text-foreground border-l-2 text-sans p-6 tracking-wider ">
              What I can do{" "}
            </h2>
          </div>
          <div className="xl:text-[18px] text-gray-300 space-y-2 xl:ml-6 grid  md:grid-cols-2 gap-x-4 ">
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: -2,
                backgroundColor: "#ffffff",
                color: "#000000",
                borderColor: "#000000",
                fontWeight: 600,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="border-2 xl:p-8 p-4 bg-black/80 rounded-2xl text-white "
            >
              <p>
                Collaborate & Solve Problems — I work closely with teams or
                clients to turn ideas into functional, maintainable software—on
                time and with purpose.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: 2,
                backgroundColor: "#ffffff",
                color: "#000000",
                borderColor: "#000000",
                fontWeight: 600,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="border-2 xl:p-8 p-4 bg-black/80 rounded-2xl"
            >
              <p>
                {" "}
                Build Full Web Applications From dynamic frontends with React to
                scalable backends with Node.js, I develop complete,
                production-ready web apps.
              </p>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: -2,
                backgroundColor: "#ffffff",
                color: "#000000",
                borderColor: "#000000",
                fontWeight: 600,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="border-2 xl:p-8 p-4 bg-black/80 rounded-2xl"
            >
              <p>
                Design Responsive & Intuitive UIs I create clean, accessible,
                and mobile-first user interfaces that deliver seamless
                experiences across devices. <br />
              </p>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: 2,
                backgroundColor: "#ffffff",
                color: "#000000",
                borderColor: "#000000",
                fontWeight: 600,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="border-2 xl:p-8 p-4 bg-black/80 rounded-2xl"
            >
              {" "}
              <p>
                {" "}
                Architect & Manage Databases Whether it’s structured data in
                PostgreSQL/MySQL or flexible schemas in MongoDB, I design
                efficient data models and APIs.
              </p>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: -2,
                backgroundColor: "#ffffff",
                color: "#000000",
                borderColor: "#000000",
                fontWeight: 600,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="border-2 xl:p-6 p-4 bg-black/80 rounded-2xl"
            >
              <p>
                Deploy & Maintain Applications I handle deploymen t (using
                platforms like Vercel, Render, or AWS), CI/CD setup, and
                performance optimization for reliability and speed.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
