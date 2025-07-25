import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 2rem;
  margin-top: 4rem;

  @media (max-width: 1080px) {
    margin-top: 3rem;
  }

  @media (max-width: 640px) {
    margin-top: 2rem;
  }
`;

export const Icon = styled.div`
  color: ${({ theme }) => theme.ORANGE};
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  font-size: 3.2rem;
  gap: 1rem;

  strong {
    color: ${({ theme }) => theme.ORANGE};
  }

  span {
    color: ${({ theme }) => theme.GREEN};
    font-weight: bold;
  }

  @media (max-width: 1080px) {
    font-size: 2.4rem;
    gap: 0.875rem;
  }

  @media (max-width: 640px) {
    font-size: 2rem;
    gap: 0.5rem;
  }
`;
