import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import InfiniteScroll from "@/components/InfiniteScroll";
import About2 from "@/components/About2";
import FAQ from "@/components/FAQ";
import Done from "@/components/Done";
import About from "@/components/About";
import RecommendationBoxes from "@/components/RecommendationBoxes";
import Join from "@/components/Join";
import FeaturesWithIcons from "@/components/FeaturesWithIcons";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      {/* <InfiniteScroll /> */}
      <Features />
      <Testimonials />
      <FAQ />
    </div>
  );
}
