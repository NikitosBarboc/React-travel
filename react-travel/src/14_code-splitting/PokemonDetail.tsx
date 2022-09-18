import React from 'react';
import suspensify from './suspensify';
import fetchPokemon from './fetchPokemon';

const initialPokemon = suspensify(fetchPokemon(1));

function PokemonDetail() {
  const [pokemonResource, setPokemonResource] = React.useState(initialPokemon);
  const pokemon = pokemonResource.read();
  const [isPending, startTransition] = React.useTransition();
  return (
    <article style={{ opacity: isPending ? 0.2 : 1 }}>
      <h2>{pokemon.name}</h2>
      <button
        type="button"
        onClick={() => startTransition(
          () => setPokemonResource(suspensify(fetchPokemon(pokemon.id + 1))),
        )}
      >
        Next
      </button>
    </article>
  );
}

export default PokemonDetail;
