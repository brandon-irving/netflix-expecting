"use client";

import { getImageUrl, getVideoUrl } from "@/data/bucket";
import { AnimatePresence, motion } from "framer-motion";
import {
  PauseCircle,
  PlayCircle,
  StopCircle,
  Volume2,
  VolumeX,
} from "lucide-react"; // Volume icons
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function NetflixHero() {
  const [showVideo, setShowVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Mute state
  const [isPlaying, setIsPlaying] = useState(false); // Playing state
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => playVideo(800), 700);
    return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const playVideo = (delay = 0) => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    setIsPlaying(true);
    setTimeout(() => {
      setShowVideo(true);
    }, delay);
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const stopVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
      setIsPlaying(false);
    }
    setShowVideo(false);
  };

  return (
    <div className="relative w-full h-[56.25vw] max-h-[80vh] min-h-[400px]">
      <AnimatePresence>
        {!showVideo && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              fill
              src={getImageUrl("ultra-sound-img.png")}
              alt="ultra-sound-img"
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>

      {showVideo && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted={isMuted}
            playsInline
            onEnded={() => setShowVideo(false)}
          >
            <source src={getVideoUrl("Baby-interview.mp4")} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="absolute bottom-[10%] left-[4%] right-[4%] text-white">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
          Brandon is having a baby!
        </h1>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={isPlaying ? pauseVideo : () => playVideo()}
            className="flex items-center px-4 py-2 bg-white text-black rounded-md hover:bg-opacity-80 transition-colors"
          >
            {isPlaying ? (
              <>
                <PauseCircle className="mr-2" />
                Pause
              </>
            ) : (
              <>
                <PlayCircle className="mr-2" />
                Play
              </>
            )}
          </button>
          <button
            onClick={stopVideo}
            className="flex items-center px-4 py-2 bg-gray-500 bg-opacity-50 text-white rounded-md hover:bg-opacity-40 transition-colors"
          >
            <StopCircle className="mr-2" />
            Stop
          </button>
          <button
            onClick={toggleMute}
            className="flex items-center px-4 py-2 bg-gray-500 bg-opacity-50 text-white rounded-md hover:bg-opacity-40 transition-colors"
          >
            {isMuted ? (
              <>
                <VolumeX className="mr-2" /> Unmute
              </>
            ) : (
              <>
                <Volume2 className="mr-2" /> Mute
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
