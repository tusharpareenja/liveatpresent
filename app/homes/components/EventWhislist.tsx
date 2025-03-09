"use client"

import { motion } from "framer-motion"



const events = [
  {
    date: "TBA",
    name: "Festival Opening Ceremony",
    time: "6:00 PM",
    location: "Main Stage",
  },
  {
    date: "TBA",
    name: "Live Concerts Begin",
    time: "12:00 PM",
    location: "Main Stage",
  },
  {
    name: "Art Installations Showcase",
    date: "",
    time: "10:00 PM",
    location: "",
  },
  {
    name: "Cultural Dance & Performances",
    date: "",
    time: "6:00 PM",
    location: "",
  },
  {
    name: "DJ Night & Afterparty",
    date: "",
    time: "6:00 PM",
    location: "",
  },
  {
    name: "Meditation & Yoga Sessions",
    date: "",
    time: "6:00 PM",
    location: "",
  },
]

export default function EventWishlist() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-black">
      {/* Header */}
      <div className="mb-8">
        <motion.p
          className="text-sm uppercase tracking-wider mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          EVENTS
        </motion.p>
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          WISTLIST
        </motion.h2>
      </div>

      {/* Decorative Divider */}
      <motion.div
        className="w-full h-6 my-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <svg className="w-full h-full" viewBox="0 0 800 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 12C200 12 200 20 400 20C600 20 600 4 800 4"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="opacity-20"
          />
          <path
            d="M0 12C200 12 200 4 400 4C600 4 600 20 800 20"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="opacity-20"
          />
        </svg>
      </motion.div>

      {/* Table Headers */}
      <div className="grid grid-cols-4 gap-4 mb-4 text-sm font-medium">
        <div>Date</div>
        <div>Event Name</div>
        <div>Time</div>
        <div>Location</div>
      </div>

      {/* Events List */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="grid grid-cols-4 gap-4 py-4 border-b border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <div className="text-gray-600">{event.date}</div>
            <div className="font-medium">{event.name}</div>
            <div>{event.time}</div>
            <div>{event.location}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Decorative Divider */}
      <motion.div
        className="w-full h-6 my-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <svg className="w-full h-full" viewBox="0 0 800 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 12C200 12 200 20 400 20C600 20 600 4 800 4"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="opacity-20"
          />
          <path
            d="M0 12C200 12 200 4 400 4C600 4 600 20 800 20"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="opacity-20"
          />
        </svg>
      </motion.div>
    </div>
  )
}

