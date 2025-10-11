import Footer from "@/components/shared/Footer";
import MarqueedNav from "@/components/shared/MarqueedNav";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <MarqueedNav></MarqueedNav>
      <main className="bg-dark">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
}
