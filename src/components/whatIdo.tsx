import { motion, useInView } from "framer-motion";
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
          <div className="text-[18px] text-gray-300 space-y-2 ml-6 grid grid-cols-2 gap-x-4 ">
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
              className="border-2 p-8 bg-black/80 rounded-2xl text-white "
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
              className="border-2 p-8 bg-black/80 rounded-2xl"
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
              className="border-2 p-8 bg-black/80 rounded-2xl"
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
              className="border-2 p-8 bg-black/80 rounded-2xl"
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
              className="border-2 p-6 bg-black/80 rounded-2xl"
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
