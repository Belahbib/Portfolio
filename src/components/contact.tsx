"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-200px" });
  const t = useTranslations();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        "service_y6jwyng",
        "template_rtc1l05",
        form,
        "WkniAmxoZsXY1Tkcp"
      );

      toast.success("Message sent successfully!");

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again! ❌");
    } finally {
      setSending(false);
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
        <h2 className="xl:text-6xl text-3xl  font-bold mb-4 text-foreground tracking-wider text-sans">
          {t("GetInTouch")}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg">
          {t("HaveProjectOrCollaboration")}
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 bg-white/5 dark:bg-white/10 border borderBox rounded-2xl p-8 backdrop-blur-xl"
        >
          <input
            type="text"
            name="name"
            placeholder={t("YourName")}
            value={form.name}
            onChange={handleChange}
            required
            className="bg-transparent border borderBox text-paragraph placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-paragraph/40 transition-all"
          />

          <input
            type="email"
            name="email"
            placeholder={t("YourEmail")}
            value={form.email}
            onChange={handleChange}
            required
            className="bg-transparent border borderBox text-paragraph placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-paragraph/40 transition-all"
          />

          <textarea
            name="message"
            placeholder={t("YourMessage")}
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="bg-transparent border borderBox text-paragraph placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-paragraph/40 transition-all"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            disabled={sending}
            className="bg-primary hover:bg-purple-700 text-white font-semibold rounded-lg py-3 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? t("Sending") : t("SendMessage")}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
