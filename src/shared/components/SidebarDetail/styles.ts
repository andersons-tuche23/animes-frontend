"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 221px;
  transform: translateY(-6rem);

  @media (max-width: 640px) {
    transform: translateY(3rem);
  }
`;

export const TubeButton = styled.button`
  width: 100%;
  height: 49px;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.ORANGE};
  color: ${({ theme }) => theme.WHITE};
`;

export const ApprovedText = styled.p`
  color: ${({ theme }) => theme.ESMERALD};
  font-size: 1.6rem;
  font-weight: 500;
`;

export const Line = styled.div`
  display: flex;
  gap: 0.875rem;

  p {
    font-size: 1.6rem;
    font-weight: 500;
  }
`;
