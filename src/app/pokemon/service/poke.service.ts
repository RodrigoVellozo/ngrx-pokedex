import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private readonly POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon';
  private readonly POKEMON_SPECIES_URL = 'https://pokeapi.co/api/v2/pokemon-species/';
  private readonly POKEMON_STATS_URL = 'https://pokeapi.co/api/v2/pokemon-species/';

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

  public getPokemonTypes(pokemonId: string | number) {
    return of([]);
  }

  public getAllPokemons() {
    return this.http.get<any>(`${this.POKEMONS_URL}?limit=2000`).pipe(
      map((data) => {
        return data.results;
      })
    );
  }
}
