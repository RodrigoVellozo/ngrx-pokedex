import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokemonState, pokemonFeatureKey } from './pokemon.reducer';

export const selectPokemonState =
  createFeatureSelector<PokemonState>(pokemonFeatureKey);

export const selectedPokemons = createSelector(
  selectPokemonState,
  (state) => state.pokemonsResponse
);

export const selectedPokemon = createSelector(
  selectPokemonState,
  (state) => state.pokeResponse
);

export const selectedTypes = createSelector(
  selectPokemonState,
  (state) => state.pokeResponse?.types
);

export const selectedStats = createSelector(
  selectPokemonState,
  (state) => state.pokeResponse?.stats
);

export const selectedIsLoading = createSelector(
  selectPokemonState,
  (state) => state.isLoading
);
