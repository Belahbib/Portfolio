"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full  flex items-center justify-between py-4 border-b border-gray-700">
      <div className="flex items-center gap-32 justify-between px-48 ">
        <div className="flex items-center space-x-8 ">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                src="/images/belahbib.png"
                width={32}
                height={32}
                alt="logo"
                className="rounded-full"
              />
              <h1 className="text-[24px] font-bold text-primary ">
                Belahbib.dev
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-16">
          <a href="/" className="text-white font-semibold hover:text-primary">
            Home
          </a>
          <button
            onClick={() => {
              const section = document.getElementById("BioGraphy");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-white font-semibold hover:text-primary"
          >
            About
          </button>
          <button
            onClick={() => {
              const section = document.querySelector("section");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-white font-semibold hover:text-primary"
          >
            Projects
          </button>
          <button
            className="text-white font-semibold hover:text-primary"
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
