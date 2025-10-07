import React, { useEffect } from "react";

interface Props {
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ImageModal({ src, alt, caption, onClose, onNext, onPrev }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-[9999] p-4">
      {/* Lukkeknapp */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-zinc-300"
      >
        ✕
      </button>

      {/* Forrige knapp */}
      <button
        onClick={onPrev}
        className="absolute left-4 text-white text-4xl font-bold hover:text-zinc-300"
      >
        ‹
      </button>

      {/* Neste knapp */}
      <button
        onClick={onNext}
        className="absolute right-12 text-white text-4xl font-bold hover:text-zinc-300"
      >
        ›
      </button>

      {/* Bildet + caption */}
      <div className="flex flex-col items-center max-w-[95vw]">
        <img
          src={src}
          alt={alt}
          className="max-h-[80vh] w-auto rounded-xl shadow-lg"
        />
        {caption && (
          <p className="mt-4 text-center text-zinc-200 text-lg px-4 sm:px-8 lg:px-16">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
