import { motion } from "motion/react";
import { Button } from "./ui/button";
import TransitionLink from "./TransitionLink";

type CtaButtonProps = {
  label: string;
  href: string;
  secondaryLabel?: string;
  secondaryHref?: string;
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
      className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start"
    >
      {secondaryHref && secondaryLabel && (
        <TransitionLink href={secondaryHref}>
          <Button variant="outline" size="lg" className="text-lg">
            {secondaryLabel}
          </Button>
        </TransitionLink>
      )}
      <TransitionLink href={href}>
        <Button variant="cta" size="lg" className="text-lg">
          {label}
        </Button>
      </TransitionLink>
    </motion.div>
  );
}
