import { useEffect, useState } from "react";
import CardPokemon from "../../components/CardPokemon";
import axios from "axios";
import "./styles.css";
import Loader from "../../components/Loader";

const PokemonPage = () => {
  const [referenciasPokemons, setReferenciasPokemons] = useState([]);
  const [listaPokemons, setListaPokemons] = useState([])
  

  const pegar100ReferenciasPokemons = async () => {
    try {
      const resposta = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );
      setReferenciasPokemons(resposta.data.results);
    } catch (error) {
      console.error("Erro ao buscar as referencias dos pokemons", error);
    }
  };

  useEffect(() => {
    pegar100ReferenciasPokemons();
  }, []);

  const pegarListaDePokemons = async () => {
    const listaTemporaria = [];

    for (const referencia of referenciasPokemons) {
      try {
        const resposta = await axios.get(referencia.url);
        listaTemporaria.push(resposta.data);
      } catch (error) {
        console.error("Erro ao buscar o pokemon", error);
        setRemoveLoading(true)
      }
    }

    setListaPokemons(listaTemporaria);
  };

  useEffect(() => {
    pegarListaDePokemons();
  }, [referenciasPokemons]);

  return ( 
    
    <div className="pokemon-container">
      {!removeLoader && <loading />}
      {listaPokemons.map((pokemon) => (
        <CardPokemon
          nome={pokemon.name}
          foto={pokemon.sprites.front_default}
          id={pokemon.id}
          url={pokemon.forms[0].url}
        />
      ))}
        </div>
  );
};

export default PokemonPage;

 /*const [loading, setLoading ] =useState(true)
  useEffect(()=> {
    setTimeout (() => setLoading(false), 500)
  },[])*/