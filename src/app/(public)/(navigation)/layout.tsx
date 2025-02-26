export default function layout({ children }: { children: React.ReactNode }) {
  return (
    // set padding for navigation pages
    <div className="pt-16 h-auto max-w-[1280px] mx-auto">
      {/* set height for navigation pages minus nav bar */}
      <div className="h-auto min-h-[calc(100vh-64px)]">{children}</div>
    </div>
  );
}
