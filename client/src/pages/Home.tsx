import { useEffect } from "react";
import ThreeJSBackground from "@/components/3d/ThreeJSBackground";
import CustomCursor from "@/components/common/CustomCursor";
import HeroSection from "@/components/sections/HeroSection";
import ProductShowcase from "@/components/sections/ProductShowcase";
import TechnologySection from "@/components/sections/TechnologySection";
import ProductCatalog from "@/components/sections/ProductCatalog";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function Home() {
  useEffect(() => {
    // Scroll to top button functionality
    const scrollToTopBtn = document.getElementById("scroll-to-top");
    
    const handleScroll = () => {
      if (scrollToTopBtn) {
        if (window.pageYOffset > 300) {
          scrollToTopBtn.style.opacity = "1";
        } else {
          scrollToTopBtn.style.opacity = "0";
        }
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScroll);
    scrollToTopBtn?.addEventListener("click", scrollToTop);

    // Intersection Observer for fade-in animations
    const animateElements = document.querySelectorAll(".animate-fadeInUp");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    animateElements.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-800");
      observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      scrollToTopBtn?.removeEventListener("click", scrollToTop);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <ThreeJSBackground />
      
      <div className="relative z-10">
        <HeroSection />
        <ProductShowcase />
        <TechnologySection />
        {/* <ProductCatalog /> */}
        {/* <NewsletterSection /> */}
        
        {/* Scroll to Top Button */}
        <button
          id="scroll-to-top"
          className="fixed bottom-8 right-8 p-4 glass-effect rounded-full hover:border-orange-500 transition-all duration-300 hover-scale z-40 opacity-0"
          style={{ transition: "opacity 0.3s ease" }}
        >
          <i className="fas fa-arrow-up text-orange-500"></i>
        </button>
      </div>
    </>
  );
}
