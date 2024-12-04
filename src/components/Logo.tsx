import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

export default function Logo() {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0, x: "-100px" }}
      animate={{ scale: 1, opacity: 1, x: 0 }}
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 120,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center"
    >
      <Link href="/">
        <Image src="/images/logo.svg" alt="logo" width={150} height={100} />
      </Link>
      <motion.div
        className="ml-4 w-4 h-4"
        animate={{
          backgroundColor: Array.from({ length: 6 }).map(
            (_, index) => `hsl(120, 20%, ${(index + 1) * 10}%)`
          ),
          borderRadius: ["0%", "25%", "50%", "50%", "25%", "0%"],
          boxShadow: [
            "0 0 2px 5px hsl(240, 20%, 50%)",
            "0 0 8px 10px hsl(120, 20%, 80%)",
          ],
        }}
        transition={{
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      ></motion.div>
    </motion.div>
  );
}
