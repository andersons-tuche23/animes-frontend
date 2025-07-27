"use client";

import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 230px;
  padding: 0 1rem;
  height: 31px;
  border-radius: 10px;
  margin-top: 2rem;
  border: 2px solid ${({ theme }) => theme.WHITE};
  color: ${({ theme }) => theme.WHITE};

  button {
    color: ${({ theme }) => theme.WHITE};
  }
`;

export const Field = styled.input`
  background: transparent;
  color: ${({ theme }) => theme.WHITE};
  flex: 1;
  height: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.WHITE};
  }
`;
