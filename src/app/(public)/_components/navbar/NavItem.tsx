import TransitionLink from "@/components/TransitionLink";

type NavItemProps = {
  label: string;
  href: string;
};

export default function NavItem({ label, href }: NavItemProps) {
  return (
    <li className="text-neutral-100">
      <TransitionLink href={href} className="flex items-center gap-1">
        <p>{label}</p>
      </TransitionLink>
    </li>
  );
}
