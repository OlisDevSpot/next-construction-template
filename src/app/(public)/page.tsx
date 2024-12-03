import Hero from "./_components/landing/Hero";
import SectionOne from "./_components/landing/SectionOne";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <SectionOne />
    </main>
  );
}
