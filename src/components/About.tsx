"use client";

import { motion, useInView } from "framer-motion";
import { Dev } from "./icons/dev";
import React from "react";
import { useTailwindBreakpoints } from "./hooks/breakPoint";
import { useLocale, useTranslations } from "next-intl";

export default function About() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { sm, md, lg, xl, xxl } = useTailwindBreakpoints();
  const margin = sm ? "-100px" : md ? "-300px" : lg ? "-300px" : "-300px";
  const isInView = useInView(ref!, { margin: margin });
  const locale = useLocale();
  const t = useTranslations();

  const size = sm ? 120 : md ? 150 : lg ? 180 : xl ? 200 : xxl ? 200 : 200;

  const infos = [
    { title: t("AGE"), value: t("25 years old") },
    { title: t("LOCATION"), value: t("Morocco, Agadir") },
    {
      title: t("EDUCATION"),
      value: t("Fullstack Web Developer — Ewa"),
      link: "https://www.ewa.ma/",
    },
    { title: t("EXPERIENCE"), value: t("2+ years professional experience") },
    {
      title: t("CURRENT"),
      value: t("Freelance + Devotech"),
      link: "https://devotech.co/",
    },
  ];

  return (
    <div
      ref={ref}
      className="relative xl:min-h-screen flex m-auto items-center justify-center text-foreground)"
      id="BioGraphy"
    >
      <div className="flex justify-center flex-col items-center xl:border border-gray-900 rounded-2xl xl:p-32 max-w-7xl">
        <div className="px-0 sm:px-4 ">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center xl:gap-16"
          >
            <div className="relative flex flex-col items-center">
              {/* Dev Icon */}
              <Dev width={size} height={size} />

              {/* Vertical gradient line */}
              <div className="absolute sm:bottom-[-23.3rem] md:bottom-[-23.4rem] lg:bottom-[-26rem] bottom-[-25.5rem] left-1/2 -translate-x-1/2 w-[1px] lg:h-[30rem] h-[27rem] bg-linear-to-b from-primary to-[#ff0088] z-20" />

              {/* 6 separator ticks */}
              {/* {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="absolute left-[calc(50%+0px)] w-[16px] h-[16px] rounded-bl-full border-b border-primary z-30"
                  style={{
                    top: `${14 + i * 4.9}rem`, // evenly spaced
                  }}
                />
              ))} */}
            </div>

            {/* <span className="relative top-[4rem] left-2 w-[16px] h-[16px] rounded-bl-full z-10 border-b-1 border-primary" /> */}

            <h1 className="xl:text-[4rem] lg:text-[3rem] md:text-3xl sm:text-2xl text-xl font-bold p-4 border-l-2 space-x-3.5 text-sans tracking-wider">
              {t("BioGraphy")}
            </h1>
          </motion.div>
        </div>

        <div className="relative ml-[calc(12%)]">
          <div className="flex flex-col gap-10 mt-6 w-full">
            {infos.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.4 + 0.4, duration: 0.6 }}
                className="relative flex flex-col mt-5 items-start"
              >
                {/* Connector Line + Text */}
                <div
                  className={`relative flex  items-center   xxl:ml-32 ${
                    locale === "en"
                      ? "ml-[94px] xl:ml-0  lg:ml-[1.3rem]  md:ml-12 "
                      : "ml-[108px] xl:ml-7 lg:ml-[3.1rem]  md:ml-20 "
                  }`}
                >
                  <span className="absolute xl:right-34 right-14 z-30 w-3 h-3 rounded-full bg-linear-to-b from-primary to-[#ff0088] " />
                  <span className="absolute right-full ml-16 xl:w-36 w-16 h-[0.5px] bg-linear-to-r from-primary to-[#ff0088] rounded-r-full z-10" />
                </div>

                {/* === INFO TEXT === */}
                <div className={`xl:pl-8 lg:pl-12 pl-28 -mt-6 w-full ${locale === "en" ? "md:pl-16" : "md:pl-22"}`}>
                  <span className="text-[18px] text-primary uppercase tracking-wide font-semibold">
                    {item.title}
                  </span>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block lg:text-[18px] text-[12px] font-medium hover:underline mt-2"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className=" lg:text-[18px] text-[12px] w-full">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
