import Header from "@/components/Header";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <Features />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
