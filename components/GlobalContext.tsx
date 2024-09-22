"use client";
import { createContext, FC, ReactNode, useContext, useRef } from "react";

type ContextProps = {
  audio: {
    play: () => void;
    pause: () => void;
  };
};
const contextProps = {} as ContextProps;
const Context = createContext(contextProps);

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const soundRef = useRef<HTMLAudioElement>(null);

  const play = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  };
  const pause = () => {
    if (soundRef.current) {
      soundRef.current.pause();
    }
  };
  const value = {
    audio: {
      play,
      pause,
    },
  };
  return (
    <Context.Provider value={value}>
      {children}
      <audio ref={soundRef} src={"/sounds/netflix-remix.mp3"} />
    </Context.Provider>
  );
};

export const useGlobalContext = () => useContext(Context);
