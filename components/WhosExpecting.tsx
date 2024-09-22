"use client";
import { getImageUrl } from "@/data/bucket";
import { motion } from "framer-motion";
import { UserCircle2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useGlobalContext } from "./GlobalContext";
import Modal from "./Modal";
type Profile = {
  id: number;
  name: string;
  avatar?: string;
  description?: string;
};

export default function WhosExpecting() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHintOpen, setIsHintOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<null | Profile>(null);
  const navigate = useRouter();
  const {
    audio: { pause },
  } = useGlobalContext();
  const handleProfileSelect = (profile: Profile) => {
    setSelectedProfile(profile);
  };

  function handleClose() {
    setSelectedProfile(null);
    setIsOpen(false);
  }
  function handleOpen(profile: Profile) {
    if (!profile.avatar) return;
    handleProfileSelect(profile);
    setIsOpen(true);
  }
  function handleOpenHint() {
    setIsHintOpen(true);
  }
  function handleCloseHint() {
    setIsHintOpen(false);
  }

  function goToHome() {
    pause();
    navigate.push("/home");
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        Guess who&#39;s expecting a baby?
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 mb-8">
        {profiles.map((profile) => (
          <motion.button
            key={profile.id}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center space-y-2 focus:outline-none group"
            onClick={() => handleOpen(profile)}
          >
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded overflow-hidden group-hover:ring-4 group-hover:ring-white transition duration-200">
              {profile.avatar ? (
                <Image
                  fill
                  src={getImageUrl(profile.avatar)}
                  alt={profile.name}
                  blurDataURL={getImageUrl(profile.avatar)}
                  placeholder="blur"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-neutral-600 flex items-center justify-center">
                  <UserCircle2 className="w-16 h-16 text-neutral-400" />
                </div>
              )}
            </div>
            <span className="text-gray-400 group-hover:text-white transition duration-200">
              {profile.name}
            </span>
          </motion.button>
        ))}
      </div>
      <button
        onClick={handleOpenHint}
        className="border border-gray-400 text-gray-400 px-4 py-2 hover:text-white hover:border-white transition duration-200"
      >
        Need a hint?
      </button>
      <Modal
        onClose={handleCloseHint}
        isOpen={isHintOpen}
        title={"Here's a hint!"}
        description={"They love Mega Man, programming and red velvet cake!"}
      />
      <Modal
        onClose={handleClose}
        isOpen={isOpen}
        title={"Hmmm... is it " + selectedProfile?.name}
        description={`${selectedProfile?.description}?`}
        onEnter={selectedProfile?.name === "Brandon" ? goToHome : undefined}
      />
    </motion.div>
  );
}

const profiles: Profile[] = [
  {
    id: 1,
    name: "Alyssa",
    avatar: "alyssa.JPG",
    description: "Naaah, not that i know of",
  },
  {
    id: 2,
    name: "Chris",
    avatar: "chris.png",
    description: "Who knows? I don't",
  },
  {
    id: 3,
    name: "Brandon",
    avatar: "brandon.png",
    description: "...Do you really want to know? Press enter to see!",
  },
  {
    id: 4,
    name: "Christian",
    avatar: "christian.png",
    description: "LOL I wish",
  },
  { id: 5, name: "Someone else" },
];
