import { Injectable } from '@angular/core';
import { PokemonState } from './pokemon.reducer';
import { Store } from '@ngrx/store';
import * as selector from './pokemon.selectors';
import { loadPokemon, loadPokemons } from './pokemon.actions';

@Injectable()
export class PokemonFacade {
  public pokemons$ = this._store.select(selector.selectedPokemons);

  public pokemon$ = this._store.select(selector.selectedPokemon);

  public pokemonTypes$ = this._store.select(selector.selectedTypes);

  public pokemonStats$ = this._store.select(selector.selectedStats);

  public isLoading$ = this._store.select(selector.selectedIsLoading);

  constructor(private _store: Store<PokemonState>) {}

  public loadPokemons() {
    this._store.dispatch(loadPokemons());
  }

  public loadPokemon(pokemonId: number | string) {
    this._store.dispatch(loadPokemon({ pokemonId }));
  }
}
