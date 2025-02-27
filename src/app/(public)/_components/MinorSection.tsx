import { cn } from "@/lib/utils";

interface MinorSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const MinorSection = ({ children, className }: MinorSectionProps) => {
  return <div className={cn("h-auto px-4 py-16", className)}>{children}</div>;
};
