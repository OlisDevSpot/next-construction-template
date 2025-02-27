import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  heading: string | React.ReactNode;
  subtitle?: string;
}

export function MainSection({
  heading,
  subtitle,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <div
      className={cn(
        "h-[calc(100vh-64px)] flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-16 md:px-8 max-w-[1280px] mx-auto",
        className
      )}
      {...props}
    >
      <div className="flex flex-col w-full md:w-fit lg:w-1/2 text-center md:text-left gap-2">
        {subtitle && <p className="text-neutral-400 text-sm">{subtitle}</p>}
        <h2 className="text-5xl md:text-6xl font-bold">{heading}</h2>
      </div>
      {children}
    </div>
  );
}
