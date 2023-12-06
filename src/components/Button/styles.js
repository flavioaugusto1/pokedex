import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  box-shadow: -3px 3px 0px 2px #0d0c0f;

  border: none;
  border-radius: 0.4rem;
  padding: 1rem;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
    transition: 1s;
  }
`;
