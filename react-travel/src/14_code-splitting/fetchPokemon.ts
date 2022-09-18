import sleep from 'sleep-promise';

function fetchPokemon(id = 1) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then(sleep(500));
}

export default fetchPokemon;
