import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Pokedex = styled.div`
  position: relative;

  .name-pokemon {
    position: absolute;
    top: 36rem;
    right: 11rem;

    > span {
      font-size: 1.8rem;
    }

    &:nth-child(1) {
      
    }
  }
`;
