import { cn } from "@/lib/utils";
import { MENU_ITEMS } from "../../_data/navItems";
import NavItem from "./NavItem";
import { motion } from "motion/react";

interface NavigationProps {
  onClick: () => void;
  className?: string;
}

export default function Navigation({ onClick, className }: NavigationProps) {
  return (
    <motion.ul
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.1,
      }}
      className={cn(
        "flex flex-col md:flex-row items-center w-auto gap-4",
        className
      )}
    >
      {MENU_ITEMS.map((item) => (
        <div className="overflow-hidden w-full" key={item.label}>
          <motion.button
            variants={{
              initial: {
                opacity: 0,
                x: 35,
              },
              animate: {
                opacity: 1,
                x: 0,
              },
            }}
            className={"px-3 py-1"}
            onClick={onClick}
          >
            <NavItem {...item} />
          </motion.button>
        </div>
      ))}
    </motion.ul>
  );
}
