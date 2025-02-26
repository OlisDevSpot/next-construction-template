import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface CustomCarouselProps {
  images: string[];
}

export function CustomCarousel({ images }: CustomCarouselProps) {
  const [imgIdx, setImgIdx] = useState(0);

  const moveBack = () => {
    setImgIdx((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  };

  const moveNext = () => {
    setImgIdx((prev) => (prev + 1 < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <>
      <div
        className="flex h-full w-full transition-transform duration-500"
        style={{
          transform: `translateX(-${100 * imgIdx}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={image} className="h-full w-full flex-shrink-0">
            <Image
              src={`/images/modern-home-${index + 1}.webp`}
              alt="modern home"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <span
        onClick={moveBack}
        className="bg-gradient-to-l from-black/20 to-black/50 px-2 md:px-8 absolute top-0 bottom-0 left-0 flex items-center cursor-pointer"
      >
        <ArrowBigLeft className="fill-black" size={30} />
      </span>
      <span
        onClick={moveNext}
        className="bg-gradient-to-r from-black/20 to-black/50 px-2 md:px-8 absolute top-0 bottom-0 right-0 flex items-center cursor-pointer"
      >
        <ArrowBigRight className="fill-black" size={30} />
      </span>
    </>
  );
}
