import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Container, Pokedex } from "./styles";
import ImagePokedex from "../../assets/pokedexm.png";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Home() {
  const [search, setSearchPokemon] = useState("bulbasaur");
  const [idPokemon, setIdPokemon] = useState("");
  const [namePokemon, setNamePokemon] = useState("");
  const [imagePokemon, setImagePokemon] = useState(null);

  async function handlePreviousPokemon() {
    const previousPokemon = idPokemon - 1;
    const response = await api.get(`/pokemon/${previousPokemon}`);
    setIdPokemon(response.data.id);
    setNamePokemon(response.data.name);
    setImagePokemon(response.data.sprites.front_default);
  }

  async function handleNextPokemon() {
    const nextPokemon = idPokemon + 1;
    const response = await api.get(`/pokemon/${nextPokemon}`);
    setIdPokemon(response.data.id);
    setNamePokemon(response.data.name);
    setImagePokemon(response.data.sprites.front_default);
  }

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await api.get(`/pokemon/${search.toLowerCase()}`);

        setImagePokemon(response.data.sprites.front_default);
        setIdPokemon(response.data.id);
        setNamePokemon(response.data.name);
        return;
      } catch (error) {
        if (error.response.status === 404) {
          setNamePokemon("...não localizado");
          setIdPokemon("");
          setImagePokemon(null);
        }
      }
    }

    fetchPokemon();
  }, [search]);

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
          <span>{idPokemon}- </span>
          <span>{namePokemon}</span>
        </div>

        <Input onChange={(e) => setSearchPokemon(e.target.value)} />

        <div className="buttons">
          <Button title="Anterior" onClick={handlePreviousPokemon} />
          <Button title="Próximo" onClick={handleNextPokemon} />
        </div>
      </Pokedex>
    </Container>
  );
}
