"use client";
import { motion } from "framer-motion";
// import { useRef } from "react";
// import useSound from "use-sound";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "./splashAnimation.scss";

// const TADUM_SOUND_URL =
//   "https://cdn.jsdelivr.net/gh/Th3Wall/assets-cdn/Fakeflix/Fakeflix_TaDum.mp3";

const NetflixIntro = () => {
  const navigate = useRouter();
  useEffect(() => {
    // setTimeout(() => {
    // play();
    //   soundNotification();
    // }, 3000);
    setTimeout(() => {
      navigate.replace("/browse");
    }, 5700);
  }, [navigate]);

  return (
    <motion.div
      id="SplashAnimation__wrp"
      className="SplashAnimation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* <audio ref={soundRef} src={TADUM_SOUND_URL} /> */}
      <div className="netflixintro" data-letter="N">
        <div className="helper-1">
          <Fur />

          <Lamp />
        </div>
        <div className="helper-2">
          <Fur />
        </div>
        <div className="helper-3">
          <Fur />
        </div>
        <div className="helper-4">
          <Fur />
        </div>
      </div>
    </motion.div>
  );
};

const Fur = () => (
  <div className="effect-brush">
    {Array.from({ length: 31 })
      .reverse()
      .map((_, i) => (
        <span key={`fur-${i + 1}`} className={`fur-${i + 1}`} />
      ))}
  </div>
);

const Lamp = () => (
  <div className="effect-lumieres">
    {Array.from({ length: 28 }).map((_, i) => (
      <span key={`lamp-${i + 1}`} className={`lamp-${i + 1}`} />
    ))}
  </div>
);

export default NetflixIntro;
