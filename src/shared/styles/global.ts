"use client";

import styled, { createGlobalStyle, keyframes } from "styled-components";

export const ResetCSS = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-size: 62.5%;
    }

    .flex {
        display: flex;
    }

    .main {
        width: calc(100% - 40px);
        margin-left: 60px;
    }

    a {
      text-decoration: none;
    }

    button {
      cursor: pointer;
      border: none;
    }


`;

const glow = keyframes`
  from {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
  to {
    box-shadow: 0 0 15px rgba(255, 255, 255, 1);
  }
`;

export const Input = styled.input`
  width: 230px;
  height: 31px;
  border-radius: 10px;
  background: transparent;
  border: 2px solid white;
  background-image: url("./search.svg");
  background-repeat: no-repeat;
  background-position: calc(100% - 10px) center;
  background-size: 16px;
  margin-top: 2rem;
  padding-left: 12px;
  color: #fff;
  transition: box-shadow 0.3s ease;

  &:focus {
    animation: ${glow} 0.5s alternate;
  }

  &::placeholder {
    color: #fff;
  }
`;
