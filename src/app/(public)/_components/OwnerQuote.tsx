import { COMPANY_INFO } from "@/data/companyInfo";
import Image from "next/image";

export const OwnerQuote = () => {
  return (
    <>
      <div className="flex gap-8 items-center justify-center">
        <div className="w-[120px] h-[120px] rounded-full aspect-square overflow-hidden flex-shrink-0">
          <Image
            src="/companyImages/owner.jpg"
            alt="owner"
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mb-2">
          <h3 className="text-3xl">{COMPANY_INFO.owner}</h3>
          <p className="text-neutral-400">{COMPANY_INFO.ownerTitle}</p>
        </div>
      </div>
      <div className="relative w-full">
        <span className="z-[-1] max-h-fit leading-none w-fit absolute text-[180px] -top-6 left-3 text-neutral-600">
          &ldquo;
        </span>
        <p className="italic relative max-w-[80%] mx-auto text-center">
          Your home is special. I am here to help you make your dream home a
          reality. This is the reason I got into the construction business
        </p>
        <span className="z-[-1] max-h-fit leading-none w-fit absolute text-[180px] rotate-180 -bottom-6 right-3 text-neutral-600">
          &ldquo;
        </span>
      </div>
    </>
  );
};
