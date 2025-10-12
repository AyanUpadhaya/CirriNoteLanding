import Footer from "@/components/shared/Footer";
import MarqueedNav from "@/components/shared/MarqueedNav";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Layout() {
  const [hideTopNav, setHideTopNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideTopNav(window.scrollY > 40); // hide top nav after 40px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* top nav */}
      <div
        className={`fixed top-0 left-0 w-full z-[10000] transition-transform duration-300 ${
          hideTopNav ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <MarqueedNav />
      </div>

      <main className="bg-dark">
        <Outlet context={{ hideTopNav }} />
      </main>

      <Footer />
    </>
  );
}
