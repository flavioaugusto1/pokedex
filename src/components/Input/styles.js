import styled from "styled-components";

export const Container = styled.input`
  width: 25rem;
  padding: 1rem;

  border: none;
  border-radius: .4rem;
  
  box-shadow: -3px 3px 0px 2px #0D0C0F;

  &::placeholder{
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  outline: none;
`;
