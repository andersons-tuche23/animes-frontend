"use client";

import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled(Link)`
  width: 100%;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
