import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, mergeMap } from 'rxjs';
import { GetAllQuery } from 'src/app/core/models/get-all-query';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private readonly POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon';
  private readonly POKEMON_SPECIES_URL = 'https://pokeapi.co/api/v2/pokemon-species/';
  private readonly POKEMON_STATS_URL = 'https://pokeapi.co/api/v2/pokemon-species/';
  private readonly POKEMONS_TYPES_URL = 'https://pokeapi.co/api/v2/type/';
  private readonly pokemonsAmount = 4;

  

  constructor(private readonly http: HttpClient) {}

  public getPokemon(pokemonId?: string | number, pokemonQuery?: GetAllQuery) {
    return this.http.get<any>(`${this.POKEMONS_URL}/${pokemonQuery?.query}?limit=${this.pokemonsAmount}`).pipe(
      map((res) => {
        console.log('service: ', res);
        if(res.results) return null;
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
    for (var i = 1; i <= this.pokemonsAmount; i++) types.push(i);
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
    return this.http.get<any>(`${this.POKEMONS_URL}?limit=${this.pokemonsAmount}`).pipe(
      map((data) => {
        return data.results;
      })
    );
  }
}
