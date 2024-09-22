"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  onEnter?: () => void;
};
export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  onEnter,
}: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, pointerEvents: "none" }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
            className="relative w-full max-w-2xl bg-zinc-900 rounded-md shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              onClick={onClose}
            >
              <X size={24} />
            </button>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
              <p className="text-gray-300 mb-6">{description}</p>
              <div className="flex space-x-4">
                {onEnter && (
                  <button
                    onClick={onEnter}
                    className="px-4 py-2 bg-white text-black font-bold rounded hover:bg-opacity-75 transition-colors"
                  >
                    Enter
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
