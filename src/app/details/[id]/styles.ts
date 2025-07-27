"use client";

import styled from "styled-components";

export const WrapperHeader = styled.div`
  width: 100%;
  height: 302px;
  position: relative;

  @media (max-width: 640px) {
    height: 150px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 0 8rem;
  gap: 8rem;

  @media (max-width: 640px) {
    flex-direction: column;
    padding: 0 2rem;
    align-items: center;
    gap: 6rem;
  }
`;

export const Body = styled.div`
  padding-top: 4rem;

  h1 {
    font-size: 3.2rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.6rem;
  }

  @media (max-width: 640px) {
    padding-top: 0;
  }
`;
