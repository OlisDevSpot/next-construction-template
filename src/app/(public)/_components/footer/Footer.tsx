import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 flex p-8">
      <div>
        <Logo />
        <p className="text-neutral-300 font-bold tracking-tighter">
          Your home is our canvas
        </p>
      </div>
    </footer>
  );
}
