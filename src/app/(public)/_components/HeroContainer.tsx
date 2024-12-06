export default function HeroContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-[calc(100vh-64px)]">{children}</div>;
}
