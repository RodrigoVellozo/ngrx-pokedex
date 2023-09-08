import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private readonly POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon';
  private readonly POKEMON_SPECIES_URL = 'https://pokeapi.co/api/v2/pokemon-species/';
  private readonly POKEMON_STATS_URL = 'https://pokeapi.co/api/v2/pokemon-species/';
  private readonly POKEMONS_TYPES_URL = 'https://pokeapi.co/api/v2/type/';

  constructor(private readonly http: HttpClient) {}

  public getPokemon(pokemonId: string | number) {
    return this.http.get<any>(`${this.POKEMONS_URL}/${pokemonId}`).pipe(
      map((res) => {
        return res;
      })
    );
  }

  public getPokemonSpecies(pokemonId: string | number) {
    return this.http.get<any>(`${this.POKEMON_SPECIES_URL}/${pokemonId}`).pipe(
      map((res) => {
        return res;
      })
    );
  }

  public getAllPokemonsTypes() {
    let types: any = [];
    for (var i = 1; i <= 50; i++) types.push(i);
    return from(types).pipe(
      mergeMap((type) =>
        this.http.get<any>(`${this.POKEMONS_URL}/${type}`).pipe(
          map((res) => {
            return res.types.map((type: any) => type.type.name);
          })
        )
      )
    );
  }

  public getAllPokemons() {
    return this.http.get<any>(`${this.POKEMONS_URL}?limit=50`).pipe(
      map((data) => {
        return data.results;
      })
    );
  }
}
