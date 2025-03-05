import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalSection {
  title: string;
  description: string;
  backgroundImage: string;
  backgroundColor: string;
}

const Home: React.FC = () => {
  const horizontalSectionRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const zigzagSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionContainer = horizontalSectionRef.current;
    if (!sectionContainer) return;

    const sections = gsap.utils.toArray('.horizontal-section') as HTMLElement[];

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionContainer,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + sectionContainer.offsetWidth
      }
    });
  }, []);

  useEffect(() => {
    // Overlay animation
    gsap.fromTo(
      overlayRef.current,
      { y: "100%" },
      {
        y: "0%",
        ease: "power2.out",
        scrollTrigger: {
          trigger: overlayRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      }
    );


    // Zigzag section animations
    if (zigzagSectionRef.current) {
      const imageElement = zigzagSectionRef.current.querySelector('.zigzag-image');
      const textElement = zigzagSectionRef.current.querySelector('.zigzag-text');

      gsap.fromTo(
        imageElement,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: zigzagSectionRef.current,
            start: "top center",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(
        textElement,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: zigzagSectionRef.current,
            start: "top center",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const horizontalSections: HorizontalSection[] = [
    {
      title: "Mindful Exploration",
      description: "Begin a journey of self-discovery and profound awareness.",
      backgroundImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80",
      backgroundColor: "hsl(50, 70%, 50%)"
    },
    {
      title: "Cultural Connections",
      description: "Bridging worlds through shared experiences and understanding.",
      backgroundImage: "https://images.unsplash.com/photo-1469708105980-192c63c05f9b?auto=format&fit=crop&w=1500&q=80",
      backgroundColor: "hsl(100, 70%, 50%)"
    },
    {
      title: "Urban Rhythms",
      description: "Feel the pulse of city life and its vibrant energy.",
      backgroundImage: "https://images.unsplash.com/photo-1480714378408-67cf0d7a4cc6?auto=format&fit=crop&w=1500&q=80",
      backgroundColor: "hsl(150, 70%, 50%)"
    },
    {
      title: "Natural Harmony",
      description: "Connect with the raw beauty and serenity of nature.",
      backgroundImage: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1500&q=80",
      backgroundColor: "hsl(200, 70%, 50%)"
    },
    {
      title: "Artistic Expression",
      description: "Unleash creativity and explore the boundaries of imagination.",
      backgroundImage: "https://images.unsplash.com/photo-1548094891-c5cec5d5bc5a?auto=format&fit=crop&w=1500&q=80",
      backgroundColor: "hsl(250, 70%, 50%)"
    },
    {
      title: "Personal Growth",
      description: "Embrace challenges and transform your inner landscape.",
      backgroundImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1500&q=80",
      backgroundColor: "hsl(300, 70%, 50%)"
    },
    {
      title: "Global Perspective",
      description: "Expand your horizons and connect with the world.",
      backgroundImage: "https://images.unsplash.com/photo-1504450758481-fc5d7dda24c1?auto=format&fit=crop&w=1500&q=80",
      backgroundColor: "hsl(350, 70%, 50%)"
    }
  ];


  return (
    <div className="relative min-h-screen w-full">
      <Navbar />
      
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1563990308267-cd6d3cc09318?auto=format&fit=crop&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.8)",
        }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-yellow-300 mb-8">Live At Present</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">Lalitpur, Nepal</h2>
          <div className="hidden md:block w-4 h-4 bg-white rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">Raleigh, NC</h2>
        </div>
        <button className="bg-yellow-300 text-gray-900 px-8 py-3 rounded-full text-xl font-semibold transform transition-transform hover:scale-105 hover:bg-yellow-400">
          BUY TICKETS
        </button>
      </div>
      
      {/* Animated Overlay Container */}
      <div
        ref={overlayRef}
        className="overlaycontainer absolute inset-0 bg-black z-20 flex items-center justify-center text-white text-4xl font-bold"
        style={{ transform: "translateY(100%)" }}
      >
        <div className="text-center">
          <h2 className="text-6xl mb-4">Welcome to the Experience</h2>
          <p className="text-xl max-w-xl mx-auto">
            A journey like never before. Stay tuned for an unforgettable moment.
          </p>
        </div>
      </div>
      
      {/* Horizontal Scroll Container */}
      <div ref={horizontalSectionRef} className="h-screen w-[700%] flex">
        {horizontalSections.map((section, num) => (
          <div
            key={num}
            className="horizontal-section w-screen h-screen flex items-center justify-center relative"
            style={{ 
              backgroundColor: section.backgroundColor,
              backgroundImage: `url(${section.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="text-white text-center z-10 px-8">
              <h2 className="text-6xl mb-4 font-bold">{section.title}</h2>
              <p className="text-2xl max-w-2xl mx-auto">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Zigzag Section 1 */}
      <div 
        ref={zigzagSectionRef}
        className="relative min-h-screen bg-black z-20 flex items-center"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Image Side - Left */}
          <div className="zigzag-image order-2 md:order-1 overflow-hidden">
            <img 
              src="/api/placeholder/600/400" 
              alt="Experience Visual" 
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </div>
          
          {/* Text Side - Right */}
          <div className="zigzag-text flex flex-col justify-center order-1 md:order-2 text-white space-y-6">
            <h2 className="text-5xl font-bold mb-4">Unique Journey Continues</h2>
            <p className="text-xl mb-6 leading-relaxed">
              Embark on an extraordinary experience that transcends boundaries. 
              Our carefully crafted journey promises to challenge your perceptions 
              and inspire your imagination.
            </p>
            <div className="flex space-x-4">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition">
                Explore More
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                Learn Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Zigzag Section 2 - Reversed */}
      <div 
        className="relative min-h-screen bg-slate-900 z-20 flex items-center"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Text Side - Left */}
          <div className="flex flex-col justify-center text-white space-y-6">
            <h2 className="text-5xl font-bold mb-4">Discover New Horizons</h2>
            <p className="text-xl mb-6 leading-relaxed">
              Push beyond your limits and explore uncharted territories of 
              experience. Our journey is designed to unlock new perspectives 
              and create lasting memories.
            </p>
            <div className="flex space-x-4">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition">
                Start Journey
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                View Details
              </button>
            </div>
          </div>

          {/* Image Side - Right */}
          <div className="overflow-hidden">
            <img 
              src="/api/placeholder/600/400" 
              alt="Experience Exploration" 
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Final Section */}
      <div className="relative min-h-screen bg-black z-20 flex items-center justify-center text-white">
        <div className="text-center max-w-3xl px-4">
          <h2 className="text-6xl font-bold mb-6">The Journey Continues</h2>
          <p className="text-2xl mb-8">
            Every moment is an opportunity. Every step is a new beginning.
            Join us in creating memories that will last a lifetime.
          </p>
          <button className="bg-yellow-400 text-black px-10 py-4 rounded-full text-xl font-semibold hover:bg-yellow-500 transition">
            Begin Your Experience
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;