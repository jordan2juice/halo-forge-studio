import Image from "next/image";
import Hero from "./components/home/Hero";
import Footer from "./components/layout/Footer";
import ServicesPreview from "./components/home/ServicesPreview";
import AboutPreview from "./components/home/AboutPreview";
import TrustPreview from "./components/home/TrustPreview";
import WorkPreview from "./components/home/WorkPreview";
import FinalCta from "./components/home/FinalCta";
import Navbar from "./components/layout/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesPreview />
      <WorkPreview />
      <AboutPreview />
      <TrustPreview />
      <FinalCta />
      <Footer />
    </div>
  );
}
