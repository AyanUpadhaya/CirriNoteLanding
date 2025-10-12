import Navbar from "@/components/shared/Navbar";
import Hero from "./Hero";

export default function Header() {
  return (
    <div className="relative">
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
}
