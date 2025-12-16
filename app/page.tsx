import Hero from "./components/home/Hero";
import Footer from "./components/layout/Footer";
import ServicesPreview from "./components/home/ServicesPreview";
import AboutPreview from "./components/home/AboutPreview";
import TrustPreview from "./components/home/TrustPreview";
import WorkPreview from "./components/home/WorkPreview";
import FinalCta from "./components/home/FinalCta";
import Navbar from "./components/layout/Navbar";
import { Metadata } from "next";
import { AudienceStrip } from "./components/home/WhoIServe";

export const metadata: Metadata = {
  title:
    "Halo Forge Studio – Catholic branding & websites for retailers, ministries & professional services",
  description:
    "Halo Forge Studio designs and builds Catholic brands and websites for parish missions, Catholic retailers, and professional services so the right people can find you and take the next step.",
};

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
