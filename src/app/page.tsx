import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FacilityShowcase from "@/components/FacilityShowcase";
import About from "@/components/About";
import Membership from "@/components/Membership";
import WeeklySchedule from "@/components/WeeklySchedule";
import Activities from "@/components/Activities";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import LocationContact from "@/components/LocationContact";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#F2F2F2]">
      {/* Sleek, Non-Wrapping Sticky Navigation */}
      <Navbar />

      {/* Hero Section with Rich Visuals and Athletic Red Palette */}
      <Hero />

      {/* Facility Visual Tour (Added Imagery) */}
      <FacilityShowcase />

      {/* About Mega Gym with Multi-Image Collage */}
      <About />

      {/* Interactive Weekly Training Programme with Workout Photos */}
      <WeeklySchedule />

      {/* Membership Plans & Pricing (Highlighted Monthly Plan) */}
      <Membership />

      {/* Training Disciplines & Activities */}
      <Activities />

      {/* Why Join Mega Gym */}
      <WhyChooseUs />

      {/* Photo Gallery (9 High-Res Photos with Filters & Lightbox) */}
      <Gallery />

      {/* Location, Google Map & Direct Contact */}
      <LocationContact />

      {/* High-Impact Closing CTA */}
      <CtaSection />

      {/* Professional Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </main>
  );
}
