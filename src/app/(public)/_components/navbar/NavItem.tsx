import Link from "next/link";

type NavItemProps = {
  label: string;
  href: string;
};

export default function NavItem({ label, href }: NavItemProps) {
  return (
    <li>
      <Link href={href}>{label}</Link>
    </li>
  );
}
