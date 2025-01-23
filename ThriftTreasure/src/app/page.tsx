'use client';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Note from "@/components/Note";
import Tagline from "@/components/Tagline";
import HeroSection from "@/components/HeroSection";
import FeaturedPost from "@/components/FeaturedPost";
import BrandComponent from "@/components/Brand";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Tagline />
      <HeroSection />
      <BrandComponent />
      <Note />
      <FeaturedPost />
      <Footer />
    </div>
  );
}
