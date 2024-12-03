import { motion } from "motion/react";
import { Button } from "./ui/button";
import Link from "next/link";

type CtaButtonProps = {
  label: string;
  href: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export default function CtaButtons({
  label,
  href,
  secondaryLabel,
  secondaryHref,
}: CtaButtonProps) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 1, duration: 1 }}
      className="flex gap-4"
    >
      <Link href={href}>
        <Button>{label}</Button>
      </Link>
      <Link href={secondaryHref}>
        <Button variant="outline">{secondaryLabel}</Button>
      </Link>
    </motion.div>
  );
}
