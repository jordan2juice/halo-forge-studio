// app/page.tsx

import Hero from "./components/home/Hero";
import Footer from "./components/layout/Footer";
import ServicesPreview from "./components/home/ServicesPreview";
import AboutPreview from "./components/home/AboutPreview";
import TrustPreview from "./components/home/TrustPreview";
import WorkPreview from "./components/home/WorkPreview";
import FinalCta from "./components/home/FinalCta";
import Navbar from "./components/layout/Navbar";
import PhilosophySection from "./components/home/WhoIServe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halo Forge Studio — Catholic Web Design, Branding & Software",
  description:
    "A one-person Catholic design and software studio. I build brands, websites, and custom web applications for parishes, ministries, schools, and Catholic-owned businesses across the U.S. — work that doesn't just perform, it witnesses.",
  keywords: [
    "Catholic web design",
    "Catholic branding",
    "Catholic website designer",
    "Catholic business website",
    "parish website design",
    "ministry website design",
    "Catholic custom software",
    "Catholic web developer",
  ],
  openGraph: {
    title: "Halo Forge Studio — Catholic Web Design, Branding & Software",
    description:
      "Brands, websites, and custom software built for Catholic organizations and business owners. Work rooted in Truth — designed to grow your mission and your revenue.",
    url: "https://haloforgestudio.com",
    siteName: "Halo Forge Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halo Forge Studio — Catholic Web Design, Branding & Software",
    description:
      "A Catholic design and software studio. Brands, websites, and web apps built to witness — for parishes, ministries, and Catholic-owned businesses.",
  },
};

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WorkPreview />
      <PhilosophySection />
      <ServicesPreview />
      <AboutPreview />
      <TrustPreview />
      <FinalCta />
      <Footer />
    </div>
  );
}
