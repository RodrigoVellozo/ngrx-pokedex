import { HttpErrorResponse } from '@angular/common/http';
import { Action, createReducer, on } from '@ngrx/store';
import * as action from './pokemon.actions';

export const pokemonFeatureKey = 'pokemonReducer';

export interface PokemonState {
  isLoading: boolean;

  pokeResponse?: any;

  pokemonsResponse?: any[];

  pokemonsTypesResponse?: any[];

  error?: HttpErrorResponse;
}

export const initialState: PokemonState = {
  isLoading: false,
};

const _pokemonReducer = createReducer(
  initialState,
  on(action.loadPokemon, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(action.loadPokemonSuccess, (state, { pokeResponse }) => ({
    ...state,
    isLoading: false,
    pokeResponse,
  })),
  on(action.loadPokemonError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  on(action.loadPokemons, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(action.loadPokemonsSuccess, (state, { pokemonsResponse }) => ({
    ...state,
    isLoading: false,
    pokemonsResponse,
  })),
  on(action.loadPokemonsError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  on(action.loadPokemonsTypes, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(action.loadPokemonsTypesSuccess, (state, { pokemonsTypesResponse }) => ({
    ...state,
    isLoading: false,
    pokemonsTypesResponse,
  })),
  on(action.loadPokemonsTypesError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export function pokemonReducer(state = initialState, action: Action) {
  return _pokemonReducer(state, action);
}
