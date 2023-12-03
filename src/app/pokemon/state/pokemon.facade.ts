import { Injectable } from '@angular/core';
import { PokemonState } from './pokemon.reducer';
import { Store } from '@ngrx/store';
import * as selector from './pokemon.selectors';
import {
  loadPokemon,
  loadPokemons,
  loadPokemonsTypes,
} from './pokemon.actions';
import { GetAllQuery } from 'src/app/core/models/get-all-query';

@Injectable()
export class PokemonFacade {
  public pokemons$ = this._store.select(selector.selectedPokemons);

  public pokemon$ = this._store.select(selector.selectedPokemon);

  public pokemonTypes$ = this._store.select(selector.selectedTypes);

  public pokemonStats$ = this._store.select(selector.selectedStats);

  public isLoading$ = this._store.select(selector.selectedIsLoading);

  public pokemonQuery$ = this._store.select(selector.pokemonQuery);

  constructor(private _store: Store<PokemonState>) {}

  public loadPokemon(pokemonId: number | string, pokemonQuery: GetAllQuery) {
    this._store.dispatch(loadPokemon({ pokemonId, pokemonQuery }));
  }

  public loadPokemons() {
    this._store.dispatch(loadPokemons());
  }

  public loadPokemonTypes() {
    this._store.dispatch(loadPokemonsTypes());
  }
}
