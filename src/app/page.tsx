import ShowroomWrapper from "@/components/ShowroomWrapper";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import Collections from "@/components/Collections";
import Signature from "@/components/Signature";
import Craftsmanship from "@/components/Craftsmanship";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal">
      {/* 3D Showroom Scroll Experience */}
      <ShowroomWrapper />

      {/* Static Website Content */}
      <Navbar />
      <Hero />
      <BrandStory />
      <Collections />
      <Signature />
      <Craftsmanship />
      <Features />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
