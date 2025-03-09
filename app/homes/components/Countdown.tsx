"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import pillar from "../../../public/pillar.png";
import pillar1 from "../../../public/pillar(1).png";
import design from "../../../public/design.png";
import design1 from "../../../public/design(1).png";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type EventCountdownProps = {
  targetDate?: Date;
};

export default function EventCountdown({ targetDate = new Date("2025-06-17") }: EventCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 z-0">
        <Image src="/background.png" alt="Decorative background" fill className="object-cover" priority />
      </div>
      <div className="absolute top-4 right-8 z-20">
        <Image src="/bird.png" alt="Bird silhouette" width={80} height={40} className="opacity-80" />
      </div>

      <motion.div initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, type: "spring" }}
                  className="absolute bottom-0 left-0 z-20">
        <Image src={design} alt="Decorative swirl" width={300} height={900} className="opacity-80" />
      </motion.div>
      <motion.div 

        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
      
      
      className="absolute bottom-0 right-0 z-20">
        <Image src={design1} alt="Decorative swirl" width={300} height={300} className="opacity-80" />
      </motion.div>

      <div className="container relative z-30 mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-8 text-5xl font-bold tracking-tight text-white md:text-7xl">TAKEOVER</h2>
          <div className="relative flex items-center justify-center">
            <div className="relative h-64 w-64 rounded-full bg-black md:h-80 md:w-80 lg:h-96 lg:w-96">
              <motion.div
                className="absolute -left-32 top-1/2 -translate-y-1/2 md:-left-40"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, type: "spring" }}
              >
                <Image src={pillar} alt="Left pillar" width={200} height={600} className="h-auto w-auto" />
              </motion.div>
              <motion.div
                className="absolute -right-32 top-1/2 -translate-y-1/2 md:-right-40"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, type: "spring" }}
              >
                <Image src={pillar1} alt="Right pillar" width={200} height={600} className="h-auto w-auto" />
              </motion.div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                <motion.p
                  className="mb-4 text-center text-lg font-medium md:text-xl"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  NEXT EVENT STARTS IN
                </motion.p>
                <div className="flex w-full justify-center space-x-2 md:space-x-4">
                  <CountdownUnit value={timeLeft.days} label="DAYS" />
                  <CountdownSeparator />
                  <CountdownUnit value={timeLeft.hours} label="HOURS" />
                  <CountdownSeparator />
                  <CountdownUnit value={timeLeft.minutes} label="MINUTES" />
                  <CountdownSeparator />
                  <CountdownUnit value={timeLeft.seconds} label="SECONDS" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 z-40">
              <motion.div
                className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-center text-xs font-bold leading-tight text-black md:h-20 md:w-20 md:text-sm"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
              >
                <div>
                  <div>LIVE AT</div>
                  <div>PRESENT</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type CountdownUnitProps = {
  value: number;
  label: string;
};

function CountdownUnit({ value, label }: CountdownUnitProps) {
  return (
    <div className="flex flex-col items-center">
      <motion.span
        className="text-2xl font-bold md:text-4xl"
        key={value}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {value.toString().padStart(2, "0")}
      </motion.span>
      <span className="text-[8px] md:text-xs">{label}</span>
    </div>
  );
}

function CountdownSeparator() {
  return <span className="text-xl font-bold md:text-3xl">:</span>;
}