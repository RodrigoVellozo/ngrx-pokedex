import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props, union } from "@ngrx/store";

export enum PokemonActionsEnum {
    LOAD_POKEMON = 'LOAD_POKEMON',
    LOAD_POKEMON_SUCCESS = 'LOAD_POKEMON_SUCCESS',
    LOAD_POKEMON_ERROR = 'LOAD_POKEMON_ERROR',

    LOAD_POKEMONS = 'LOAD_POKEMONS',
    LOAD_POKEMONS_SUCCESS = 'LOAD_POKEMONS_SUCCESS',
    LOAD_POKEMONS_ERROR = 'LOAD_POKEMONS_ERROR',

    LOAD_POKEMONS_TYPES = 'LOAD_POKEMONS_TYPES',
    LOAD_POKEMONS_TYPES_SUCCESS = 'LOAD_POKEMONS_TYPES_SUCCESS',
    LOAD_POKEMONS_TYPES_ERROR = 'LOAD_POKEMONS_TYPES_ERROR',
}

export const loadPokemon = createAction(PokemonActionsEnum.LOAD_POKEMON, props<{pokemonId: string | number}>());

export const loadPokemonSuccess = createAction(PokemonActionsEnum.LOAD_POKEMON_SUCCESS, props<{pokeResponse: any[]}>());

export const loadPokemonError = createAction(PokemonActionsEnum.LOAD_POKEMON_ERROR, props<{error: HttpErrorResponse}>());

export const loadPokemons = createAction(PokemonActionsEnum.LOAD_POKEMONS);

export const loadPokemonsSuccess = createAction(PokemonActionsEnum.LOAD_POKEMONS_SUCCESS, props<{pokemonsResponse: any}>());

export const loadPokemonsError = createAction(PokemonActionsEnum.LOAD_POKEMONS_ERROR, props<{error: HttpErrorResponse}>());

export const loadPokemonsTypes = createAction(PokemonActionsEnum.LOAD_POKEMONS_TYPES);

export const loadPokemonsTypesSuccess = createAction(PokemonActionsEnum.LOAD_POKEMONS_TYPES_SUCCESS, props<{pokemonsTypesResponse: any[]}>());

export const loadPokemonsTypesError = createAction(PokemonActionsEnum.LOAD_POKEMONS_TYPES_ERROR, props<{error: HttpErrorResponse}>());

const _managePokemonActionsUnion = union({
    loadPokemon,
    loadPokemonSuccess,
    loadPokemonError,

    loadPokemons,
    loadPokemonsSuccess,
    loadPokemonsError,

    loadPokemonsTypes,
    loadPokemonsTypesSuccess,
    loadPokemonsTypesError
});

export type ManagePokemonsActionsUnion = typeof _managePokemonActionsUnion;