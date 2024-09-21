import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type MovieData = {
  src: string;
  title: string;
  description: string;
};

type NetflixRowProps = {
  title: string;
  data?: MovieData[];
};

const NetflixRow = ({ title, data }: NetflixRowProps) => {
  const rowPostersRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Smooth scroll logic using requestAnimationFrame
  const smoothScrollTo = (start: number, end: number, duration: number) => {
    const startTime = performance.now();

    const scrollStep = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeInOutQuad = (t: number) =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // Easing function
      const amountToScroll = start + (end - start) * easeInOutQuad(progress);
      if (rowPostersRef.current) {
        rowPostersRef.current.scrollLeft = amountToScroll;
      }

      if (progress < 1) {
        window.requestAnimationFrame(scrollStep);
      } else {
        getScrollVal(); // Ensure arrow visibility is updated
      }
    };

    window.requestAnimationFrame(scrollStep);
  };

  const scrollL = () => {
    const step = window.outerWidth / 2;
    smoothScrollTo(
      rowPostersRef.current?.scrollLeft || 0,
      (rowPostersRef.current?.scrollLeft || 0) - step,
      600
    );
  };

  const scrollR = () => {
    const step = window.outerWidth / 2;
    smoothScrollTo(
      rowPostersRef.current?.scrollLeft || 0,
      (rowPostersRef.current?.scrollLeft || 0) + step,
      600
    );
  };

  const getScrollVal = () => {
    const x = rowPostersRef.current;
    if (!x) return;
    const right = x.scrollWidth - (x.scrollLeft + x.clientWidth);

    setShowLeftArrow(x.scrollLeft > 0);
    setShowRightArrow(right > 2);
  };

  useEffect(() => {
    getScrollVal(); // Initialize arrow visibility on component mount
  }, []);

  return (
    <div className="relative">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div
        className="flex items-center overflow-x-scroll space-x-4 scrollbar-hide"
        ref={rowPostersRef}
        onScroll={getScrollVal}
      >
        {data?.map((poster, index) => (
          <motion.div
            className="relative flex-shrink-0 cursor-pointer"
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative overflow-hidden group">
              <Image
                height={230}
                width={307}
                src={poster.src}
                alt="movieImage"
                className="object-cover h-[230px] w-[307px] transition-opacity duration-300 group-hover:opacity-30 opacity-75"
              />
              <motion.h5 className="absolute bottom-4 left-4 text-white text-2xl font-bold group-hover:opacity-0 opacity-100 transition-opacity">
                {poster.title}
              </motion.h5>
              <motion.div className="absolute bottom-10 left-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <h4>{poster.title}</h4>
                <p>{poster.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
        <div className="min-w-[155px]"></div>
      </div>

      {showLeftArrow && (
        <motion.div
          className="absolute top-1/2 transform -translate-y-1/2 left-6 bg-black bg-opacity-50 p-2 cursor-pointer"
          onClick={scrollL}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileTap={{ scale: 0.9, rotate: -15 }} // Add a bounce effect on click
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </motion.div>
      )}

      {showRightArrow && (
        <motion.div
          className="absolute top-1/2 transform -translate-y-1/2 right-6 bg-black bg-opacity-50 p-2 cursor-pointer"
          onClick={scrollR}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileTap={{ scale: 0.9, rotate: 15 }} // Add a bounce effect on click
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </motion.div>
      )}
    </div>
  );
};

export default NetflixRow;
