import Link from "next/link";

interface FooterLinkProps {
  label: string;
  href: string;
}

export default function FooterLink({ label, href }: FooterLinkProps) {
  return (
    <li className="text-neutral-400 hover:text-neutral-200 transition">
      <Link href={href}>{label}</Link>
    </li>
  );
}
