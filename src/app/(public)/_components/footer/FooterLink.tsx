import Link from "next/link";
import { motion } from "motion/react";

interface FooterLinkProps {
  label: string;
  href: string;
}

export default function FooterLink({ label, href }: FooterLinkProps) {
  return (
    <motion.li
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="text-neutral-400 hover:text-neutral-200 transition"
    >
      <Link href={href} className="leading-loose">
        {label}
      </Link>
    </motion.li>
  );
}
