"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../GlobalContext";
import "./splashAnimation.scss";
import StartScreen from "./StartScreen";

const NetflixIntro = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useRouter();
  const {
    audio: { play },
  } = useGlobalContext();
  const enterApp = () => {
    play();
    setIsOpen(false);
  };
  useEffect(() => {
    if (isOpen) return;
    setTimeout(() => {
      navigate.replace("/browse");
    }, 5000);
  }, [navigate, isOpen]);

  if (isOpen) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <StartScreen onEnter={enterApp} />
      </motion.div>
    );
  }
  return (
    <motion.div
      id="SplashAnimation__wrp"
      className="SplashAnimation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
