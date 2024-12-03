import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

type NavItemProps = {
  label: string;
  href: string;
  isHovered: boolean;
};

export default function NavItem({ label, href, isHovered }: NavItemProps) {
  return (
    <li className="flex items-center gap-1 text-neutral-100">
      <Link href={href}>{label}</Link>
      <ChevronDown
        className={cn("transition", isHovered ? "rotate-180" : "")}
      />
    </li>
  );
}
