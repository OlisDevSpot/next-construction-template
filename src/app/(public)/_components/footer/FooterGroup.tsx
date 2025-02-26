import { cn } from "@/lib/utils";

interface FooterGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
}

export function FooterGroup({
  title,
  children,
  className,
  ...props
}: FooterGroupProps) {
  return (
    <div className={cn("flex flex-col leading-loose", className)} {...props}>
      <h3 className="text-neutral-200 font-bold text-lg">{title}</h3>
      {children}
    </div>
  );
}
