"use client";

import CtaButtons from "@/components/CtaButtons";
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

export function ProjectCarousel() {
  return (
    <>
      <CtaButtons label="See More Designs" href="/projects" />
      <div className="relative lg:w-1/2 h-full overflow-hidden rounded-lg">
        <CustomCarousel images={LANDING_IMAGES} />
      </div>
    </>
  );
}
