import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import InfiniteScroll from "@/components/InfiniteScroll";
import About from "@/components/About";


export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Header />
      <InfiniteScroll />
      <About />
    </div>
  );
}
