"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-200px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "sending"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "service_y6jwyng",
        "template_rtc1l05",
        form,
        "WkniAmxoZsXY1Tkcp"
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="min-h-screen w-full flex items-center justify-center px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full text-center"
      >
        {/* Heading */}
        <h2 className="text-5xl font-bold text-white mb-4">Get in Touch</h2>
        <p className="text-gray-400 mb-10 text-lg">
          Have a project or collaboration in mind? Let’s talk!
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="bg-transparent border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-white/40 transition-all"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="bg-transparent border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-white/40 transition-all"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="bg-transparent border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-white/40 transition-all"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            disabled={status === "sending"}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg py-3 transition-colors duration-300"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Status messages */}
          {status === "success" && (
            <p className="text-green-400 mt-3">✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 mt-3">
              ❌ Something went wrong. Try again.
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
