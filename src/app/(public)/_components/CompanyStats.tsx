"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import { COMPANY_INFO } from "@/data/companyInfo";

export const CompanyStats = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      variants={{
        initial: {
          opacity: 0,
          y: -50,
        },
        animate: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        staggerChildren: 0.35,
      }}
      initial="initial"
      animate={controls}
      ref={sectionRef}
      className="w-full grid gap-4"
    >
      {COMPANY_INFO.stats.map((stat) => (
        <motion.div
          variants={{
            initial: {
              opacity: 0,
              x: -50,
            },
            animate: {
              opacity: 1,
              x: 0,
            },
          }}
          transition={{
            duration: 0.3,
            type: "spring",
          }}
          key={stat.label}
          className="relative overflow-hidden flex gap-2 items-center justify-between border border-neutral-600 rounded-lg p-8 text-center"
        >
          <stat.icon
            size={120}
            className="absolute z-[-1] text-neutral-700 top-1/2 -translate-y-1/2 left-0 -translate-x-1/3"
          />
          <h3 className="text-5xl font-semibold ml-6">{stat.value}</h3>
          <span className="text-neutral-300 text-lg">{stat.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};
