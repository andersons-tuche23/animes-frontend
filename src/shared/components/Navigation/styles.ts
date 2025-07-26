import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  margin-bottom: 4rem;
  margin-right: 2rem;

  button {
    background-color: ${({ theme }) => theme.ORANGE};
    border: none;
    cursor: pointer;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    margin-left: 1rem;
    color: ${({ theme }) => theme.WHITE};
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 640px) {
    margin-right: 4rem;
  }
`;
