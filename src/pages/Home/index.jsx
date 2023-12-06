import { useState } from "react";
import { api } from "../../services/api";

import { Container, Pokedex } from "./styles";
import ImagePokedex from "../../assets/pokedexm.png";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Home() {
  const [search, setSearch] = useState([]);
  const [idPokemon, setIdPokemon] = useState(1);
  const [imagePokemon, setImagePokemon] = useState(null);

  async function fetchPokemons(search) {
    const formatedSearch = search.toLowerCase();
    const response = await api
      .get(`/pokemon/${formatedSearch}`)
      .then((response) => {
        setSearch(response.data);
        setImagePokemon(response.data.sprites.front_default);
        setIdPokemon(response.data.id);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setSearch([]);
          setImagePokemon(null);
          return;
        }
      });

    return response;
  }

  async function handlePreviousPokemon() {
    setIdPokemon(prevState => prevState - 1)
    const response = await api.get(`/pokemon/${idPokemon}`);
    setSearch(response.data);
    setImagePokemon(response.data.sprites.front_default);
  }

  return (
    <Container>
      <Pokedex>
        {imagePokemon && (
          <img
            src={imagePokemon}
            alt="imagem de um pokemon"
            className="image-pokemon"
          />
        )}

        <img src={ImagePokedex} alt="" />

        <div className="name-pokemon">
          <span>{search.id}- </span>
          <span>{search.name}</span>
        </div>

        <Input onChange={(e) => fetchPokemons(e.target.value)} />

        <div className="buttons">
          <Button title="Anterior" onClick={handlePreviousPokemon} />
          <Button title="Próximo" />
        </div>
      </Pokedex>
    </Container>
  );
}
