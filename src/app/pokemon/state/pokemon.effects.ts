import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import {
  ManagePokemonsActionsUnion,
  PokemonActionsEnum,
  loadPokemonError,
  loadPokemonSuccess,
  loadPokemonsError,
  loadPokemonsSuccess,
  loadPokemonsTypes,
  loadPokemonsTypesSuccess,
} from './pokemon.actions';
import { PokeService } from '../service/poke.service';

@Injectable()
export class PokemonEffects {
  public readonly loadPokemon$ = createEffect(() =>
    this._actions$.pipe(
      ofType(PokemonActionsEnum.LOAD_POKEMON),
      switchMap(({ pokemonId }) => this._pokeService.getPokemon(pokemonId)),
      map((pokeResponse) => loadPokemonSuccess({ pokeResponse })),
      catchError((error) => of(loadPokemonError({ error })))
    )
  );

  public readonly loadPokemons$ = createEffect(() =>
    this._actions$.pipe(
      ofType(PokemonActionsEnum.LOAD_POKEMONS),
      switchMap(() => this._pokeService.getAllPokemons()),
      map((pokemonsResponse) => loadPokemonsSuccess({ pokemonsResponse })),
      catchError((error) => of(loadPokemonsError({ error })))
    )
  );

  public readonly loadPokemonTypes$ = createEffect(() => this._actions$.pipe(
    ofType(PokemonActionsEnum.LOAD_POKEMONS_TYPES),
    switchMap(()=> this._pokeService.getAllPokemonsTypes()),
    map((pokemonsTypesResponse)=> loadPokemonsTypesSuccess({pokemonsTypesResponse}))
  ));

  constructor(
    private _pokeService: PokeService,
    private _actions$: Actions<ManagePokemonsActionsUnion>
  ) {}
}
