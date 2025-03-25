import Image from "next/image";
import { Banner, Nav, Hero, Footer, BottomNav, Trending } from "@/components";
export default function Home() {
  return (
    <main className="bg-white">
      <Banner />
      
      <Nav />
      
      <Hero /> 
      <Trending />
      <Footer />
      <BottomNav />
    
    </main>
  );
}
