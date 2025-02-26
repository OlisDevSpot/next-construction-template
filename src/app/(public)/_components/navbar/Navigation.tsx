import { MENU_ITEMS } from "../../_data/navItems";
import NavItem from "./NavItem";
import { motion } from "motion/react";

interface NavigationProps {
  onClick: () => void;
}

export default function Navigation({ onClick }: NavigationProps) {
  return (
    <motion.ul
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.1,
      }}
      className="flex flex-col md:flex-row items-center w-auto gap-4"
    >
      {MENU_ITEMS.map((item) => (
        <div className="overflow-hidden w-fit" key={item.label}>
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
