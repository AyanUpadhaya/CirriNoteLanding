import Features from "./Features";
import Hero from "./Hero";
import Introduction from "./Introduction";
import Navbar from "@/components/shared/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>      
      <Introduction></Introduction>
      <Features></Features>
    </div>
  );
}
