import Logo from "@/components/Logo";
import NavItem from "./NavItem";
import { items } from "../../_data/navbarItems";

export default function index() {
  return (
    <nav className="bg-neutral-100 w-full h-16 flex items-center">
      <div className="max-w-[1280px] mx-auto px-4 w-full flex items-center justify-between">
        <Logo />
        <ul className="flex items-center w-auto gap-8">
          {items.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
