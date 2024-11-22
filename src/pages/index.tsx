import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import InfiniteScroll from "@/components/InfiniteScroll";
import About from "@/components/About";
import FAQ from "@/components/FAQ";


export default function Home() {
  return (
    <div className="">
      <Header />
      <InfiniteScroll />
      <About />
      <FAQ />
    </div>
  );
}
