"use client";

import { ChevronDown } from "lucide-react";
import ServiceImage from "./_components/ServiceImage";
import HeroContainer from "../../_components/HeroContainer";
import { useRouter } from "next/navigation";
import { services } from "@/data/services";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
  const router = useRouter();
  const moveToSection = (sectionId: string) => {
    router.push(`#${sectionId}`);
  };
  return (
    <>
      <HeroContainer>
        <div className="relative flex flex-col w-full h-full">
          <div className=" columns-4 gap-2 overflow-hidden">
            {Array.from({ length: 20 }).map((_, index) => (
              <ServiceImage
                key={index}
                src={`/images/modern-home-${(index % 7) + 1}.webp`}
              />
            ))}
          </div>
          <div className="w-full h-full absolute bg-[linear-gradient(to_right,rgba(0,0,0,1)0%,rgba(0,0,0,0.5)50%,rgba(0,0,0,1)100%)] z-10 flex flex-col items-center justify-center">
            <h1 className="leading-loose">A World Of Possibilities Awaits</h1>
            <div
              onClick={() => moveToSection("services")}
              className="flex gap-1 items-center justify-center px-4 py-2 border border-neutral-400 hover:bg-neutral-50/20 cursor-pointer rounded-full transition backdrop-blur-sm"
            >
              <p>Explore our services</p>
              <span>
                <ChevronDown size={24} />
              </span>
            </div>
          </div>
        </div>
      </HeroContainer>
      <div className="min-h-screen p-24" id="services">
        <div className="flex flex-wrap gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.label}
              className={cn(
                "flex gap-4 rounded-lg p-4 border border-neutral-600 relative min-h-[250px] overflow-hidden",
                i % 3 === 0 ? "w-1/4" : "flex-grow w-2/5"
              )}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <service.icon
                size={56}
                className="absolute top-0 left-0 place-content-center fill-orange-500/20 h-[75%] w-1/2"
              />
              <div className="flex flex-col gap-2 items-center w-full">
                <h3 className="">{service.label}</h3>
                <p className="text-muted-foreground flex-grow">
                  {service.description}
                </p>
                <Button className="w-full z-10">Learn More</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
