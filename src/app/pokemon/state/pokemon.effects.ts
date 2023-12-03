import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';

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
import { PokemonFacade } from './pokemon.facade';

@Injectable()
export class PokemonEffects {
  public readonly loadPokemon$ = createEffect(() =>
    this._actions$.pipe(
      ofType(PokemonActionsEnum.LOAD_POKEMON),
      withLatestFrom(this._pokemonFacade.pokemonQuery$),
      switchMap(([{ pokemonId, pokemonQuery  }]) => {
        return this._pokeService.getPokemon(pokemonId, pokemonQuery);
      }),
      map((pokeResponse) => loadPokemonSuccess({ pokeResponse })),
      catchError((error) => of(loadPokemonError({ error })))
    )
  );

  public readonly loadPokemons$ = createEffect(() =>
    this._actions$.pipe(
      ofType(PokemonActionsEnum.LOAD_POKEMONS),
      withLatestFrom(this._pokemonFacade.pokemonQuery$),
      switchMap(() => {
        return this._pokeService.getAllPokemons();
      }),
      map((pokemonsResponse) => loadPokemonsSuccess({ pokemonsResponse })),
      catchError((error) => of(loadPokemonsError({ error })))
    )
  );

  public readonly loadPokemonTypes$ = createEffect(() =>
    this._actions$.pipe(
      ofType(PokemonActionsEnum.LOAD_POKEMONS_TYPES),
      switchMap(() => this._pokeService.getAllPokemonsTypes()),
      map((pokemonsTypesResponse) =>
        loadPokemonsTypesSuccess({ pokemonsTypesResponse })
      )
    )
  );

  constructor(
    private _pokeService: PokeService,
    private _pokemonFacade: PokemonFacade,
    private _actions$: Actions<ManagePokemonsActionsUnion>
  ) {}
}
