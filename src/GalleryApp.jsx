import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { galleryPageContent, siteContent } from "./data/siteContent";
import GalleryPage from "./pages/GalleryPage";

function GalleryApp() {
  const galleryNavItems = [
    { label: "Home", href: "./index.html#top" },
    { label: "About", href: "./index.html#about" },
    { label: "Impact", href: "./index.html#impact" },
    { label: "Gallery", href: "./gallery.html" },
    { label: "Sponsors", href: "./index.html#support-needed" },
    { label: "Contact", href: "./index.html#contact" },
  ];

  return (
    <div className="relative overflow-x-hidden bg-white text-ink">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="ambient-shape left-[8%] top-24 h-72 w-72 bg-crimson-100/80" />
        <div className="ambient-shape right-[6%] top-[28rem] h-80 w-80 bg-[#f4ddd7]" />
        <div className="ambient-shape bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 bg-[#f7ebe7]" />
      </div>

      <Navbar action={{ label: "Partner With Us", href: "./index.html#contact" }} items={galleryNavItems} />
      <main>
        <GalleryPage content={galleryPageContent} />
      </main>
      <Footer
        content={siteContent.footer}
        navigation={[
          { label: "About", href: "./index.html#about" },
          { label: "Impact", href: "./index.html#impact" },
          { label: "Gallery", href: "./gallery.html" },
          { label: "Sponsors", href: "./index.html#support-needed" },
          { label: "Contact", href: "./index.html#contact" },
        ]}
      />
    </div>
  );
}

export default GalleryApp;
