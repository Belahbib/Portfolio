"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring } from "framer-motion";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  const bubbleX = useMotionValue(0);
  const bubbleY = useMotionValue(0);
  const smoothBubbleX = useSpring(bubbleX, { stiffness: 150, damping: 25 });
  const smoothBubbleY = useSpring(bubbleY, { stiffness: 150, damping: 25 });

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xPercent = (e.clientX / window.innerWidth) * 100;
      const yPercent = (e.clientY / window.innerHeight) * 100;
      mouseX.set(xPercent);
      mouseY.set(yPercent);
      bubbleX.set(e.clientX);
      bubbleY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, bubbleX, bubbleY]);

  return (
    <>
      <motion.div
        style={{
          scaleX: smoothProgress,
          originX: 0,
          height: 5,
          backgroundColor: "#ff0088",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
        }}
      />
      <div className="relative min-h-screen bg-black">
        <motion.div
          className="fixed w-20 h-20 bg-[#ff0088] rounded-full mix-blend-screen pointer-events-none opacity-30 z-40"
          style={{
            x: smoothBubbleX,
            y: smoothBubbleY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
        <motion.div
          className="fixed top-0 left-0 w-full z-50  backdrop-blur-md"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Navbar />
        </motion.div>
        <Sidebar />
        <main ref={contentRef}>{children}</main>
      </div>
    </>
  );
}
