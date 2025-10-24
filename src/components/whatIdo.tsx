import { motion, useInView } from "framer-motion";
import { Dev } from "./icons/dev";
import React from "react";
import { Skills } from "./icons/skills";

export default function WhatIdo() {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref!, { margin: "-300px" });

  return (
    <div
      ref={ref}
      className="w-screen h-screen flex items-center justify-center "
    >
      <div className="max-w-6xl px-8 m-auto">
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          ref={ref}
        >
          <div className="flex items-center mb-12 gap-16">
            <Skills width={160} height={160} />
            <h2 className="text-6xl font-bold  text-white border-l-2 text-sans p-6 tracking-wider ">
              What I can do{" "}
            </h2>
          </div>
          <div className="text-[18px] text-gray-300 space-y-4 ml-6 grid grid-cols-2 gap-4">
            <p>
              Collaborate & Solve Problems I work closely with teams or clients
              to turn ideas into functional, maintainable software—on time and
              with purpose.
            </p>
            <p>
              {" "}
              Build Full Web Applications From dynamic frontends with React to
              scalable backends with Node.js, I develop complete,
              production-ready web apps.
            </p>
            <p>
              Design Responsive & Intuitive UIs I create clean, accessible, and
              mobile-first user interfaces that deliver seamless experiences
              across devices. <br />
            </p>
            <p>
              {" "}
              Architect & Manage Databases Whether it’s structured data in
              PostgreSQL/MySQL or flexible schemas in MongoDB, I design
              efficient data models and APIs.
            </p>
            <p>
              Deploy & Maintain Applications I handle deploymen t (using
              platforms like Vercel, Render, or AWS), CI/CD setup, and
              performance optimization for reliability and speed.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
