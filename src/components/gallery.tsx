import React, { useState } from "react";
import ImageModal from "./imagemodal";

interface Image {
  src: string;
  alt: string;
  caption?: string;
}

interface Props {
  images: Image[];
}

export default function Gallery({ images }: Props) {
  const [index, setIndex] = useState<number | null>(null);

  const handleClose = () => setIndex(null);
  const handleNext = () => setIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
  const handlePrev = () =>
    setIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="w-full object-contain cursor-pointer hover:opacity-80 transition"
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {index !== null && (
        <ImageModal
          src={images[index].src}
          alt={images[index].alt}
          caption={images[index].caption}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
}
