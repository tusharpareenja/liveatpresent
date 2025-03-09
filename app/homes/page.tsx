"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import patans from "../../public/patans.png";
import bc from "../../public/bg-removed.png";

import { Navigation } from "./components/Navigation";
import EventCountdown from "./components/Countdown";
import EventWishlist from "./components/EventWhislist";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

const ExpandingOverlay: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {
    if (!containerRef.current || !circleRef.current || !imageRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300",
        scrub: true,
        onUpdate: (self) => {
          setExpanded(self.progress > 0.8);
        },
      },
    });

    tl.to(circleRef.current, { scale: 100, duration: 1.2, ease: "power2.inOut" }, 0);
    tl.to(imageRef.current, { xPercent: -50, duration: 1, ease: "power2.inOut" }, 0);

    gsap.to(contentRef.current, {
      opacity: expanded ? 1 : 0,
      duration: 0.5,
      ease: "power2.inOut",
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, [expanded]);

  return (
    <div ref={containerRef} className="h-[200vh] bg-gray-100">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={bc} alt="Background" fill style={{ objectFit: "cover" }} priority />
        </div>

        <div ref={imageRef} className="relative w-full h-full z-10">
          <Image src={patans} alt="Background" fill style={{ objectFit: "cover", opacity: 0.9 }} />
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <div ref={circleRef} className="w-40 h-40 bg-black rounded-full origin-center"></div>
        </div>

        {expanded && (
          <div
            ref={contentRef}
            className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-white z-30 bg-white opacity-0"
          >
            <div className="fixed top-0 left-0 w-full h-screen bg-white z-40 shadow-md overflow-y-auto">
              <Navigation />
              <EventCountdown />
              <EventWishlist />
              <Footer />
            </div>

            <div className="flex flex-col items-center justify-center flex-1">
              <h1 className="text-4xl font-bold text-black">Welcome to the Overlay Content</h1>
              <p className="text-xl mt-4 text-black">This appears after the circle expands!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpandingOverlay;
