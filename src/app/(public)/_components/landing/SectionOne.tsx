"use client";

import CtaButtons from "@/components/CtaButtons";
import { Section } from "./Section";
import { CustomCarousel } from "@/components/CustomCarousel";

const LANDING_IMAGES = [
  "/images/modern-home-1.webp",
  "/images/modern-home-2.webp",
  "/images/modern-home-3.webp",
  "/images/modern-home-4.webp",
  "/images/modern-home-5.webp",
  "/images/modern-home-6.webp",
  "/images/modern-home-7.webp",
];

export default function SectionOne() {
  return (
    <Section className="flex flex-col md:flex-row">
      <div className="flex flex-col w-full md:w-1/3 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold">
          The <span className="text-primary block">MODCON</span> Finish
        </h2>
        <p className="text-neutral-400">
          Your home deserves more. Give it what it needs.
        </p>
        <CtaButtons label="See More Designs" href="/projects" />
      </div>
      <div className="relative w-full md:w-2/3 flex-grow h-full overflow-hidden rounded-lg">
        <CustomCarousel images={LANDING_IMAGES} />
      </div>
    </Section>
  );
}
