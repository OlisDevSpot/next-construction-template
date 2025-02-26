import { X } from "lucide-react";
import Navigation from "./Navigation";

interface SideNavProps {
  onClick: () => void;
}

export function SideNav({ onClick }: SideNavProps) {
  return (
    <>
      <div
        onClick={onClick}
        className="fixed min-h-screen inset-0 w-screen bg-black/70 z-[9997]"
      />
      <div className="p-4 pt-5 h-screen backdrop-blur-md fixed top-0 right-0 bottom-0 w-[50%] bg-black z-[9999] border-l border-neutral-700">
        <span className="w-full flex justify-end">
          <X size={24} onClick={onClick} className="cursor-pointer" />
        </span>
        <Navigation onClick={onClick} />
      </div>
    </>
  );
}
