import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link href="/">
    <Image src="/animesHome.png" alt="Logo" width={200} height={49} />
  </Link>
);
