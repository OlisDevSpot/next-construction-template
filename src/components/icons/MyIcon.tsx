import { motion } from "motion/react";

export type ConIconProps = {
  size?: number;
  className?: string;
  children?: React.ReactNode;
};

export default function MyIcon({ size, className, children }: ConIconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      whileHover={{ scale: 1.03, rotate: 22.5, transition: { duration: 0.3 } }}
    >
      {children}
    </motion.svg>
  );
}
