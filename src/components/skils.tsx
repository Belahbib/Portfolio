import { motion, useInView } from "framer-motion";
import React from "react";
import Image from "next/image";
import { TechTag } from "./Helpers/techTags";
import { useTailwindBreakpoints } from "./hooks/breakPoint";

export default function Skills() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { sm, md, lg, xl, xxl } = useTailwindBreakpoints();
  const margin = sm ? "-100px" : md ? "-300px" : lg ? "-300px" : "-300px";
  const isInView = useInView(ref!, { margin: margin });
  const Programming = ["javascript", "typescript", "node.js"];
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1280;

  const Frontend = [
    "react",
    "next.js",
    "tailwindcss",
    "redux",
    "react query",
    "framer-motion",
    "i18next",
  ];

  const Backend = ["nest.js", "express.js", "postgresql", "mongo.db"];

  const Other = ["git", "gitlab", "playwright"];

  const containerVariants = {
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} className="w-screen h-full flex z-40 xl:p-16  m-auto ">
      <div className="max-w-6xl xl:px-8 m-auto">
        <motion.div
          initial={{ x: -100, opacity: 0.4 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex items-center justify-center xl:justify-start mb-12 xl:gap-16">
            <Image
              width={isDesktop ? 160 : 100}
              height={isDesktop ? 160 : 100}
              alt="skills"
              src="/images/skill.png"
            />
            <h2 className="xl:text-6xl text-3xl font-bold  text-white border-l-2 text-sans xl:p-6 p-2 tracking-wider">
              Hard Skills{" "}
            </h2>
          </div>
          <div className="grid xl:grid-cols-2 gap-y-10 text-gray-300 ml-6">
            {/* === Programming === */}
            <div>
              <h1 className="text-[16px] text-gray-400 mb-6 font-semibold uppercase tracking-widest">
                Programming Languages
              </h1>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {Programming.map((tech) => (
                  <motion.div key={tech} variants={itemVariants}>
                    <TechTag name={tech} size={isDesktop ? 68 : 50} />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* === Frontend === */}
            <div>
              <h1 className="text-[16px] text-gray-400 mb-6 font-semibold uppercase tracking-widest">
                Frontend
              </h1>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {Frontend.map((tech) => (
                  <motion.div key={tech} variants={itemVariants}>
                    <TechTag name={tech} size={isDesktop ? 68 : 50} />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* === Backend === */}
            <div>
              <h1 className="text-[16px] text-gray-400 mb-6 font-semibold uppercase tracking-widest">
                Backend
              </h1>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {Backend.map((tech) => (
                  <motion.div key={tech} variants={itemVariants}>
                    <TechTag name={tech} size={isDesktop ? 68 : 50} />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* === Other Tools === */}
            <div>
              <h1 className="text-[16px] text-gray-400 mb-6 font-semibold uppercase tracking-widest">
                Tools & Other
              </h1>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {Other.map((tech) => (
                  <motion.div key={tech} variants={itemVariants}>
                    <TechTag name={tech} size={isDesktop ? 68 : 50} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
