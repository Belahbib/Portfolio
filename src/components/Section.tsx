"use client";

import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { LightVenez } from "./icons/lightVenez";
import Link from "next/link";
import { ArrowRight } from "./icons/arrowRight";
import { TechTag } from "./Helpers/techTags";
import { ZylopaIcon } from "./icons/zylopay";

export default function HorizontalScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projetsRef = useRef<HTMLDivElement>(null);
  const projetsRef2 = useRef<HTMLDivElement>(null);
  const projetsInView2 = useInView(projetsRef2, { margin: "-300px" });
  const projetsInView = useInView(projetsRef, { margin: "-300px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useMotionValue("0%");

  const scrollX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  useEffect(() => {
    let isAnimating = false;

    const unsubscribe = scrollX.on("change", (v) => {
      if (!isAnimating) x.set(v);
    });

    const handleGoToProjects = async () => {
      isAnimating = true;
      await animate(x, "-100vw", {
        type: "spring",
        stiffness: 70,
        damping: 20,
      });
      isAnimating = false;
    };

    window.addEventListener("goToProjects", handleGoToProjects);
    return () => {
      window.removeEventListener("goToProjects", handleGoToProjects);
      unsubscribe();
    };
  }, [scrollX, x]);

  const techs = [
    "react",
    "next.js",
    "tailwindcss",
    "typescript",
    "node.js",
    "nest.js",
    "postgresql",
  ];

  return (
    <section
      id="horizontal-section"
      ref={sectionRef}
      className="relative h-full  text-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.5)_0%,rgba(0,0,0,0.9)_70%)]">
        <motion.div style={{ x }} className="flex h-full w-[400vw]">
          <div
            ref={projetsRef}
            className="w-screen h-full flex items-center justify-center  "
            id="projects-section"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={projetsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-7xl "
            >
              {" "}
              <div className="relative px-32 pt-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-3xl h-fit">
                <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
                <div className="grid grid-cols-2 gap-16 z-10 relative">
                  <div className="m-auto">
                    <LightVenez width={200} height={100} />
                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {techs.map((tech) => (
                        <TechTag key={tech} name={tech} size={28} />
                      ))}
                    </div>
                    <h2 className="text-xl font-bold text-white mt-4 relative">
                      Venez Website | Admin Dashboard
                    </h2>
                    <p className="text-gray-300 text-md mt-6">
                      Venez.ma is a dynamic web platform designed to connect
                      users with the best local experiences across Morocco—from
                      hidden-gem cafés and trending restaurants to cultural
                      events and weekend getaways.
                    </p>
                    <p className="text-gray-300 text-md mt-4">
                      Admin Dashboard is a comprehensive platform that allows
                      administrators to efficiently manage and oversee all
                      aspects of the Venez.ma website. It provides tools for
                      content management, user administration, analytics, and
                      system settings.
                    </p>
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        y: -8,
                        boxShadow: "0px 8px 24px rgba(255, 0, 136, 0.3)",
                      }}
                      className="mt-6 px-6 py-3  bg-white text-black  font-bold rounded-md hover:bg-white/30 transition-colors duration-300"
                    >
                      <Link
                        href="https://venez.ma"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        Perview
                        <ArrowRight
                          width={20}
                          height={20}
                          fill="black"
                          className="mt-1"
                        />
                      </Link>
                    </motion.button>
                  </div>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -8,
                      boxShadow: "0px 8px 24px rgba(255, 0, 136, 0.3)",
                      borderRadius: "0.75rem",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    className="overflow-hidden shadow-lg"
                  >
                    <Image
                      src="/images/Venez-Web.png"
                      alt="Code Sample"
                      width={500}
                      height={300}
                      className="rounded-t-xl"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* second section --> projects 2 
          /////////////////////////////
          */}

          <div
            ref={projetsRef2}
            className="w-screen h-full flex items-center justify-center  "
            id="projects-section"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={projetsInView2 ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-7xl "
            >
              {" "}
              <div className="relative px-32 pt-24 pb-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-3xl overflow-visible max-h-[650px]">
                {/* subtle overlay border */}
                <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />

                <div className="grid grid-cols-2 gap-16 z-10 relative items-center">
                  {/* === LEFT SIDE === */}
                  <div className="m-auto">
                    <ZylopaIcon width={200} height={100} />

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-3">
                      {techs.map((tech) => (
                        <TechTag key={tech} name={tech} size={28} />
                      ))}
                    </div>

                    <h2 className="text-xl font-bold text-white mt-4 relative">
                      ZyloPay | Admin Dashboard
                    </h2>

                    <p className="text-gray-300 text-md mt-6">
                      ZyloPay is a SaaS platform that transforms the restaurant
                      experience with a smart QR code menu system. Customers
                      simply scan a code, browse the digital menu, place their
                      order, and pay—all in one seamless flow—without needing an
                      app or waiting for staff.
                    </p>

                    <p className="text-gray-300 text-md mt-4">
                      Admin dashboard is the command center for modern
                      restaurants. Create and assign unique QR codes per table
                      in seconds, manage your entire menu with drag-and-drop
                      ease, and organize dishes into customizable categories
                      (starters, mains, drinks, etc.).
                    </p>

                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        y: -8,
                        boxShadow: "0px 8px 24px rgba(255, 0, 136, 0.3)",
                      }}
                      className="mt-6 px-6 py-3 bg-white text-black font-bold rounded-md hover:bg-white/30 transition-colors duration-300"
                    >
                      <Link
                        href="https://qr.zylopay.io/venue/5ca625c3-dce3-47e3-9c1f-781319efb904?table=5373cf6e-1c8f-4fd2-b81f-a78d365bbe7b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        Preview
                        <ArrowRight width={20} height={20} className="ml-2" />
                      </Link>
                    </motion.button>
                  </div>

                  {/* === RIGHT SIDE: STACKED IMAGES (hover spreads outside box) === */}
                  <motion.div
                    className="relative w-full h-full flex justify-center items-center overflow-visible rounded-xl"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    {[
                      "/images/ZyloPay1.png",
                      "/images/ZyloPay2.png",
                      "/images/ZyloPay3.png",
                    ].map((src, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-xl overflow-hidden shadow-xl border border-white/10 bg-black/10 backdrop-blur-sm"
                        style={{
                          width: "80%",
                          height: "160%",
                        }}
                        variants={{
                          rest: {
                            x: 0,
                            y: i * -6,
                            scale: 1 - i * 0.05,
                            zIndex: 10 - i,
                            rotate:
                              i === 0 ? -2 : i === 1 ? 0 : i === 2 ? 6 : 0,
                            boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
                          },
                          hover: {
                            x: i === 0 ? -370 : i === 1 ? 0 : 370,
                            // y: i === 0 ? -40 : i === 1 ? 0 : 40, // move up & down
                            scale: 1.05,
                            rotate: 0,
                            zIndex: 10 + i,
                            // boxShadow: "0px 10px 30px rgba(255, 0, 136, 0.5)",
                            transition: {
                              delay: i * 0.05,
                              type: "spring",
                              stiffness: 220,
                            },
                          },
                        }}
                      >
                        <Image
                          src={src}
                          alt={`ZyloPay Preview ${i + 1}`}
                          fill
                          className="object-cover rounded-2xl"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="w-screen h-full flex items-center justify-center  ">
            <h2 className="text-6xl font-bold">Panel 4</h2>
          </div>
        </motion.div>
      </div>

      {/* Extra vertical sections */}
      <div className="h-screen  flex items-center justify-center">
        <h2 className="text-4xl font-bold text-gray-400"></h2>
      </div>
      <div className="h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold text-gray-400">dada</h2>
      </div>
    </section>
  );
}
