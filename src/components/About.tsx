import { motion, useInView } from "framer-motion";
import { Dev } from "./icons/dev";
import React from "react";

export default function About() {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref!, { margin: "-300px" });
  const infos = [
    { title: "AGE", value: "24 years old" },
    { title: "LOCATION", value: "Morocco, Agadir" },
    {
      title: "EDUCATION",
      value: "Fullstack Web Developer — Ewa",
      link: "https://www.ewa.ma/",
    },
    { title: "EXPERIENCE", value: "2+ years professional experience" },
    {
      title: "CURRENT",
      value: "Freelance + Devotech",
      link: "https://devotech.co/",
    },
  ];
  return (
    <div
      ref={ref}
      className="relative  min-h-screen flex m-auto items-center justify-center text-white  max-w-7xl "
      id="BioGraphy"
    >
      <div className="flex justify-center flex-col items-center  border-1 border-gray-900 rounded-2xl p-32 max-w-7xl">
        <div className="px-4 text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-16"
          >
            <div className="relative flex flex-col items-center ]">
              {/* Dev Icon */}
              <Dev width={200} height={200} />

              <div className="absolute bottom-[-24.4rem] left-1/2 -translate-x-1/2 w-[0.5px] h-[27rem] bg-gradient-to-b from-primary to-[#ff0088] z-20" />
            </div>

            <h1 className="text-[4rem]  font-bold p-4 border-l-2 space-x-3.5 text-sans tracking-wider">
              BioGraphy
            </h1>
          </motion.div>
        </div>
        <div className="relative">
          <div className="flex flex-col gap-10 mr-[2.7rem] mt-6 ">
            {infos.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.4 + 0.4, duration: 0.6 }}
                className="relative flex flex-col mt-5"
              >
                <div className="relative flex items-center ml-[19.5px]">
                  <span className="absolute -left-[1px] top-[-15.4px] w-[16px] h-[16px] rounded-bl-full  z-10 border-b-1 border-primary" />
                  {/* <span className="absolute left-[0.1px] -top-[30px] w-[0.5px] h-[24px] bg-gradient-to-b from-primary to-[#ff0088] z-1" /> */}
                  <span className="ml-[14px] w-[9rem] h-[0.5px] bg-gradient-to-r from-primary to-[#ff0088]  rounded-r-full z-1" />
                </div>

                <div className="ml-[14rem] -mt-6">
                  <span className="text-[14px] text-primary uppercase tracking-wide font-semibold  ">
                    {item.title}
                  </span>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-md font-medium hover:underline mt-2"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-300 text-[18px] ">{item.value}</p>
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
