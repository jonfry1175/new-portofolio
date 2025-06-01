import React, { useState, useEffect } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number | string;
  height?: number | string;
  placeholderColor?: string;
  onClick?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = "",
  style = {},
  width,
  height,
  placeholderColor = "#1e1e1e",
  onClick,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    // Create a new image object
    const img = new Image();
    img.src = src;

    // When image loads, update state
    img.onload = () => {
      setImgSrc(src);
      setIsLoaded(true);
    };

    // Handle error
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
    };
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: !isLoaded ? placeholderColor : "transparent",
        width,
        height,
        ...style,
      }}
      onClick={onClick}
    >
      {isLoaded ? (
        <img
          src={imgSrc}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } w-full h-full object-cover`}
          style={{ objectPosition: "center" }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-purple-500 rounded-full animate-spin border-t-transparent"></div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
