"use client";

import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRef } from "react";
import CtaButtons from "@/components/CtaButtons";

export default function SectionOne() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-24">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold">The MODCON Finish</h2>
        <p className="text-neutral-400">
          Your home deserves more. Give it what it needs.
        </p>
      </div>
      <Carousel
        className="w-full max-w-[90%] h-full max-h-[500px] rounded-lg border-0"
        opts={{ loop: true, align: "center" }}
        plugins={[plugin.current]}
      >
        <CarouselContent className="h-[500px] rounded-lg border-transparent border-0">
          {[
            "/images/modern-home-1.webp",
            "/images/modern-home-2.webp",
            "/images/modern-home-3.webp",
            "/images/modern-home-4.webp",
            "/images/modern-home-5.webp",
            "/images/modern-home-6.webp",
            "/images/modern-home-7.webp",
          ].map((image, index) => (
            <CarouselItem
              key={image}
              className="h-full rounded-lg border-transparent border-0"
            >
              <div className="h-full rounded-lg border-0">
                <Card className="h-full rounded-lg border-transparent border-0">
                  <CardContent className="p-0 relative h-full rounded-lg border-transparent border-0">
                    <Image
                      src={`/images/modern-home-${index + 1}.webp`}
                      alt="modern home"
                      fill
                      className="object-cover rounded-lg h-[400px] w-auto border-0"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <div className="w-full h-full bg-red-500 z-10" />
      </Carousel>
      <CtaButtons
        label="Get My Estimate"
        href="/book"
        secondaryLabel="See More Designs"
        secondaryHref="/projects"
      />
    </div>
  );
}
