import Features from "./Features";
import Header from "./Header";
import Hero from "./Hero";
import Introduction from "./Introduction";
import Navbar from "@/components/shared/Navbar";
export default function Home() {
  return (
    <div>
      <Header></Header>
      <Introduction></Introduction>
      <Features></Features>
    </div>
  );
}
