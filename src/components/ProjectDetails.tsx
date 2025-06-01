import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoCloseOutline,
} from "react-icons/io5";

interface ProjectDetailsProps {
  images: string[];
  onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight" && images.length > 1) {
        goToNext();
      } else if (e.key === "ArrowLeft" && images.length > 1) {
        goToPrevious();
      }
    },
    [images.length, onClose]
  );

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.1 } },
  };

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener("keydown", handleKeyDown);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-4xl max-h-[90vh] w-full mx-4 overflow-hidden"
        variants={contentVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            className="absolute top-4 right-4 z-50 p-2 bg-black/60 text-white rounded-full hover:bg-black/80 transition-colors"
            onClick={onClose}
          >
            <IoCloseOutline size={24} />
          </button>

          <img
            src={images[currentIndex]}
            alt={`Project detail ${currentIndex + 1}`}
            className="w-full h-auto object-contain max-h-[80vh] rounded-lg"
          />

          <div className="absolute inset-x-0 bottom-4 flex justify-center items-center gap-4">
            <span className="bg-black/60 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </span>
          </div>

          {images.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 text-white rounded-full hover:bg-black/80 transition-colors"
                onClick={goToPrevious}
              >
                <IoChevronBackOutline size={24} />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 text-white rounded-full hover:bg-black/80 transition-colors"
                onClick={goToNext}
              >
                <IoChevronForwardOutline size={24} />
              </button>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
