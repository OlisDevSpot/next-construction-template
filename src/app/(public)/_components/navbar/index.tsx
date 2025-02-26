"use client";

import { useState } from "react";

import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

import useScrollNavigation from "@/hooks/useScrollNavigation";
import TransitionLink from "@/components/TransitionLink";
import Navigation from "./Navigation";

import { Menu } from "lucide-react";
import { SideNav } from "./SideNav";

export default function Navbar() {
  const scrollPosition = useScrollNavigation(10);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={cn(
        "w-full h-16 flex items-center fixed top-0 transition duration-300 z-[9998]",
        scrollPosition > 10 ? "backdrop-blur-md bg-black/50" : ""
      )}
    >
      <div className="max-w-[1280px] mx-auto px-4 w-full flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-4">
          <Navigation onClick={() => setIsOpen(false)} />
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
        <div className="md:hidden">
          <Menu
            size={24}
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer"
          />
          {isOpen && <SideNav onClick={() => setIsOpen(!isOpen)} />}
        </div>
      </div>
    </nav>
  );
}
