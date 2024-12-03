"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="flex h-screen flex-col items-center justify-between bg-[url('/images/hero-bg.jpg')] bg-cover bg-no-repeat"
    >
      <div className="w-full h-full bg-gradient-to-l via-black/70 from-black/0 to-black/90">
        <div className="flex h-full items-center justify-center max-w-[1280px] mx-auto p-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.2 },
            }}
            className="flex-1 flex flex-col gap-8"
          >
            <div className="flex flex-col">
              <h1 className="text-6xl font-bold text-neutral-100">
                Experience Modern Construction.
              </h1>
              <p className="text-neutral-300">
                Luxury awaits you at every corner
              </p>
            </div>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex gap-4"
            >
              <Button>Get My Estimate</Button>
              <Button variant="outline">Read Our Blog</Button>
            </motion.div>
          </motion.div>
          <div className="flex-1"></div>
        </div>
      </div>
    </motion.div>
  );
}
