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
import Link from "next/link";
import { LightVenez } from "./icons/lightVenez";
import { ArrowRight } from "./icons/arrowRight";
import { TechTag } from "./Helpers/techTags";
import { ZylopaIcon } from "./icons/zylopay";
import { MbfIcon } from "./icons/mbf";
import Skills from "./skils";
import { useTailwindBreakpoints } from "./hooks/breakPoint";

export default function HorizontalScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projetsRef = useRef<HTMLDivElement>(null);
  const projetsRef2 = useRef<HTMLDivElement>(null);
  const projetsRef3 = useRef<HTMLDivElement>(null);
  const {sm , md, lg, xl, xxl} = useTailwindBreakpoints();
  const margin = sm ? "-100px" : md ? "-300px" : lg ? "-300px" : "-300px";
  const projetsInView = useInView(projetsRef, { margin: margin });
  const projetsInView2 = useInView(projetsRef2, { margin: margin });
  const projetsInView3 = useInView(projetsRef3, { margin: margin });
  

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1280;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useMotionValue("0%");
  const scrollX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  // then conditionally use it
  const effectiveX = isDesktop ? scrollX : undefined;

  useEffect(() => {
    if (!isDesktop || !effectiveX) return;

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
  }, [effectiveX, x, isDesktop]);

  const techs = [
    "react",
    "next.js",
    "tailwindcss",
    "typescript",
    "node.js",
    "nest.js",
    "postgresql",
  ];

  const mbfTech = ["react", "next.js", "typescript"];

  return (
    <section
      id="horizontal-section"
      ref={sectionRef}
      className="relative h-full text-white"
    >
      {/* Sticky horizontal scroll container */}
      <div className="xl:sticky xl:top-0 xl:h-screen h-full overflow-hidden bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.5)_0%,rgba(0,0,0,0.9)_70%)]">
        <motion.div
          style={{ x: isDesktop ? x : "0%" }}
          className="flex flex-col xl:flex-row h-full xl:w-[400vw]"
        >
          {/* ==== PROJECT 1 - VENEZ ==== */}
          <div
            ref={projetsRef}
            className="w-screen h-full flex flex-col items-center justify-center px-6 sm:px-10 xl:px-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={projetsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-7xl w-full"
            >
              <div className="relative p-6 sm:p-12 md:p-16 xl:p-0 xl:px-16 xl:pt-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-3xl">
                <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
                <div className="flex flex-col xl:grid xl:grid-cols-2 gap-10 xl:gap-16 items-center">
                  {/* LEFT: TEXT */}
                  <div className=" xl:order-none">
                    <LightVenez width={180} height={90} />
                    <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
                      {techs.map((tech) => (
                        <TechTag key={tech} name={tech} size={26} />
                      ))}
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-white mt-4">
                      Venez Website | Admin Dashboard
                    </h2>

                    <p className="text-gray-300 text-sm sm:text-base mt-4">
                      Venez.ma is a dynamic web platform designed to connect
                      users with the best local experiences across Morocco—from
                      hidden-gem cafés and trending restaurants to cultural
                      events and weekend getaways.
                    </p>
                    <p className="text-gray-300 text-sm sm:text-base mt-3">
                      The Admin Dashboard allows administrators to efficiently
                      manage and oversee all aspects of the platform, including
                      content, users, analytics, and more.
                    </p>

                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        y: -6,
                        boxShadow: "0px 6px 20px rgba(255, 0, 136, 0.3)",
                      }}
                      className="mt-6 px-6 py-3 bg-white text-black font-bold rounded-md hover:bg-white/30 transition-colors duration-300"
                    >
                      <Link
                        href="https://venez.ma"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        Preview
                        <ArrowRight width={20} height={20} className="ml-2" />
                      </Link>
                    </motion.button>
                  </div>

                  {/* RIGHT: IMAGE */}
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -6,
                      boxShadow: "0px 6px 20px rgba(255, 0, 136, 0.3)",
                      transition: {
                        delay: 0.2,
                        duration: 0.4,
                      },
                      borderRadius: "0.75rem",
                    }}
                    className="overflow-hidden shadow-lg  w-full"
                  >
                    <Image
                      src="/images/Venez-Web.png"
                      alt="Venez Preview"
                      width={300}
                      height={300}
                      className="xl:rounded-t-[0.75rem] rounded-xl  xl:rounded-none  object-cover w-full "
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ==== PROJECT 2 - ZyloPay ==== */}
          <div
            ref={projetsRef2}
            className="w-screen h-full flex flex-col items-center justify-center px-6 sm:px-10 xl:px-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={projetsInView2 ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-7xl w-full"
            >
              <div className="relative p-0 sm:p-12 md:p-16 xl:px-32 xl:pt-24 pb-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-3xl overflow-visible">
                <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
                <div className="flex flex-col xl:grid xl:grid-cols-2 gap-10 xl:gap-16 items-center">
                  {/* TEXT */}
                  <div className="xl:order-none px-6">
                    <ZylopaIcon width={180} height={90} />
                    <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
                      {techs.map((tech) => (
                        <TechTag key={tech} name={tech} size={26} />
                      ))}
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-white mt-4">
                      ZyloPay | Admin Dashboard
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base mt-4">
                      ZyloPay is a SaaS platform that transforms the restaurant
                      experience with smart QR menus—scan, order, and pay
                      seamlessly without waiting for staff.
                    </p>
                    <p className="text-gray-300 text-sm sm:text-base mt-3">
                      The admin dashboard lets restaurants create QR codes,
                      manage menus, and organize items effortlessly.
                    </p>

                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        y: -6,
                        boxShadow: "0px 6px 20px rgba(255, 0, 136, 0.3)",
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

                  {isDesktop ? (
                    <motion.div
                      className="relative w-full h-full flex justify-center items-center overflow-visible rounded-xl"
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                    >
                      {[
                        "/images/zylopay1.png",
                        "/images/zylopay2.png",
                        "/images/zylopay3.png",
                      ].map((src, i) => (
                        <motion.div
                          key={i}
                          className="absolute rounded-xl overflow-hidden shadow-xl border border-white/10 bg-black/10 backdrop-blur-sm"
                          style={{
                            width: "80%",
                            height: "80vh",
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
                              // y: i === 0 ? -40 : i === 1 ? 0 : 40,
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
                            alt={`zyloPay Preview ${i + 1}`}
                            fill
                            className="object-cover rounded-2xl"
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        y: -6,
                        boxShadow: "0px 6px 20px rgba(255, 0, 136, 0.3)",
                      }}
                      className="overflow-hidden shadow-lg w-full"
                    >
                      <Image
                        src="/images/zylopay1.png"
                        alt="MaBonneFee Preview"
                        width={600}
                        height={350}
                        className="rounded-xl object-cover w-full"
                      />
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ==== PROJECT 3 - MBF ==== */}

          <div
            ref={projetsRef3}
            className="w-screen h-full flex flex-col items-center justify-center px-6 sm:px-10 xl:px-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={projetsInView3 ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-7xl w-full"
            >
              <div className="relative p-6 sm:p-12 md:p-16 xl:p-0 xl:px-16 xl:pt-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-3xl">
                <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
                <div className="flex flex-col xl:grid xl:grid-cols-2 gap-10 xl:gap-16 items-center">
                  {/* LEFT: TEXT */}
                  <div className=" xl:order-none">
                    <div className="flex mb-6 gap-4 items-center">
                      <MbfIcon width={70} height={70} />
                      <h1 className="text-3xl sm:text-4xl font-bold">
                        Ma Bonne Fée
                      </h1>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
                      {mbfTech.map((tech) => (
                        <TechTag key={tech} name={tech} size={26} />
                      ))}
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-white mt-4">
                      Ma Bonne Fée
                    </h2>

                    <p className="text-gray-300 text-sm sm:text-base mt-4">
                      MaBonneFee is a SaaS platform that helps users manage,
                      track, and optimize all their recurring subscriptions in
                      one place with smart alerts and insights.
                    </p>

                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        y: -6,
                        boxShadow: "0px 6px 20px rgba(255, 0, 136, 0.3)",
                      }}
                      className="mt-6 px-6 py-3 bg-white text-black font-bold rounded-md hover:bg-white/30 transition-colors duration-300"
                    >
                      <Link
                        href="https://mabonnefee.com/fr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        Preview
                        <ArrowRight width={20} height={20} className="ml-2" />
                      </Link>
                    </motion.button>
                  </div>

                  {/* RIGHT: IMAGE */}
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -6,
                      boxShadow: "0px 6px 20px rgba(255, 0, 136, 0.3)",
                      transition: {
                        delay: 0.2,
                        duration: 0.4,
                      },
                      borderRadius: "0.75rem",
                    }}
                    className="overflow-hidden shadow-lg  w-full"
                  >
                    <Image
                      src="/images/mbf.png"
                      alt="Venez Preview"
                      width={300}
                      height={300}
                      className="xl:rounded-t-[0.75rem] rounded-xl  xl:rounded-none  object-cover w-full "
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* <div
            ref={projetsRef3}
            className="w-screen h-full flex flex-col items-center justify-center px-6 sm:px-10 xl:px-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={projetsInView3 ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-7xl w-full"
            >
              <div className="relative p-6 sm:p-12 md:p-16 xl:px-32 xl:pt-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-3xl">
                <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
                <div className="flex flex-col xl:grid xl:grid-cols-2 gap-10 xl:gap-16 items-center">
                  {/* TEXT 
                  <div className="xl:order-none">
                    <div className="flex mb-6 gap-4 items-center">
                      <MbfIcon width={90} height={90} />
                      <h1 className="text-3xl sm:text-4xl font-bold">
                        Ma Bonne Fée
                      </h1>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
                      {mbfTech.map((tech) => (
                        <TechTag key={tech} name={tech} size={26} />
                      ))}
                    </div>

                    <p className="text-gray-300 text-sm sm:text-base mt-4">
                      MaBonneFee is a SaaS platform that helps users manage,
                      track, and optimize all their recurring subscriptions in
                      one place with smart alerts and insights.
                    </p>

                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        y: -6,
                        boxShadow: "0px 6px 20px rgba(255, 0, 136, 0.3)",
                      }}
                      className="mt-6 px-6 py-3 bg-white text-black font-bold rounded-md hover:bg-white/30 transition-colors duration-300"
                    >
                      <Link
                        href="https://mabonnefee.com/fr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        Preview
                        <ArrowRight width={20} height={20} className="ml-2" />
                      </Link>
                    </motion.button>
                  </div>

                  {/* IMAGE
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -6,
                      boxShadow: "0px 6px 20px rgba(255, 0, 136, 0.3)",
                    }}
                    className="overflow-hidden shadow-lg w-full"
                  >
                    <Image
                      src="/images/mbf.png"
                      alt="MaBonneFee Preview"
                      width={600}
                      height={350}
                      className="rounded-xl object-cover w-full"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div> */}
        </motion.div>
      </div>

      <div className="xl:h-screen h-0  flex items-center justify-center">
        <h2 className="text-4xl font-bold text-gray-400"></h2>
      </div>

      {/* SKILLS SECTION */}
      <div className="flex items-center justify-center py-20">
        <Skills />
      </div>
    </section>
  );
}
