import { Container, Pokedex } from "./styles";
import ImagePokedex from "../../assets/pokedexm.png";

export function Home() {
  return (
    <Container>
      <Pokedex>
        <img src={ImagePokedex} alt="" />
        <div className="name-pokemon">
          <span>1- </span>
          <span>Bulbssaur</span>
        </div>
      </Pokedex>
    </Container>
  );
}
