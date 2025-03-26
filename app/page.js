import Image from "next/image";
import { Banner, Nav, Hero, Footer, Modal, BottomNav, Trending, Categories, Testimonial } from "@/components";
export default function Home() {
  return (
    <main className="bg-white">
      <Banner />
      
      <Nav />
      
      <Hero /> 
      <Categories />
      <Trending />
      <Testimonial />
      <Footer />
      <BottomNav />

    </main>
  );
}
