import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

export default function Logo() {
  return (
    <motion.div
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
