import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Header />
    </div>
  );
}
