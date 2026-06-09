"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title?: string;
  description?: string;
}

export function Lightbox({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title,
  description,
}: LightboxProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/95 z-[100] cursor-pointer"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-lg"
                aria-label="Close lightbox"
              >
                <svg
                  className="w-6 h-6 text-gray-900 dark:text-gray-100"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image Container */}
              <div className="relative w-full h-full flex flex-col">
                <div className="relative flex-1 flex items-center justify-center p-6 sm:p-8 bg-white dark:bg-gray-900">
                  <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl h-auto flex items-center justify-center bg-white dark:bg-gray-900 rounded-lg">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      width={600}
                      height={400}
                      className="object-contain w-full h-auto"
                      priority
                    />
                  </div>
                </div>

                {/* Title and Description */}
                {(title || description) && (
                  <div className="p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                    {title && (
                      <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                        {title}
                      </h3>
                    )}
                    {description && (
                      <p className="text-gray-600 dark:text-gray-400">
                        {description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
