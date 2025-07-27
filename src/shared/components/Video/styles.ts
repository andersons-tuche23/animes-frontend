"use client";

import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const IframeWrapper = styled.div`
  width: 90%;
  max-width: 960px;
  aspect-ratio: 16 / 9;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;
