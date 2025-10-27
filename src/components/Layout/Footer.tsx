"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  return (
    <footer
      ref={ref}
      className="w-full border-t border-white/10 bg-white/5 backdrop-blur-xl p-10 mt-20 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center text-gray-400 text-sm"
      >
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">Achraf Belahbib</span>. All
          rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
