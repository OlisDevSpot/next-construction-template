"use client";

import { ChevronDown } from "lucide-react";
import ServiceImage from "./_components/ServiceImage";
import HeroContainer from "../../_components/HeroContainer";
import { useRouter } from "next/navigation";
import RulerPencil from "@/components/icons/RulerPencil";

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
      <div className="h-screen p-24" id="services">
        <RulerPencil />
      </div>
    </>
  );
}
