import Hero from "./components/Hero";
import CoreHighlights from "./components/CoreHighlights";
import FuturePlans from "./components/FuturePlans";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
    <Hero />
    <CoreHighlights />
    <FuturePlans />
      <ContactSection />
    </>
  );
}
