"use client"
import type React from "react"
import { useEffect, useRef } from "react"
import Navbar from "@/components/navbar"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface HorizontalSection {
  title: string
  description: string
  backgroundImage: string
  backgroundColor: string
}

const HomePge: React.FC = () => {
  const horizontalSectionRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const zigzagSectionRef = useRef<HTMLDivElement>(null)
  const zigzagSections = useRef<HTMLDivElement[]>([])

  // Function to add elements to the zigzagSections ref array
  const addToZigzagRefs = (el: HTMLDivElement | null) => {
    if (el && !zigzagSections.current.includes(el)) {
      zigzagSections.current.push(el)
    }
  }

  useEffect(() => {
    const sectionContainer = horizontalSectionRef.current
    if (!sectionContainer) return

    const sections = gsap.utils.toArray(".horizontal-section") as HTMLElement[]

    // Enhanced horizontal scroll animation with a bit more dynamic feel
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: sectionContainer,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + sectionContainer.offsetWidth,
      },
    })

    // Add floating animation to section titles
    sections.forEach((section) => {
      const title = section.querySelector("h2")
      const description = section.querySelector("p")

      gsap.fromTo(
        title,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            containerAnimation: ScrollTrigger.getById("horizontalScroll"),
            start: "left center",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        description,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: section,
            containerAnimation: ScrollTrigger.getById("horizontalScroll"),
            start: "left center",
            toggleActions: "play none none reverse",
          },
        },
      )
    })
  }, [])

  useEffect(() => {
    // Enhanced overlay animation with a more dramatic reveal
    gsap.fromTo(
      overlayRef.current,
      {
        y: "100%",
        opacity: 0.8,
      },
      {
        y: "0%",
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: overlayRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      },
    )

    // Add text animation inside overlay
    const overlayTitle = overlayRef.current?.querySelector("h2")
    const overlayText = overlayRef.current?.querySelector("p")

    if (overlayTitle && overlayText) {
      gsap.fromTo(
        overlayTitle,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: overlayRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        overlayText,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: overlayRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }

    // Animate all zigzag sections with alternating animations
    zigzagSections.current.forEach((section, index) => {
      const isEven = index % 2 === 0
      const imageElement = section.querySelector(".zigzag-image")
      const textElement = section.querySelector(".zigzag-text")

      // Image animation - alternating left/right
      gsap.fromTo(
        imageElement,
        {
          x: isEven ? -100 : 100,
          opacity: 0,
          scale: 0.9,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Text animation - alternating right/left
      gsap.fromTo(
        textElement,
        {
          x: isEven ? 100 : -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Button animations
      const buttons = textElement?.querySelectorAll("button")
      if (buttons) {
        gsap.fromTo(
          buttons,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            delay: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    })
  }, [])

  const horizontalSections: HorizontalSection[] = [
    {
      title: "Mindful Exploration",
      description: "Begin a journey of self-discovery and profound awareness.",
      backgroundImage: "https://www.mybrandpromo.com/wp-content/uploads/promo-items-updated.jpg",
      backgroundColor: "hsl(50, 70%, 50%)",
    },
    {
      title: "Cultural Connections",
      description: "Bridging worlds through shared experiences and understanding.",
      backgroundImage: "https://images.unsplash.com/photo-1469708105980-192c63c05f9b?auto=format&fit=crop&w=1500&q=80",
      backgroundColor: "hsl(100, 70%, 50%)",
    },
    {
      title: "Urban Rhythms",
      description: "Feel the pulse of city life and its vibrant energy.",
      backgroundImage: "https://images.unsplash.com/photo-1480714378408-67cf0d7a4cc6?auto=format&fit=crop&w=1500&q=80",
      backgroundColor: "hsl(150, 70%, 50%)",
    },
    {
      title: "Natural Harmony",
      description: "Connect with the raw beauty and serenity of nature.",
      backgroundImage: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1500&q=80",
      backgroundColor: "hsl(200, 70%, 50%)",
    },
    {
      title: "Artistic Expression",
      description: "Unleash creativity and explore the boundaries of imagination.",
      backgroundImage: "https://images.unsplash.com/photo-1548094891-c5cec5d5bc5a?auto=format&fit=crop&w=1500&q=80",
      backgroundColor: "hsl(250, 70%, 50%)",
    },
    {
      title: "Personal Growth",
      description: "Embrace challenges and transform your inner landscape.",
      backgroundImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1500&q=80",
      backgroundColor: "hsl(300, 70%, 50%)",
    },
    {
      title: "Global Perspective",
      description: "Expand your horizons and connect with the world.",
      backgroundImage: "https://images.unsplash.com/photo-1504450758481-fc5d7dda24c1?auto=format&fit=crop&w=1500&q=80",
      backgroundColor: "hsl(350, 70%, 50%)",
    },
  ]

  // Content for the additional zigzag sections
  const zigzagContent = [
    {
      title: "Immersive Experiences",
      description:
        "Dive into a world where reality and imagination blend seamlessly. Our immersive experiences transport you to new realms of possibility and wonder.",
      image: "https://cdn.photographylife.com/wp-content/uploads/2014/06/Nikon-D810-Image-Sample-6.jpg",
      alt: "Immersive Experience Visual",
    },
    {
      title: "Mindful Connections",
      description:
        "Build meaningful relationships through shared experiences. Our community-focused approach creates spaces for authentic connection and growth.",
      image: "https://cdn.photographylife.com/wp-content/uploads/2014/06/Nikon-D810-Image-Sample-6.jpg",
      alt: "Community Connection Visual",
    },
    {
      title: "Transformative Journeys",
      description:
        "Embark on a path of personal transformation. Our carefully designed journeys challenge perspectives and inspire profound change.",
      image: "https://cdn.photographylife.com/wp-content/uploads/2014/06/Nikon-D810-Image-Sample-6.jpg",
      alt: "Transformation Journey Visual",
    },
  ]

  return (
    <div className="relative min-h-screen w-full">
      <Navbar />

      {/* Background Image with subtle animation */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://cdn.prod.website-files.com/63c8f2a5e7a1f60637888f3f/640817fe6ec8b2d5ddb46eff_blog-online-concert-live%20.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.8)",
        }}
      >
        {/* Animated overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
      </div>

      {/* Content Overlay with enhanced animations */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1
          className="text-6xl md:text-8xl font-bold text-yellow-300 mb-8 animate-fadeIn"
          style={{ animation: "fadeIn 1.5s ease-out" }}
        >
          Live At Present
        </h1>
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12"
          style={{ animation: "fadeIn 1.5s ease-out 0.3s both" }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white">Lalitpur, Nepal</h2>
          <div className="hidden md:block w-4 h-4 bg-white rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">Raleigh, NC</h2>
        </div>
        <button
          className="bg-yellow-300 text-gray-900 px-8 py-3 rounded-full text-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:shadow-lg"
          style={{ animation: "fadeIn 1.5s ease-out 0.6s both" }}
        >
          BUY TICKETS
        </button>
      </div>

      {/* Animated Overlay Container with enhanced content */}
      <div
        ref={overlayRef}
        className="overlaycontainer absolute inset-0 bg-gradient-to-b from-black to-slate-900 z-20 flex items-center justify-center text-white text-4xl font-bold"
        style={{ transform: "translateY(100%)" }}
      >
        <div className="text-center">
          <h2 className="text-6xl mb-4 text-yellow-300">Welcome to the Experience</h2>
          <p className="text-xl max-w-xl mx-auto">
            A journey like never before. Stay tuned for an unforgettable moment.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Container with enhanced animations */}
      <div ref={horizontalSectionRef} className="h-screen w-[700%] overflow-x-hidden flex">
        {horizontalSections.map((section, num) => (
          <div
            key={num}
            className="horizontal-section w-screen h-screen flex items-center justify-center relative"
            style={{
              backgroundColor: section.backgroundColor,
              backgroundImage: `url(${section.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
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
      <div ref={(el) => addToZigzagRefs(el)} className="relative min-h-screen bg-black z-20 flex items-center py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Image Side - Left */}
          <div className="zigzag-image order-2 md:order-1 overflow-hidden">
            <img
              src="https://cdn.photographylife.com/wp-content/uploads/2014/06/Nikon-D810-Image-Sample-6.jpg"
              alt="Experience Visual"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Text Side - Right */}
          <div className="zigzag-text flex flex-col justify-center order-1 md:order-2 text-white space-y-6">
            <h2 className="text-5xl font-bold mb-4">Unique Journey Continues</h2>
            <p className="text-xl mb-6 leading-relaxed">
              Embark on an extraordinary experience that transcends boundaries. Our carefully crafted journey promises
              to challenge your perceptions and inspire your imagination.
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
        ref={(el) => addToZigzagRefs(el)}
        className="relative min-h-screen bg-slate-900 z-20 flex items-center py-16"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Text Side - Left */}
          <div className="zigzag-text flex flex-col justify-center text-white space-y-6">
            <h2 className="text-5xl font-bold mb-4">Discover New Horizons</h2>
            <p className="text-xl mb-6 leading-relaxed">
              Push beyond your limits and explore uncharted territories of experience. Our journey is designed to unlock
              new perspectives and create lasting memories.
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
          <div className="zigzag-image overflow-hidden">
            <img
              src="https://cdn.photographylife.com/wp-content/uploads/2014/06/Nikon-D810-Image-Sample-6.jpg"
              alt="Experience Exploration"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* NEW Zigzag Section 3 */}
      <div ref={(el) => addToZigzagRefs(el)} className="relative min-h-screen bg-gray-900 z-20 flex items-center py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Image Side - Left */}
          <div className="zigzag-image order-2 md:order-1 overflow-hidden">
            <img
              src={zigzagContent[0].image || "/placeholder.svg"}
              alt={zigzagContent[0].alt}
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Text Side - Right */}
          <div className="zigzag-text flex flex-col justify-center order-1 md:order-2 text-white space-y-6">
            <h2 className="text-5xl font-bold mb-4">{zigzagContent[0].title}</h2>
            <p className="text-xl mb-6 leading-relaxed">{zigzagContent[0].description}</p>
            <div className="flex space-x-4">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition">
                Dive Deeper
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                See Examples
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* NEW Zigzag Section 4 */}
      <div
        ref={(el) => addToZigzagRefs(el)}
        className="relative min-h-screen bg-slate-800 z-20 flex items-center py-16"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Text Side - Left */}
          <div className="zigzag-text flex flex-col justify-center text-white space-y-6">
            <h2 className="text-5xl font-bold mb-4">{zigzagContent[1].title}</h2>
            <p className="text-xl mb-6 leading-relaxed">{zigzagContent[1].description}</p>
            <div className="flex space-x-4">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition">
                Join Community
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Side - Right */}
          <div className="zigzag-image overflow-hidden">
            <img
              src={zigzagContent[1].image || "/placeholder.svg"}
              alt={zigzagContent[1].alt}
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* NEW Zigzag Section 5 */}
      <div ref={(el) => addToZigzagRefs(el)} className="relative min-h-screen bg-gray-800 z-20 flex items-center py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Image Side - Left */}
          <div className="zigzag-image order-2 md:order-1 overflow-hidden">
            <img
              src={zigzagContent[2].image || "/placeholder.svg"}
              alt={zigzagContent[2].alt}
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Text Side - Right */}
          <div className="zigzag-text flex flex-col justify-center order-1 md:order-2 text-white space-y-6">
            <h2 className="text-5xl font-bold mb-4">{zigzagContent[2].title}</h2>
            <p className="text-xl mb-6 leading-relaxed">{zigzagContent[2].description}</p>
            <div className="flex space-x-4">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition">
                Begin Transformation
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                Read Stories
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Final Section with enhanced animations */}
      <div
        className="relative min-h-screen bg-black z-20 flex items-center justify-center text-white"
        ref={(el) => {
          if (el) {
            gsap.fromTo(
              el.querySelector("h2"),
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                  trigger: el,
                  start: "top 70%",
                  toggleActions: "play none none reverse",
                },
              },
            )

            gsap.fromTo(
              el.querySelector("p"),
              { y: 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3,
                scrollTrigger: {
                  trigger: el,
                  start: "top 70%",
                  toggleActions: "play none none reverse",
                },
              },
            )

            gsap.fromTo(
              el.querySelector("button"),
              { y: 20, opacity: 0, scale: 0.9 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                delay: 0.6,
                ease: "back.out(1.7)",
                scrollTrigger: {
                  trigger: el,
                  start: "top 70%",
                  toggleActions: "play none none reverse",
                },
              },
            )
          }
        }}
      >
        <div className="text-center max-w-3xl px-4">
          <h2 className="text-6xl font-bold mb-6">The Journey Continues</h2>
          <p className="text-2xl mb-8">
            Every moment is an opportunity. Every step is a new beginning. Join us in creating memories that will last a
            lifetime.
          </p>
          <button className="bg-yellow-400 text-black px-10 py-4 rounded-full text-xl font-semibold hover:bg-yellow-500 transition transform hover:scale-105 duration-300">
            Begin Your Experience
          </button>
        </div>
      </div>

      {/* Animated Footer Section */}
      <div
        className="relative bg-gradient-to-t from-black to-gray-900 z-20 py-16"
        ref={(el) => {
          if (el) {
            // Main footer animation
            gsap.fromTo(
              el,
              { opacity: 0 },
              {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                  trigger: el,
                  start: "top 90%",
                  toggleActions: "play none none reverse",
                },
              },
            )

            // Animate footer columns
            const columns = el.querySelectorAll(".footer-column")
            gsap.fromTo(
              columns,
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              },
            )

            // Animate social icons
            const socialIcons = el.querySelectorAll(".social-icon")
            gsap.fromTo(
              socialIcons,
              { scale: 0, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                stagger: 0.1,
                duration: 0.6,
                ease: "back.out(1.7)",
                scrollTrigger: {
                  trigger: el,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                },
              },
            )

            // Animate newsletter form
            const newsletterForm = el.querySelector(".newsletter-form")
            gsap.fromTo(
              newsletterForm,
              { y: 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: 0.6,
                scrollTrigger: {
                  trigger: el,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                },
              },
            )
          }
        }}
      >
        <div className="container mx-auto px-4">
          {/* Animated wave divider */}
          <div className="relative -mt-32 mb-16">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path
                fill="#000000"
                fillOpacity="1"
                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                className="animate-pulse"
                style={{ animationDuration: "8s" }}
              ></path>
            </svg>
          </div>

          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1 - About */}
            <div className="footer-column space-y-6">
              <h3 className="text-yellow-300 text-2xl font-bold">Live At Present</h3>
              <p className="text-gray-300">
                An unforgettable experience connecting cultures across continents. Join us for a journey that transcends
                boundaries.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="social-icon bg-gray-800 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  <Facebook size={20} className="text-white hover:text-black" />
                </a>
                <a
                  href="#"
                  className="social-icon bg-gray-800 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  <Instagram size={20} className="text-white hover:text-black" />
                </a>
                <a
                  href="#"
                  className="social-icon bg-gray-800 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  <Twitter size={20} className="text-white hover:text-black" />
                </a>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="footer-column space-y-6">
              <h3 className="text-yellow-300 text-xl font-bold">Quick Links</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-yellow-300 transition-colors">
                  <a href="#" className="flex items-center">
                    <span className="mr-2">›</span> About the Event
                  </a>
                </li>
                <li className="hover:text-yellow-300 transition-colors">
                  <a href="#" className="flex items-center">
                    <span className="mr-2">›</span> Schedule
                  </a>
                </li>
                <li className="hover:text-yellow-300 transition-colors">
                  <a href="#" className="flex items-center">
                    <span className="mr-2">›</span> Performers
                  </a>
                </li>
                <li className="hover:text-yellow-300 transition-colors">
                  <a href="#" className="flex items-center">
                    <span className="mr-2">›</span> Venue Information
                  </a>
                </li>
                <li className="hover:text-yellow-300 transition-colors">
                  <a href="#" className="flex items-center">
                    <span className="mr-2">›</span> FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Contact */}
            <div className="footer-column space-y-6">
              <h3 className="text-yellow-300 text-xl font-bold">Contact Us</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <MapPin size={20} className="mr-3 mt-1 text-yellow-300 flex-shrink-0" />
                  <span>Lalitpur, Nepal & Raleigh, NC, USA</span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="mr-3 text-yellow-300 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="mr-3 text-yellow-300 flex-shrink-0" />
                  <span>info@liveatpresent.com</span>
                </li>
              </ul>
            </div>

            {/* Column 4 - Newsletter */}
            <div className="footer-column space-y-6">
              <h3 className="text-yellow-300 text-xl font-bold">Stay Updated</h3>
              <p className="text-gray-300">Subscribe to our newsletter for exclusive updates and special offers.</p>
              <form className="newsletter-form space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bg-yellow-400 text-black p-2 rounded-lg hover:bg-yellow-300 transition-colors"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Copyright bar with animated border */}
          <div className="mt-16 pt-8 border-t border-gray-800 text-center">
            <div className="relative overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent h-px w-full"
                style={{
                  animation: "slide 2s linear infinite",
                }}
              ></div>
            </div>
            <p className="text-gray-400 mt-6">© {new Date().getFullYear()} Live At Present. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Add keyframes for custom animations */}
      <style jsx>{`
  @keyframes slide {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`}</style>
    </div>
  )
}

export default HomePge

