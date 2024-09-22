"use client";

import { motion } from "framer-motion";

export default function NetflixHomeScreenLoader() {
  return (
    <motion.div
      className="w-full min-h-screen bg-black p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex items-center mb-8">
        <motion.div
          className="w-24 h-8 bg-neutral-800 rounded"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="flex-grow" />
        <motion.div
          className="w-8 h-8 bg-neutral-800 rounded-full"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero Section */}
      <div className="mb-8">
        <motion.div
          className="w-full h-64 bg-neutral-800 rounded-lg mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="w-1/2 h-8 bg-neutral-800 rounded mb-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="w-1/3 h-6 bg-neutral-800 rounded"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content Rows */}
      {[...Array(3)].map((_, rowIndex) => (
        <div key={rowIndex} className="mb-8">
          <motion.div
            className="w-1/4 h-6 bg-neutral-800 rounded mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="flex space-x-4 overflow-hidden">
            {[...Array(6)].map((_, colIndex) => (
              <motion.div
                key={colIndex}
                className="w-40 h-24 bg-neutral-800 rounded flex-shrink-0"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: colIndex * 0.1,
                }}
              />
            ))}
          </div>
        </div>
      ))}

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
        animate={{
          x: ["100%", "-100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
        style={{ mixBlendMode: "overlay", opacity: 0.1 }}
      />
    </motion.div>
  );
}
