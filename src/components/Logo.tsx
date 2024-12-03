import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/">
        <Image src="/images/logo.svg" alt="logo" width={150} height={100} />
      </Link>
    </div>
  );
}
