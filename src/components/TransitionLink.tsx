import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export default function TransitionLink({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleTransition = async (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("main");
    target?.classList.add("my-transition-rtl");
    await sleep(400);
    router.push(href);
    target?.classList.remove("my-transition-rtl");
    await sleep(400);
  };

  return (
    <Link
      onClick={handleTransition}
      href={href}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
