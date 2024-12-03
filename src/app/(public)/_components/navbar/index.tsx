"use client";

import Logo from "@/components/Logo";
import NavItem from "./NavItem";
import { items } from "../../_data/navItems";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import useScrollNavigation from "@/hooks/useScrollNavigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(-1);
  const scrollPosition = useScrollNavigation(10);

  const handleMouseEnter = (i: number) => {
    setIsHovered(i);
  };

  const handleMouseExit = () => {
    setIsHovered(-1);
  };

  return (
    <nav
      className={cn(
        "w-full h-16 flex items-center fixed top-0 transition duration-300 z-50",
        scrollPosition > 10 ? "backdrop-blur-md bg-black/50" : ""
      )}
    >
      <div className="max-w-[1280px] mx-auto px-4 w-full flex items-center justify-between">
        <Logo />
        <ul className="flex items-center w-auto gap-4">
          {items.map((item, i) => (
            <Button
              key={item.label}
              variant="ghost"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseExit()}
            >
              <NavItem {...item} isHovered={isHovered === i ? true : false} />
            </Button>
          ))}
        </ul>
        <Button variant="default">Get a Quote</Button>
      </div>
    </nav>
  );
}
