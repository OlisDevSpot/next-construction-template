import Image from "next/image";

interface ServiceImageProps {
  src: string;
}

export default function ServiceImage({ src }: ServiceImageProps) {
  return (
    <div className="w-full h-auto rounded-lg shadow-primary/20 shadow-lg overflow-hidden mt-2">
      <Image
        src={src}
        alt="services"
        width={250}
        height={250}
        className="w-full"
      />
    </div>
  );
}
