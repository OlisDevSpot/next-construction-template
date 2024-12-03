import Footer from "./_components/footer/Footer";
import Navbar from "./_components/navbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full h-auto">
        <Navbar />
        <main className="w-full min-w-screen">{children}</main>
      </div>
      <Footer />
    </>
  );
}
