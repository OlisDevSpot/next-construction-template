export default function layout({ children }: { children: React.ReactNode }) {
  return (
    // set padding for navigation pages
    <div className="pt-16 h-full">
      {/* set height for navigation pages minus nav bar */}
      <div className="h-[calc(100vh-64px)]">{children}</div>
    </div>
  );
}
