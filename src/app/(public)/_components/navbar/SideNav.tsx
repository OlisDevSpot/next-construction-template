import { motion } from "motion/react";
import { X } from "lucide-react";
import Navigation from "./Navigation";

interface SideNavProps {
  onClick: () => void;
}

export function SideNav({ onClick }: SideNavProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
        }}
        onClick={onClick}
        className="fixed min-h-screen inset-0 w-screen bg-black/70 z-[9997]"
      />
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{
          duration: 0.3,
        }}
        className="p-4 pt-5 h-screen backdrop-blur-md fixed top-0 right-0 bottom-0 w-[50%] bg-black z-[9999] border-l border-neutral-700 flex flex-col"
      >
        <motion.span
          initial={{ opacity: 0, rotate: 90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{
            delay: 0.3,
          }}
          className="w-fit flex justify-end origin-center self-end"
        >
          <X size={24} onClick={onClick} className="cursor-pointer" />
        </motion.span>
        <Navigation onClick={onClick} className="text-2xl text-left" />
      </motion.div>
    </>
  );
}
