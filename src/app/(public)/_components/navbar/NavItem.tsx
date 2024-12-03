import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { motion } from "motion/react";

type NavItemProps = {
  label: string;
  href: string;
  isHovered: boolean;
};

export default function NavItem({ label, href, isHovered }: NavItemProps) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="flex items-center gap-1 text-neutral-100"
    >
      <Link href={href}>{label}</Link>
      <ChevronDown
        className={cn("transition", isHovered ? "rotate-180" : "")}
      />
    </motion.li>
  );
}
