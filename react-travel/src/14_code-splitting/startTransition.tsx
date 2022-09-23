/* eslint-disable consistent-return */
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import PokemonDetail from './PokemonDetail';

export default function App() {
  return (
    <div>
      <h1>Pokedex memory game</h1>
      <p>
        Test your Poke-memory by guessing which Pokemon is next —before it
        appears.
      </p>
      <ErrorBoundary>
        <React.Suspense fallback="loading pokemon…">
          <PokemonDetail />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}
