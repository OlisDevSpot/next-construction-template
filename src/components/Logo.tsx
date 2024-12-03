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
    </motion.div>
  );
}
