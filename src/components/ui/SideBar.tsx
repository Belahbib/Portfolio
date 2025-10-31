"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { ToggleMenu } from "../icons/toggleMenu";
import { Cross } from "../icons/cross";
import Link from "next/link";
import Image from "next/image";
import { HomeIcon } from "../icons/home";
import { AboutIcon } from "../icons/about";
import { ProjectIcon } from "../icons/project";
import { ContactIcon } from "../icons/contact";

export default function SidebarVariants() {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState<string>("home"); // ✅ track active section
  const toggleRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (toggleRef.current) {
      const rect = toggleRef.current.getBoundingClientRect();
      setCoords({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
  }, [isOpen]);

  const links = [
    { label: "Home", id: "home", icon: HomeIcon },
    { label: "About", id: "BioGraphy", icon: AboutIcon },
    { label: "Projects", id: "horizontal-section", icon: ProjectIcon },
    { label: "Contact", id: "contact", icon: ContactIcon },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4, // section visible by 40%
      }
    );

    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => {
      links.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div className="md:hidden z-50 overflow-visible fixed">
      {/* === Toggle Button === */}
      <motion.button
        ref={toggleRef}
        onClick={() => setIsOpen(!isOpen)}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-2 right-2 z-50 bg-white p-2 rounded-full transition-transform hover:scale-105"
      >
        <motion.div
          key={isOpen ? "cross" : "menu"}
          initial={{ rotate: isOpen ? -90 : 90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: isOpen ? 90 : -90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <Cross className="w-6 h-6" />
          ) : (
            <ToggleMenu className="w-6 h-6" />
          )}
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-40 blur-2xl backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Expanding Background */}
            <motion.div
              key="bg"
              initial={{
                clipPath: `circle(30px at ${coords.x}px ${coords.y}px)`,
              }}
              animate={{
                clipPath: `circle(150vmax at ${coords.x}px ${coords.y}px)`,
              }}
              exit={{
                clipPath: `circle(30px at ${coords.x}px ${coords.y}px)`,
              }}
              transition={{
                type: "spring",
                stiffness: 25,
                damping: 10,
              }}
              className="fixed top-1 left-0 right-0 bg-white h-[60%] py-4 rounded-2xl z-40"
            />

            {/* Navigation Menu */}
            <motion.nav
              key="menu"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="fixed top-0 right-0 left-0 z-40 flex flex-col items-start justify-start space-y-4 text-black text-lg font-semibold py-5"
            >
              <Link href="/">
                <div className="flex items-center gap-2 mb-8 px-8">
                  <Image
                    src="/images/belahbib.png"
                    width={32}
                    height={32}
                    alt="logo"
                    className="rounded-full"
                  />
                  <h1 className="xl:text-[24px] font-bold text-primary">
                    Belahbib.dev
                  </h1>
                </div>
              </Link>

              {links.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`transition-all text-center py-1 px-8 w-full flex gap-4 items-center rounded-xl ${
                    active === link.id ? "bg-gray-200" : "hover:bg-gray-100"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="my-auto border-2 border-gray-200 rounded-full p-1 w-fit h-fit">
                    <link.icon />
                  </span>
                  <span className="border p-2 border-gray-200 rounded-xl my-auto w-[6rem]">
                    {link.label}
                  </span>
                </motion.button>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
