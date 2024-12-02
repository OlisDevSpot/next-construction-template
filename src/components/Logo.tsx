import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image src="/images/logo.svg" alt="logo" width={150} height={100} />
    </div>
  );
}
