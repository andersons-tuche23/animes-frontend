import Image from "next/image";
import { Wrapper } from "./styles";

export const Logo = () => (
  <Wrapper href="/">
    <Image src="/animesHome.png" alt="Logo" width={200} height={49} />
  </Wrapper>
);
