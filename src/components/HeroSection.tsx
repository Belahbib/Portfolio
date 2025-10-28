import React from "react";
import Avatar from "react-avatar";
import { motion } from "framer-motion";
import { EmojiIcon } from "./icons/emoji";

export default function HeroSection() {
  const emoji = <EmojiIcon width={28} height={28} />;
  const lines = [
    // LINE 1: “Hey, I’m Achraf 😄”
    <div key="line1" className="flex items-center gap-2">
      <span>Hey, I’m</span>
      <span className="bg-gradient-to-b from-primary to-purple-900 bg-clip-text text-transparent flex items-center gap-2">
        Achraf
        <EmojiIcon width={52} height={52} />
      </span>
    </div>,

    // LINE 2: “Full Stack Developer”
    <div key="line2">
      <span className="bg-gradient-to-b from-primary to-purple-900 bg-clip-text text-transparent">
        Full Stack
      </span>{" "}
      Developer
    </div>,
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.5)_0%,rgba(0,0,0,0.9)_70%)]" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-screen text-white px-6">
        <div className="flex items-center justify-center gap-10">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="-mt-[150px] "
          >
            <Avatar
              src="images/logo.png"
              name="Achraf Belahbib"
              round={true}
              size="200"
              textSizeRatio={2}
              className="border border-gray-300 rounded-full"
            />
          </motion.div>

          {/* Text section */}
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-[4rem] font-bold leading-tight text-left tracking-wider text-sans space-y-2">
              {lines.map((line, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.8, duration: 0.6 }}
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="mt-6 text-white max-w-3xl text-[20px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: lines.length * 0.5 + 0.5 }}
            >
              I breathe life into ideas by building web experiences that are
              smooth, smart, and human-centered. For me, great development isn’t
              just about making things work—it’s about making them feel right.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: lines.length * 0.5 + 1 }}
              className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-purple-600 transition-colors duration-300"
              onClick={() => {
                const section = document.querySelector("section");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View My Work
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
