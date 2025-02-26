import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <div
      className={cn(
        "h-[calc(100vh-64px)] flex items-center justify-center gap-8 p-8 max-w-[1280px] mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
