import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Pokedex = styled.div`
  position: relative;

  .image-pokemon {
      position: absolute;
      top: 16.5rem;
      left: 10.5rem;
      width: 20rem;
  }

  .name-pokemon {
    position: absolute;
    top: 35.5rem;
    right: 11rem;

    > span {
      font-size: 2.4rem;
      font-weight: bold;
      &:nth-child(1) {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
      }
    }
  }

  input {
    position: absolute;
    top: 45.5rem;
    right: 10.5rem;
  }

  .buttons {
    width: 30rem;
    position: absolute;
    display: flex;
    gap: 2rem;

    top: 55.5rem;
    right: 8rem;
  }
`;
