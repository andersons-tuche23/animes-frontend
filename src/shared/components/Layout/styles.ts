"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: 640px) {
    display: block;
  }
`;

export const Main = styled.main`
  width: calc(100% - 40px);
  margin-left: 60px;

  @media (max-width: 640px) {
    width: 100%;
    margin-left: 0;
  }
`;
