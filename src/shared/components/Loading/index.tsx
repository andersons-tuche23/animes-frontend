"use client";

import Image from "next/image";

import { Wrapper } from "./styles";

export const Loading = () => (
  <Wrapper>
    <Image src="/lee.gif" alt="Loading..." width={498} height={371} />
  </Wrapper>
);
