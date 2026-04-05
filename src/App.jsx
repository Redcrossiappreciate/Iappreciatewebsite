import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import GallerySection from "./sections/GallerySection";
import HeroSection from "./sections/HeroSection";
import ImpactSection from "./sections/ImpactSection";
import SupportSection from "./sections/SupportSection";
import WhyItMattersSection from "./sections/WhyItMattersSection";
import { siteContent } from "./data/siteContent";

function App() {
  return (
    <div className="relative overflow-x-hidden bg-white text-ink">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="ambient-shape left-[8%] top-24 h-72 w-72 bg-crimson-100/80" />
        <div className="ambient-shape right-[6%] top-[28rem] h-80 w-80 bg-[#f4ddd7]" />
        <div className="ambient-shape bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 bg-[#f7ebe7]" />
      </div>

      <Navbar action={siteContent.navigationAction} items={siteContent.navigation} />

      <main>
        <HeroSection content={siteContent.hero} />
        <AboutSection content={siteContent.about} />
        <WhyItMattersSection content={siteContent.whyItMatters} />
        <ImpactSection content={siteContent.impact} />
        <GallerySection content={siteContent.gallery} />
        <SupportSection content={siteContent.supportNeeded} />
        <ContactSection content={siteContent.contact} />
      </main>

      <Footer content={siteContent.footer} navigation={siteContent.navigation} />
    </div>
  );
}

export default App;
