"use client";

import CtaButtons from "@/components/CtaButtons";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="flex h-screen flex-col items-center justify-between bg-[url('/images/hero-bg.jpg')] bg-cover bg-no-repeat bg-center"
    >
      <div className="w-full h-full bg-gradient-to-l via-black/70 from-black/0 to-black/90">
        <div className="flex h-full items-center justify-center max-w-[1280px] mx-auto p-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.2 },
            }}
            className="flex-1 flex flex-col gap-10"
          >
            <div className="flex flex-col text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-neutral-100 leading-[1.3]">
                Experience Modern Construction
              </h1>
              <p className="text-neutral-300 text-lg leading-relaxed">
                Luxury awaits you at every corner
              </p>
            </div>
            <CtaButtons
              label="Get My Estimate"
              href="/book"
              secondaryLabel="Read Our Blog"
              secondaryHref="/blog"
            />
          </motion.div>
          <div className="flex-1 hidden md:block"></div>
        </div>
      </div>
    </motion.div>
  );
}
