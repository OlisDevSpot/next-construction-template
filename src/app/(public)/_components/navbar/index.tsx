"use client";

import { items } from "../../_data/navItems";
import NavItem from "./NavItem";
import Logo from "@/components/Logo";

import { useState } from "react";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import useScrollNavigation from "@/hooks/useScrollNavigation";
import TransitionLink from "@/components/TransitionLink";

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
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.6 } }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <TransitionLink href="/book">
            <Button variant="default">Get a Quote</Button>
          </TransitionLink>
        </motion.div>
      </div>
    </nav>
  );
}
