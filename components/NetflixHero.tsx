"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Info, PlayCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NetflixHero() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[56.25vw] max-h-[80vh] min-h-[400px]">
      <AnimatePresence>
        {!showVideo && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src="/images/_lifeOfTheParty.png"
              alt="Monsters: The Lyle and Erik Menendez Story"
              layout="fill"
              objectFit="cover"
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>

      {showVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/placeholder.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="absolute bottom-[10%] left-[4%] right-[4%] text-white">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
          Monsters: The Lyle and Erik Menendez Story
        </h1>
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center px-4 py-2 bg-white text-black rounded-md hover:bg-opacity-80 transition-colors">
            <PlayCircle className="mr-2" />
            Play
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-500 bg-opacity-50 text-white rounded-md hover:bg-opacity-40 transition-colors">
            <Info className="mr-2" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}
